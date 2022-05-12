import ParseService from "../service/parseService";
import ProxyService from "../service/proxyService";
import RequestService from "../service/requestService";
import SeasonService from "../service/seasonService";
import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
  improveSeason,
  panel,
  regexApiEpisodes,
  regexApiObjects,
  regexApiSeasons,
  regexPageSeries,
  regexPageWatch,
  startApiUpNextSeries,
  upNextSeries,
} from "./tabConst";

export class TabOverrideXMLHttpRequest {
  private upNext: string | undefined;
  private seasonsWithLang: improveSeason[] | undefined;
  private currentEpisode: panel | undefined;
  private href;
  private eventsToClean: NodeJS.Timeout[];

  private readonly parseService: ParseService;
  private readonly proxyService: ProxyService;

  constructor() {
    const requestService = new RequestService();
    const seasonService = new SeasonService(requestService);
    this.parseService = new ParseService(requestService, seasonService);
    this.proxyService = new ProxyService(
      requestService,
      seasonService,
      this.parseService
    );

    this.href = window.location.href;
    this.eventsToClean = [];

    setInterval(() => this.resetIfChanged(), 100);
  }

  resetIfChanged() {
    if (this.href != window.location.href) {
      this.eventsToClean.forEach(clearTimeout);
      this.eventsToClean = [];
      this.upNext = undefined;
      this.seasonsWithLang = undefined;
      this.currentEpisode = undefined;
      this.href = window.location.href;
    }
  }

  start(): void {
    const tabOverrideXMLHttpRequest = this;

    let _open = XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function (method, url) {
      let url2 = "";
      if (url instanceof URL) {
        url2 = url.href;
      } else if (typeof url === "string") {
        url2 = url;
      }
      let _onloadend = this.onloadend;
      const _this = this;

      this.onloadend = function () {
        if (_onloadend == null) return;

        new Promise<void>((resolve) => {
          if (_this.readyState === 4 && _this.status === 200) {
            tabOverrideXMLHttpRequest.resetIfChanged();
            const data = JSON.parse(_this.responseText);

            if (document.URL.match(regexPageWatch)) {
              if (url2.match(regexApiObjects)) {
                tabOverrideXMLHttpRequest.handleObjectsInPageWatch(data, url2);
              }
            } else if (document.URL.match(regexPageSeries)) {
              if (url2.match(regexApiSeasons)) {
                tabOverrideXMLHttpRequest
                  .handleSeasonsInPageSeries(data, url2)
                  .then((seasons) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(seasons),
                    });
                    resolve();
                  });
                return;
              }
              if (url2.match(regexApiEpisodes)) {
                tabOverrideXMLHttpRequest
                  .handleEpisodesInPageSeries(data, url2)
                  .then((episodes) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(episodes),
                    });
                    resolve();
                  });
                return;
              } else if (url2.startsWith(startApiUpNextSeries)) {
                tabOverrideXMLHttpRequest.saveUpNext(data);
              }
            }
          }
          resolve();
        }).finally(() => {
          if (_onloadend == null) return;
          _onloadend.apply(this, <any>arguments);
        });
      };

      Object.defineProperty(this, "onloadend", {
        get: function () {
          return _onloadend;
        },
        set: function (value) {
          _onloadend = value;
        },
      });

      return _open.apply(_this, <any>arguments);
    };
  }

  private async handleObjectsInPageWatch(
    dataObjects: collectionPanel,
    url: string
  ): Promise<void> {
    this.saveCurrentEpisode(dataObjects);
    const currentEpisode = await this.waitForCurrentEpisode();
    const seasons = await this.proxyService.getSeasonsFromEpisode(
      dataObjects,
      url
    );
    this.proxyService.sendLanguagesToVilos(seasons, currentEpisode, url);
  }

  private async handleSeasonsInPageSeries(
    seasons: collectionSeason,
    url: string
  ): Promise<collectionSeason> {
    this.saveSeasonWithLang(seasons, url);
    const seasonsWithLang = await this.waitForSeasons();
    const upNext = await this.waitForUpNext();
    const mergedSeasons = await this.proxyService.concatLanguages(
      seasonsWithLang,
      upNext,
      url
    );
    seasons.items = mergedSeasons;
    return seasons;
  }

  private async handleEpisodesInPageSeries(
    data: any,
    url2: string
  ): Promise<collectionEpisode> {
    let seasonsWithLang = await this.waitForSeasons();
    return await this.proxyService.addEpisodesFromOtherLanguages(
      data,
      seasonsWithLang,
      url2
    );
  }

  private saveUpNext(dataUpNextSeries: upNextSeries): void {
    this.upNext = dataUpNextSeries.panel.episode_metadata.season_id;
  }

  private async saveSeasonWithLang(
    seasons: collectionSeason,
    url: string
  ): Promise<void> {
    this.seasonsWithLang = await this.parseService.parseSeasonsWithLang(
      seasons,
      url
    );
  }

  private saveCurrentEpisode(dataObjects: collectionPanel): void {
    this.currentEpisode = dataObjects.items[0];
  }

  private waitForUpNext(): Promise<string> {
    return new Promise<string>((resolve) => {
      if (this.upNext == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForUpNext()), 100)
        );
        return;
      }

      return resolve(this.upNext);
    });
  }

  private waitForSeasons(): Promise<improveSeason[]> {
    return new Promise<improveSeason[]>((resolve) => {
      if (this.seasonsWithLang == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForSeasons()), 100)
        );
        return;
      }

      return resolve(this.seasonsWithLang);
    });
  }

  private waitForCurrentEpisode(): Promise<panel> {
    return new Promise<panel>((resolve) => {
      if (this.currentEpisode == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForCurrentEpisode()), 100)
        );
        return;
      }

      return resolve(this.currentEpisode);
    });
  }
}
