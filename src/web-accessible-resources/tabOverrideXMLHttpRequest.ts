import ParseService from "../service/parseService";
import ProxyService from "../service/proxyService";
import RequestService from "../service/requestService";
import SaveService from "../service/saveService";
import SeasonService from "../service/seasonService";
import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
  improveMergedEpisode,
  improveMergedSeason,
  improveSeason,
  panel,
  regexApiEpisodes,
  regexApiObjects,
  regexApiSeasons,
  regexApiVideoStreams,
  regexPageSeries,
  regexPageWatch,
  regexApiUpNextSeries,
  upNextSeries,
  videoStreams,
} from "./tabConst";

export default class TabOverrideXMLHttpRequest {
  private readonly parseService: ParseService;
  private readonly proxyService: ProxyService;
  private readonly saveService: SaveService;

  constructor() {
    const requestService = new RequestService();
    const seasonService = new SeasonService(requestService);
    this.parseService = new ParseService(requestService, seasonService);
    this.proxyService = new ProxyService(
      requestService,
      seasonService,
      this.parseService
    );
    this.saveService = new SaveService();
  }

  start(): void {
    const tabOverrideXMLHttpRequest: TabOverrideXMLHttpRequest = this;

    const _open = XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function (method, url) {
      let url2 = "";
      if (url instanceof URL) {
        url2 = url.href;
      } else if (typeof url === "string") {
        url2 = url;
      }
      let _onloadend = this.onloadend;
      const _this: XMLHttpRequest = this;

      this.onloadend = function () {
        if (_onloadend == null) return;

        new Promise<void>((resolve) => {
          if (_this.readyState === 4 && _this.status === 200) {
            tabOverrideXMLHttpRequest.saveService.resetIfChanged();
            const data: any = JSON.parse(_this.responseText);

            if (document.URL.match(regexPageWatch)) {
              if (url2.match(regexApiObjects)) {
                tabOverrideXMLHttpRequest
                  .handleObjectsInPageWatch(data, url2)
                  .then((episodes) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(episodes),
                    });
                    resolve();
                  });
                return;
              } else if (url2.match(regexApiVideoStreams)) {
                tabOverrideXMLHttpRequest
                  .handleVideoStreamsInPageWatch(data, url2)
                  .then((videoStreams) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(videoStreams),
                    });
                    resolve();
                  });
                return;
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
              } else if (url2.match(regexApiUpNextSeries)) {
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
  ): Promise<collectionPanel> {
    const currentEpisode: panel = this.saveCurrentEpisode(dataObjects);
    this.sendLanguagesToVilos(dataObjects, url);
    this.proxyService.addSubtitlesFromOtherLanguages(currentEpisode);
    dataObjects.items[0] = currentEpisode;
    return dataObjects;
  }

  private async handleVideoStreamsInPageWatch(
    videoStreams: videoStreams,
    url: string
  ): Promise<videoStreams> {
    const currentEpisode: panel =
      await this.saveService.waitForCurrentEpisode();
    const mergedEpisodes: improveMergedEpisode =
      await this.saveService.waitForCurrentMergedEpisodes();
    return await this.proxyService.addVideoStreamsFromOtherLanguages(
      videoStreams,
      url,
      currentEpisode,
      mergedEpisodes
    );
  }

  private async handleSeasonsInPageSeries(
    seasons: collectionSeason,
    url: string
  ): Promise<collectionSeason> {
    const seasonsWithLang: improveSeason[] = await this.saveSeasonWithLang(
      seasons,
      url
    );
    const upNext: string = await this.saveService.waitForUpNext();
    const mergedSeasons: improveMergedSeason[] =
      await this.proxyService.concatLanguages(seasonsWithLang, upNext);
    seasons.items = mergedSeasons;
    return seasons;
  }

  private async handleEpisodesInPageSeries(
    collectionEpisode: collectionEpisode,
    url: string
  ): Promise<collectionEpisode> {
    const seasonsWithLang: improveSeason[] =
      await this.saveService.waitForSeasonsWithLang();
    const mergedEpisodesList: improveMergedEpisode[] =
      await this.proxyService.addEpisodesFromOtherLanguages(
        collectionEpisode,
        seasonsWithLang,
        url
      );
    collectionEpisode.items = mergedEpisodesList;
    return collectionEpisode;
  }

  private async sendLanguagesToVilos(
    dataObjects: collectionPanel,
    url: string
  ) {
    const currentEpisode: panel =
      await this.saveService.waitForCurrentEpisode();
    const currentEpisodeId: string = currentEpisode.id;
    const seasons: collectionSeason =
      await this.proxyService.getSeasonsFromEpisode(dataObjects, url);
    const seasonsWithLang: improveSeason[] = await this.saveSeasonWithLang(
      seasons,
      url
    );

    const {
      currentSeasonWithLang,
      mergedEpisodesList,
    }: {
      currentSeasonWithLang: improveSeason;
      mergedEpisodesList: improveMergedEpisode[];
    } = await this.proxyService.getInfos(
      currentEpisode,
      currentEpisodeId,
      seasonsWithLang,
      url
    );

    const mergedEpisodes: improveMergedEpisode = this.saveCurrentMergedEpisodes(
      currentEpisode,
      mergedEpisodesList
    );

    this.proxyService.sendLanguagesToVilos(
      currentEpisode,
      currentSeasonWithLang,
      currentEpisodeId,
      mergedEpisodes
    );
  }

  private saveUpNext(dataUpNextSeries: upNextSeries): string {
    return this.saveService.saveUpNext(
      dataUpNextSeries.panel.episode_metadata.season_id
    );
  }

  private async saveSeasonWithLang(
    seasons: collectionSeason,
    url: string
  ): Promise<improveSeason[]> {
    return this.saveService.saveSeasonWithLang(
      await this.parseService.parseSeasonsWithLang(seasons, url)
    );
  }

  private saveCurrentEpisode(dataObjects: collectionPanel): panel {
    return this.saveService.saveCurrentEpisode(dataObjects.items[0]);
  }

  private saveCurrentMergedEpisodes(
    currentEpisode: panel,
    mergedEpisodesList: improveMergedEpisode[]
  ): improveMergedEpisode {
    const currentEpisodeNumber: number =
      currentEpisode.episode_metadata.sequence_number;

    return this.saveService.saveCurrentMergedEpisodes(
      mergedEpisodesList.find(
        (item) => item.sequence_number === currentEpisodeNumber
      )!
    );
  }
}
