import _ from "lodash";
import ParseService from "../service/parseService";
import RequestService from "../service/requestService";
import SeasonService from "../service/seasonService";
import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
  eventsBackgroundSend,
  improveMergedEpisode,
  improveSeason,
  langToDisplay,
  languages,
  panel,
  possibleLangKeys,
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
  private href;
  private eventsToClean: NodeJS.Timeout[];

  private readonly requestService: RequestService;
  private readonly seasonService: SeasonService;
  private readonly parseService: ParseService;

  constructor() {
    this.requestService = new RequestService();
    this.seasonService = new SeasonService(this.requestService);
    this.parseService = new ParseService(
      this.requestService,
      this.seasonService
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
                tabOverrideXMLHttpRequest.magic(data, url2);
              }
            } else if (document.URL.match(regexPageSeries)) {
              if (url2.match(regexApiSeasons)) {
                tabOverrideXMLHttpRequest.waitForUpNext().then((upNext) => {
                  tabOverrideXMLHttpRequest
                    .concatLanguages(data, upNext, url2)
                    .then((seasons) => {
                      Object.defineProperty(_this, "responseText", {
                        value: JSON.stringify(seasons),
                      });
                      resolve();
                    });
                });
                return;
              }
              if (url2.match(regexApiEpisodes)) {
                tabOverrideXMLHttpRequest
                  .waitForSeasons()
                  .then((seasonsWithLang) => {
                    tabOverrideXMLHttpRequest
                      .addEpisodesFromOtherLanguages(
                        data,
                        seasonsWithLang,
                        url2
                      )
                      .then((episodes) => {
                        Object.defineProperty(_this, "responseText", {
                          value: JSON.stringify(episodes),
                        });
                        resolve();
                      });
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

  private magic(dataObjects: collectionPanel, url: string) {
    const currentEpisode = this.saveCurrentEpisode(dataObjects);
    this.getSeasonsFromEpisode(dataObjects, url).then((seasons) => {
      this.sendLanguagesToVilos(seasons, currentEpisode, url);
    });
  }

  private saveUpNext(dataUpNextSeries: upNextSeries) {
    this.upNext = dataUpNextSeries.panel.episode_metadata.season_id;
  }

  private saveCurrentEpisode(dataObjects: collectionPanel): panel {
    return dataObjects.items[0];
  }

  private getSeasonsFromEpisode(
    dataObjects: collectionPanel,
    url: string
  ): Promise<collectionSeason> {
    const serieId = dataObjects.items[0].episode_metadata.series_id;
    const episodeId = dataObjects.items[0].id;
    let urlSeasons = url.replace(
      `objects/${episodeId}?`,
      `seasons?series_id=${serieId}&`
    );
    return this.requestService.fetchJson(urlSeasons);
  }

  private async sendLanguagesToVilos(
    seasons: collectionSeason,
    currentEpisode: panel,
    url: string
  ) {
    const currentEpisodeId = currentEpisode.id;
    const currentEpisodeNumber =
      currentEpisode.episode_metadata.sequence_number;
    const seasonId = currentEpisode.episode_metadata.season_id;

    const seasonsWithLang = await this.parseService.parseSeasonsWithLang(
      seasons,
      url
    );
    const currentSeasonWithLang = seasonsWithLang.find(
      (season) => season.id === seasonId
    )!;
    const sameSeasonsWithLang = seasonsWithLang.filter((season) =>
      this.seasonService.sameSeason(season, currentSeasonWithLang)
    );
    const episodes = await this.parseService.parseMergeEpisode(
      sameSeasonsWithLang,
      currentEpisodeId,
      url
    );
    const mergedEpisodes: improveMergedEpisode = episodes.find(
      (item) => item.sequence_number === currentEpisodeNumber
    )!;
    const languages: {
      id: languages;
      name: string;
      url: string;
    }[] = mergedEpisodes.episodes.map((episode) => ({
      id: episode.audio_locale,
      name: langToDisplay[episode.audio_locale],
      url: document.URL.replace(currentEpisodeId, episode.id),
    }));
    const languagesOrdered = possibleLangKeys
      .filter((lang) => languages.map((language) => language.id).includes(lang))
      .map((lang) => languages.find((lang2) => lang == lang2.id)!);
    const currentLanguageId = languagesOrdered.find(
      (season) => season.id == currentSeasonWithLang.audio_locale2
    )?.id;
    const vilosWindow = (<HTMLIFrameElement>(
      document.getElementsByClassName("video-player")[0]
    )).contentWindow!;
    console.log("send info", {
      currentLanguage: currentLanguageId,
      languages: languagesOrdered,
    });
    vilosWindow.postMessage(
      {
        direction: "from-script-CWBS",
        command: eventsBackgroundSend.SEND_INFO,
        currentAudioLanguage: currentLanguageId,
        audioLanguages: languagesOrdered,
      },
      "https://static.crunchyroll.com/vilos-v2/web/vilos/player.html"
    );
  }

  private async addEpisodesFromOtherLanguages(
    episodes: collectionEpisode,
    seasonsWithLang: improveSeason[],
    url: string
  ) {
    const currentSeasonId = episodes.items[0].season_id;
    const currentSeasonWithLang = seasonsWithLang.find(
      (season) => season.id === currentSeasonId
    )!;
    const sameSeasonsWithLang = seasonsWithLang.filter((season) =>
      this.seasonService.sameSeason(season, currentSeasonWithLang)
    );
    const promiseList: Promise<void>[] = [];
    for (const season of sameSeasonsWithLang) {
      if (season.id === currentSeasonId) {
        continue;
      }
      let urlOtherEpisodes = url.replace(
        `episodes?season_id=${currentSeasonId}`,
        `episodes?season_id=${season.id}`
      );
      promiseList.push(
        this.requestService
          .fetchJson(urlOtherEpisodes)
          .then((body: collectionEpisode) => {
            body.items.forEach((episode) => {
              if (
                !episodes.items.find(
                  (alreadyPresentEpisode) =>
                    episode.sequence_number ===
                    alreadyPresentEpisode.sequence_number
                )
              ) {
                episodes.items.push(episode);
              }
            });
          })
      );
    }
    await Promise.all(promiseList);
    episodes.items.sort(
      (episode1, episode2) =>
        episode1.sequence_number - episode2.sequence_number
    );
    return episodes;
  }

  private async concatLanguages(
    seasons: collectionSeason,
    upNext: string,
    url: string
  ): Promise<collectionSeason> {
    this.seasonsWithLang = await this.parseService.parseSeasonsWithLang(
      seasons,
      url
    );
    const mergedSeasons = await this.parseService.parseMergedSeasons(
      this.seasonsWithLang,
      upNext
    );
    seasons.items = mergedSeasons.map((season) => {
      let firstDub = true;
      for (const lang of possibleLangKeys.filter(
        (lang) =>
          season.seasons.find((season) => season.audio_locale === lang) != null
      )) {
        if (firstDub && lang !== "SUB") {
          firstDub = false;
          season.title += `, DUBS : ${lang}`;
        } else {
          season.title += `, ${lang}`;
        }
      }
      return season;
    });
    return seasons;
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
}
