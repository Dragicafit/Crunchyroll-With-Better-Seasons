import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
  episode_metadata,
  eventsBackgroundSend,
  findOtherDubs,
  impoveMergedSeason,
  impoveSeason,
  langToDisplay,
  possibleLangKeys,
  regexApiEpisodes,
  regexApiObjects,
  regexApiSeasons,
  regexPageSeries,
  regexPageWatch,
  startApiUpNextSeries,
  upNextSeries,
} from "./tabConst";
import { improveApiSeasons } from "./tabImproveApiSeasons";

export class TabOverrideXMLHttpRequest {
  private upNext: string | undefined;
  private currentEpisode:
    | (episode_metadata & {
        id: string;
      })
    | undefined;
  private seasonsWithLang: impoveSeason[] = [];

  constructor() {}

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
            const data = JSON.parse(_this.responseText);

            if (document.URL.match(regexPageWatch)) {
              if (url2.match(regexApiObjects)) {
                tabOverrideXMLHttpRequest.saveCurrentEpisode(data);
              } else if (url2.match(regexApiSeasons)) {
                tabOverrideXMLHttpRequest.sendLanguagesToVilos(data, url2);
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
                  .addEpisodesFromOtherLanguages(data, url2)
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

  private saveUpNext(dataUpNextSeries: upNextSeries) {
    this.upNext = dataUpNextSeries.panel.episode_metadata.season_id;
  }

  private saveCurrentEpisode(dataObjects: collectionPanel) {
    this.currentEpisode = {
      ...dataObjects.items[0].episode_metadata,
      id: dataObjects.items[0].id,
    };
  }

  private sendLanguagesToVilos(seasons: collectionSeason, url: string) {
    const serieId = seasons.__resource_key__.replace(
      "cms:/seasons?series_id=",
      ""
    );
    this.parseSeasons(seasons, url).then((seasonsWithLang) => {
      const currentSeason = seasonsWithLang.find(
        (season) => season.id === this.currentEpisode?.season_id
      )!;
      seasonsWithLang = seasonsWithLang.filter((season) =>
        this.sameSeason(season, currentSeason)
      );
      const promiseList = [];
      for (const season of seasonsWithLang) {
        let urlEpisodes = url.replace(
          `seasons?series_id=${serieId}`,
          `episodes?season_id=${season.id}`
        );
        promiseList.push(
          fetch(urlEpisodes)
            .then((response) => response.json())
            .then((body: collectionEpisode) => {
              const episode = body.items.find(
                (item) =>
                  item.sequence_number === this.currentEpisode?.sequence_number
              );
              if (episode == null) return;
              return {
                id: season.lang,
                name: langToDisplay[season.lang],
                url: document.URL.replace(this.currentEpisode!.id, episode.id),
              };
            })
        );
      }
      Promise.all(promiseList).then((languages) => {
        let languagesWithoutNull = languages.flatMap((language) =>
          language ? [language] : []
        );
        let languagesWithoutNullOrdered = possibleLangKeys
          .filter((lang) =>
            languagesWithoutNull.map((language) => language.id).includes(lang)
          )
          .map(
            (lang) => languagesWithoutNull.find((lang2) => lang == lang2.id)!
          );
        const currentLanguageId = languagesWithoutNullOrdered.find(
          (season) => season.id == currentSeason.lang
        )?.id;
        const vilosWindow = (<HTMLIFrameElement>(
          document.getElementsByClassName("video-player")[0]
        )).contentWindow!;
        console.log("send info", {
          currentLanguage: currentLanguageId,
          languages: languagesWithoutNullOrdered,
        });
        vilosWindow.postMessage(
          {
            direction: "from-script-CWBS",
            command: eventsBackgroundSend.SEND_INFO,
            currentAudioLanguage: currentLanguageId,
            audioLanguages: languagesWithoutNullOrdered,
          },
          "https://static.crunchyroll.com/vilos-v2/web/vilos/player.html"
        );
      });
    });
  }

  private async addEpisodesFromOtherLanguages(
    episodes: collectionEpisode,
    url: string
  ) {
    const currentSeasonId = episodes.items[0].season_id;
    let currentSeasonsWithLang = this.seasonsWithLang.find(
      (season) => season.id === currentSeasonId
    )!;
    let sameSeasonsWithLang = this.seasonsWithLang.filter((season) =>
      this.sameSeason(season, currentSeasonsWithLang)
    );
    const promiseList = [];
    for (const season of sameSeasonsWithLang) {
      if (season.id === currentSeasonId) {
        continue;
      }
      let urlOtherEpisodes = url.replace(
        `episodes?season_id=${currentSeasonId}`,
        `episodes?season_id=${season.id}`
      );
      promiseList.push(
        fetch(urlOtherEpisodes)
          .then((response) => response.json())
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

  async parseSeasons(
    seasons: collectionSeason,
    url: string
  ): Promise<impoveSeason[]> {
    const serieId = seasons.__resource_key__.replace(
      "cms:/seasons?series_id=",
      ""
    );
    const otherDubId = findOtherDubs.get(serieId);
    if (otherDubId != null) {
      let urlOtherSeason = url.replace(
        `seasons?series_id=${serieId}`,
        `seasons?series_id=${otherDubId}`
      );
      await fetch(urlOtherSeason)
        .then((response) => response.json())
        .then((body: collectionSeason) => {
          seasons.items.push(...body.items);
          seasons.items.sort((s1, s2) => s1.season_number - s2.season_number);
        });
    }
    const useNewLang = seasons.items.every((season) => {
      const improveApiSeason = improveApiSeasons.get(season.id);
      return improveApiSeason != null && improveApiSeason.lang != null;
    });
    const useNewOrder = seasons.items.every((season) => {
      const improveApiSeason = improveApiSeasons.get(season.id);
      return (
        improveApiSeason != null &&
        improveApiSeason.season_number != null &&
        improveApiSeason.season_number_order != null
      );
    });
    const seasonsWithLang = seasons.items.map((season) => {
      const seasonWithLang = <impoveSeason>season;
      const improveApiSeason = improveApiSeasons.get(season.id);
      seasonWithLang.useNewLang = useNewLang;
      seasonWithLang.useNewOrder = useNewOrder;
      if (useNewLang) {
        seasonWithLang.lang = improveApiSeason!.lang;
      } else {
        if (
          seasonWithLang.is_subbed ||
          seasonWithLang.slug_title.match(/-sub$|-subbed$|-subtitled$/)
        ) {
          seasonWithLang.lang = "SUB";
        } else if (seasonWithLang.slug_title.match(/-english-dub$/)) {
          seasonWithLang.lang = "EN";
        } else if (seasonWithLang.slug_title.match(/-french-dub$/)) {
          seasonWithLang.lang = "FR";
        } else if (seasonWithLang.slug_title.match(/-spanish-dub$/)) {
          seasonWithLang.lang = "ES";
        } else if (seasonWithLang.slug_title.match(/-portuguese-dub$/)) {
          seasonWithLang.lang = "PT";
        } else if (seasonWithLang.slug_title.match(/-german-dub$/)) {
          seasonWithLang.lang = "DE";
        } else if (seasonWithLang.slug_title.match(/-russian(-dub)?$/)) {
          seasonWithLang.lang = "RU";
        } else if (seasonWithLang.slug_title.match(/-dub$|-dubbed$/)) {
          seasonWithLang.lang = "EN";
        } else {
          seasonWithLang.lang = "OTHERS";
        }
      }
      if (useNewOrder) {
        seasonWithLang.season_number_order =
          improveApiSeason!.season_number_order!;
        seasonWithLang.season_number = <any>improveApiSeason!.season_number!;
      }

      seasonWithLang.slug_title = season.slug_title.replace(
        /-english-dub$|-french-dub$|-spanish-dub$|-portuguese-dub$|-german-dub$|-russian(-dub)?$|-dub$|-sub$|-dubbed$|-subbed$|-subtitled$/,
        ""
      );
      seasonWithLang.title = season.title.replace(
        / \(English Dub\)$| \(French Dub\)$| \(Spanish Dub\)$| \(Portuguese Dub\)$| \(German Dub\)$| \(Russian Dub\)$| \(Dub\)$| \(Sub\)$| \(Dubbed\)$| \(Subbed\)$| \(Subtitled\)$| \(Russian\)$| \(VF\)$|\(EN\) |\(FR\) |\(ES\) |\(PT\) |\(DE\) |\(RU\) |\(OmU\) /,
        ""
      );
      return seasonWithLang;
    });
    if (useNewOrder) {
      seasonsWithLang.sort(
        (s1, s2) => s1.season_number_order - s2.season_number_order
      );
    }
    return seasonsWithLang;
  }

  private async concatLanguages(
    data: collectionSeason,
    upNext: string,
    url: string
  ): Promise<collectionSeason> {
    this.seasonsWithLang = await this.parseSeasons(data, url);
    let seasons = this.seasonsWithLang.reduce(
      (previousValue: impoveMergedSeason[], currentValue: impoveSeason) => {
        let found = previousValue.find((season) =>
          this.sameSeason(season, currentValue)
        );
        if (found != null) {
          found.langs.push(currentValue.lang);
          if (!found.useNewOrder || !currentValue.useNewOrder) {
            found.season_number = Math.min(
              found.season_number,
              currentValue.season_number
            );
          }
          if (currentValue.lang === "SUB") {
            found.title = currentValue.title;
          }
          if (upNext === currentValue.id) {
            found.id = currentValue.id;
          }
        } else {
          const mainValue = <impoveMergedSeason>currentValue;
          mainValue.langs = [currentValue.lang];
          previousValue.push(mainValue);
        }
        return previousValue;
      },
      <impoveMergedSeason[]>(<unknown[]>[])
    );
    data.items = seasons.map((season) => {
      let firstDub = true;
      for (const lang of possibleLangKeys.filter((lang) =>
        season.langs.includes(lang)
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
    return data;
  }

  private waitForUpNext(): Promise<string> {
    return new Promise<string>((resolve) => {
      if (this.upNext == null) {
        return setTimeout(() => resolve(this.waitForUpNext()), 100);
      }

      return resolve(this.upNext);
    });
  }

  private sameSeason(season1: impoveSeason, season2: impoveSeason) {
    if (season1.useNewOrder && season2.useNewOrder) {
      return season1.season_number_order === season2.season_number_order;
    }
    return season1.slug_title === season2.slug_title;
  }
}
