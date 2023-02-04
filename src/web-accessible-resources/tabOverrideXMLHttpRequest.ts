import urlAPI from "../model/urlAPI";
import ParseService from "../service/parseService";
import ProxyService from "../service/proxyService";
import RequestService from "../service/requestService";
import SaveService from "../service/saveService";
import {
  collectionPanel,
  collectionSeason,
  panel,
  regexApiObjects,
  regexApiSeasons,
  regexApiVideoStreams,
  regexPageSeries,
  regexPageWatch,
  season,
  videoStreams,
} from "./tabConst";

export default class TabOverrideXMLHttpRequest {
  private readonly parseService: ParseService;
  private readonly proxyService: ProxyService;
  private readonly saveService: SaveService;

  constructor() {
    const requestService = new RequestService();
    this.parseService = new ParseService();
    this.proxyService = new ProxyService(requestService);
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
      let authorization: string;
      let _onloadend = this.onloadend;
      let _setRequestHeader = this.setRequestHeader;
      const _this: XMLHttpRequest = this;

      this.onloadend = function () {
        if (_onloadend == null) return;

        new Promise<void>((resolve) => {
          if (
            _this.readyState === 4 &&
            _this.status >= 200 &&
            _this.status < 300
          ) {
            tabOverrideXMLHttpRequest.saveService.resetIfChanged();
            const data: any =
              _this.responseText === "" ? "" : JSON.parse(_this.responseText);

            if (document.URL.match(regexPageWatch)) {
              let match: RegExpMatchArray | null = url2.match(regexApiObjects);
              if (match) {
                tabOverrideXMLHttpRequest
                  .handleObjectsInPageWatch(
                    data,
                    new urlAPI(match, authorization)
                  )
                  .then((episodes) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(episodes),
                    });
                    resolve();
                  });
                return;
              }
              match = url2.match(regexApiVideoStreams);
              if (match) {
                tabOverrideXMLHttpRequest
                  .handleVideoStreamsInPageWatch(data)
                  .then((videoStreams) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(videoStreams),
                    });
                    resolve();
                  });
                return;
              }
            } else if (document.URL.match(regexPageSeries)) {
              let match: RegExpMatchArray | null = url2.match(regexApiSeasons);
              if (match) {
                tabOverrideXMLHttpRequest
                  .handleSeasonsInPageSeries(data)
                  .then((seasons) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(seasons),
                    });
                    resolve();
                  });
                return;
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

      this.setRequestHeader = function (name: string, value: string) {
        if (_setRequestHeader == null) return;

        if (name === "Authorization") {
          authorization = value;
        }

        _setRequestHeader.apply(this, <any>arguments);
      };

      return _open.apply(_this, <any>arguments);
    };
  }

  private async handleObjectsInPageWatch(
    dataObjects: collectionPanel,
    urlAPI: urlAPI
  ): Promise<collectionPanel> {
    this.saveUrlApi(urlAPI);
    await this.saveCurrentEpisode(dataObjects);
    this.proxyService.addSubtitlesFromOtherLanguages(dataObjects.data[0]);
    return dataObjects;
  }

  private async handleVideoStreamsInPageWatch(
    videoStreams: videoStreams
  ): Promise<videoStreams> {
    const currentEpisode: panel =
      await this.saveService.waitForCurrentEpisode();
    const urlAPI: urlAPI = await this.saveService.waitForUrlAPI();
    return await this.proxyService.addVideoStreamsFromOtherLanguages(
      videoStreams,
      urlAPI,
      currentEpisode
    );
  }

  private async handleSeasonsInPageSeries(
    dataSeasons: collectionSeason
  ): Promise<collectionSeason> {
    const seasons: season[] = await this.saveSeasonWithLang(dataSeasons);
    if (dataSeasons.meta.versions_considered) {
      const prettySeasons: season[] = await this.proxyService.concatLanguages(
        seasons
      );
      dataSeasons.data = prettySeasons;
    }
    return dataSeasons;
  }

  private async saveUrlApi(seasons: urlAPI): Promise<urlAPI> {
    return this.saveService.saveUrlApi(seasons);
  }

  private async saveSeasonWithLang(
    seasons: collectionSeason
  ): Promise<season[]> {
    return this.saveService.saveSeasonWithLang(
      await this.parseService.parseSeasonsWithLang(seasons)
    );
  }

  private async saveCurrentEpisode(
    dataObjects: collectionPanel
  ): Promise<panel> {
    const currentEpisode = dataObjects.data[0];
    const urlAPI: urlAPI = await this.saveService.waitForUrlAPI();

    await this.proxyService.getInfos(currentEpisode, urlAPI);

    return this.saveService.saveCurrentEpisode(currentEpisode);
  }
}
