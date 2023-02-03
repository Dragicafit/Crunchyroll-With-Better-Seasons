import urlAPI from "../model/urlAPI";
import ParseService from "../service/parseService";
import ProxyService from "../service/proxyService";
import RequestService from "../service/requestService";
import SaveService from "../service/saveService";
import SeasonService from "../service/seasonService";
import {
  collectionEpisode,
  collectionPanel,
  collectionPanelV2,
  collectionSeason,
  collectionSeasonV2,
  Config,
  improveMergedEpisode,
  improveMergedSeason,
  improveSeason,
  panel,
  panelV2,
  regexApiEpisodes,
  regexApiObjects,
  regexApiObjectsV2,
  regexApiSeasons,
  regexApiSeasonsV2,
  regexApiUpNextSeries,
  regexApiUpNextSeriesV2,
  regexApiVideoStreams,
  regexApiVideoStreamsV2,
  regexPageSeries,
  regexPageWatch,
  seasonV2,
  upNextSeries,
  upNextSeriesV2,
  videoStreams,
  videoStreamsV2,
} from "./tabConst";

export default class TabOverrideXMLHttpRequest {
  private readonly parseService: ParseService;
  private readonly proxyService: ProxyService;
  private readonly saveService: SaveService;

  constructor(config: Config) {
    const requestService = new RequestService();
    const seasonService = new SeasonService(requestService);
    this.parseService = new ParseService(requestService, seasonService, config);
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
                  .handleObjectsInPageWatch(data)
                  .then((episodes) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(episodes),
                    });
                    resolve();
                  });
                return;
              }
              match = url2.match(regexApiObjectsV2);
              if (match) {
                tabOverrideXMLHttpRequest
                  .handleObjectsInPageWatchV2(
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
              match = url2.match(regexApiVideoStreamsV2);
              if (match) {
                tabOverrideXMLHttpRequest
                  .handleVideoStreamsInPageWatchV2(data)
                  .then((videoStreams) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(videoStreams),
                    });
                    resolve();
                  });
                return;
              }
              match = url2.match(regexApiSeasons);
              if (match) {
                tabOverrideXMLHttpRequest.handleSeasonsInPageWatch(
                  data,
                  new urlAPI(match)
                );
              }
            } else if (document.URL.match(regexPageSeries)) {
              let match: RegExpMatchArray | null = url2.match(regexApiSeasons);
              if (match) {
                tabOverrideXMLHttpRequest
                  .handleSeasonsInPageSeries(data, new urlAPI(match))
                  .then((seasons) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(seasons),
                    });
                    resolve();
                  });
                return;
              }
              match = url2.match(regexApiSeasonsV2);
              if (match) {
                tabOverrideXMLHttpRequest
                  .handleSeasonsInPageSeriesV2(data)
                  .then((seasons) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(seasons),
                    });
                    resolve();
                  });
                return;
              }
              match = url2.match(regexApiEpisodes);
              if (match) {
                tabOverrideXMLHttpRequest
                  .handleEpisodesInPageSeries(data, new urlAPI(match))
                  .then((episodes) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(episodes),
                    });
                    resolve();
                  });
                return;
              } else if (url2.match(regexApiUpNextSeries)) {
                tabOverrideXMLHttpRequest.saveUpNext(data);
              } else if (url2.match(regexApiUpNextSeriesV2)) {
                tabOverrideXMLHttpRequest.saveUpNextV2(data);
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
    dataObjects: collectionPanel
  ): Promise<collectionPanel> {
    const currentEpisode: panel = this.saveCurrentEpisode(dataObjects);
    this.sendLanguagesToVilos();
    this.proxyService.addSubtitlesFromOtherLanguages(currentEpisode);
    dataObjects.items[0] = { ...dataObjects.items[0], ...currentEpisode };
    return dataObjects;
  }

  private async handleObjectsInPageWatchV2(
    dataObjects: collectionPanelV2,
    urlAPI: urlAPI
  ): Promise<collectionPanelV2> {
    this.saveUrlApi(urlAPI);
    await this.saveCurrentEpisodeV2(dataObjects);
    this.proxyService.addSubtitlesFromOtherLanguagesV2(dataObjects.data[0]);
    return dataObjects;
  }

  private async handleVideoStreamsInPageWatch(
    videoStreams: videoStreams
  ): Promise<videoStreams> {
    const currentEpisode: panel =
      await this.saveService.waitForCurrentEpisode();
    const mergedEpisodes: improveMergedEpisode =
      await this.saveService.waitForCurrentMergedEpisodes();
    const urlAPI: urlAPI = await this.saveService.waitForUrlAPI();
    return await this.proxyService.addVideoStreamsFromOtherLanguages(
      videoStreams,
      urlAPI,
      currentEpisode,
      mergedEpisodes
    );
  }

  private async handleVideoStreamsInPageWatchV2(
    videoStreams: videoStreamsV2
  ): Promise<videoStreamsV2> {
    const currentEpisode: panelV2 =
      await this.saveService.waitForCurrentEpisodeV2();
    const urlAPI: urlAPI = await this.saveService.waitForUrlAPI();
    return await this.proxyService.addVideoStreamsFromOtherLanguagesV2(
      videoStreams,
      urlAPI,
      currentEpisode
    );
  }

  private async handleSeasonsInPageWatch(
    seasons: collectionSeason,
    urlAPI: urlAPI
  ) {
    this.saveCurrentSeasons(seasons);
    this.saveUrlApi(urlAPI);
  }

  private async handleSeasonsInPageSeries(
    seasons: collectionSeason,
    urlAPI: urlAPI
  ): Promise<collectionSeason> {
    const seasonsWithLang: improveSeason[] = await this.saveSeasonWithLang(
      seasons,
      urlAPI
    );
    const upNext: string = await this.saveService.waitForUpNext();
    const mergedSeasons: improveMergedSeason[] =
      await this.proxyService.concatLanguages(seasonsWithLang, upNext);
    seasons.items = mergedSeasons;
    return seasons;
  }

  private async handleSeasonsInPageSeriesV2(
    dataSeasons: collectionSeasonV2
  ): Promise<collectionSeasonV2> {
    const seasons: seasonV2[] = await this.saveSeasonWithLangV2(dataSeasons);
    const upNext: string = await this.saveService.waitForUpNext();
    const mergedSeasons: seasonV2[] = await this.proxyService.concatLanguagesV2(
      seasons,
      upNext
    );
    dataSeasons.data = mergedSeasons;
    dataSeasons.meta.versions_considered = true;
    return dataSeasons;
  }

  private async handleEpisodesInPageSeries(
    collectionEpisode: collectionEpisode,
    urlAPI: urlAPI
  ): Promise<collectionEpisode> {
    const seasonsWithLang: improveSeason[] =
      await this.saveService.waitForSeasonsWithLang();
    const mergedEpisodesList: improveMergedEpisode[] =
      await this.proxyService.addEpisodesFromOtherLanguages(
        collectionEpisode,
        seasonsWithLang,
        urlAPI
      );
    collectionEpisode.items = mergedEpisodesList;
    return collectionEpisode;
  }

  private async sendLanguagesToVilos() {
    const urlAPI: urlAPI = await this.saveService.waitForUrlAPI();
    const currentEpisode: panel =
      await this.saveService.waitForCurrentEpisode();
    const currentEpisodeId: string = currentEpisode.id;
    const seasons: collectionSeason =
      await this.saveService.waitForCurrentSeasons();
    const seasonsWithLang: improveSeason[] = await this.saveSeasonWithLang(
      seasons,
      urlAPI
    );

    const {
      currentSeasonWithLang,
      mergedEpisodesList,
    }: {
      currentSeasonWithLang: improveSeason;
      mergedEpisodesList: improveMergedEpisode[];
    } = await this.proxyService.getInfos(
      currentEpisode,
      seasonsWithLang,
      urlAPI
    );

    const mergedEpisodes: improveMergedEpisode = this.saveCurrentMergedEpisodes(
      currentEpisode,
      mergedEpisodesList
    );

    this.proxyService.redirectToDefaultAudioIfNeeded(
      mergedEpisodes,
      currentEpisodeId
    );

    this.proxyService.sendLanguagesToVilos(
      currentEpisode,
      currentSeasonWithLang,
      currentEpisodeId,
      mergedEpisodes
    );
  }

  private saveUpNext(dataUpNextSeries: upNextSeries | ""): string {
    const currentSeasonId =
      dataUpNextSeries === ""
        ? ""
        : dataUpNextSeries.panel.episode_metadata.season_id;
    return this.saveService.saveUpNext(currentSeasonId);
  }

  private saveUpNextV2(dataUpNextSeries: upNextSeriesV2 | ""): string {
    const currentSeasonId =
      dataUpNextSeries === "" || dataUpNextSeries.total == 0
        ? ""
        : dataUpNextSeries.data[0].panel.episode_metadata.season_id;
    return this.saveService.saveUpNext(currentSeasonId);
  }

  private async saveCurrentSeasons(
    seasons: collectionSeason
  ): Promise<collectionSeason> {
    return this.saveService.saveCurrentSeasons(seasons);
  }

  private async saveUrlApi(seasons: urlAPI): Promise<urlAPI> {
    return this.saveService.saveUrlApi(seasons);
  }

  private async saveSeasonWithLang(
    seasons: collectionSeason,
    urlAPI: urlAPI
  ): Promise<improveSeason[]> {
    return this.saveService.saveSeasonWithLang(
      await this.parseService.parseSeasonsWithLang(seasons, urlAPI)
    );
  }

  private async saveSeasonWithLangV2(
    seasons: collectionSeasonV2
  ): Promise<seasonV2[]> {
    return this.saveService.saveSeasonWithLangV2(
      await this.parseService.parseSeasonsWithLangV2(seasons)
    );
  }

  private saveCurrentEpisode(dataObjects: collectionPanel): panel {
    return this.saveService.saveCurrentEpisode(dataObjects.items[0]);
  }

  private async saveCurrentEpisodeV2(
    dataObjects: collectionPanelV2
  ): Promise<panelV2> {
    const currentEpisode = dataObjects.data[0];
    const urlAPI: urlAPI = await this.saveService.waitForUrlAPI();

    await this.proxyService.getInfosV2(currentEpisode, urlAPI);

    return this.saveService.saveCurrentEpisodeV2(currentEpisode);
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
