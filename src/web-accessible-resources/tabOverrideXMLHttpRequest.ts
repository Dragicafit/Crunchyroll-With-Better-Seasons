import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
  episode_metadata,
  eventsBackgroundSend,
  findOtherDubs,
  invalidSlug,
  langToDisplay,
  languages,
  possibleLangKeys,
  regexApiEpisodes,
  regexApiObjects,
  regexApiSeasons,
  regexPageSeries,
  regexPageWatch,
  season,
  startApiUpNextSeries,
  upNextSeries,
} from "./tabConst";

export class TabOverrideXMLHttpRequest {
  private upNext: string | undefined;
  private currentEpisode:
    | (episode_metadata & {
        id: string;
      })
    | undefined;
  private seasonsWithLang: (season & {
    lang: languages;
  })[] = [];

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

  private async parseSeasons(
    seasons: collectionSeason,
    url: string
  ): Promise<
    (season & {
      lang: languages;
    })[]
  > {
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
    return seasons.items.map((season) => {
      const seasonWithLang = <season & { lang: languages }>season;
      if (seasonWithLang.is_subbed) {
        seasonWithLang.lang = "SUB";
      } else if (seasonWithLang.slug_title.match(/-english(-dub)?$/)) {
        seasonWithLang.lang = "EN";
      } else if (seasonWithLang.slug_title.match(/-french(-dub)?$/)) {
        seasonWithLang.lang = "FR";
      } else if (seasonWithLang.slug_title.match(/-spanish(-dub)?$/)) {
        seasonWithLang.lang = "ES";
      } else if (seasonWithLang.slug_title.match(/-portuguese(-dub)?$/)) {
        seasonWithLang.lang = "PT";
      } else if (seasonWithLang.slug_title.match(/-german(-dub)?$/)) {
        seasonWithLang.lang = "DE";
      } else if (seasonWithLang.slug_title.match(/-russian(-dub)?$/)) {
        seasonWithLang.lang = "RU";
      } else {
        seasonWithLang.lang = "OTHERS";
      }
      if (seasonWithLang.is_dubbed) {
        seasonWithLang.slug_title = season.slug_title.replace(
          /-english(-dub)?$|-french(-dub)?$|-spanish(-dub)?$|-portuguese(-dub)?$|-german(-dub)?$|-russian(-dub)?$/,
          ""
        );
        seasonWithLang.title = season.title.replace(
          / \(\w+? Dub\)$| \(VF\)$|\(EN\) |\(FR\) |\(ES\) |\(PT\) |\(DE\) |\(RU\) /,
          ""
        );
      } else {
        seasonWithLang.title = season.title.replace(/\(OmU\) /, "");
      }
      return seasonWithLang;
    });
  }

  private async concatLanguages(
    data: collectionSeason,
    upNext: string,
    url: string
  ): Promise<collectionSeason> {
    this.seasonsWithLang = await this.parseSeasons(data, url);
    let seen = new Set();
    let seasons = this.seasonsWithLang.reduce(
      (
        previousValue,
        currentValue: season & {
          lang: languages;
          langs?: languages[];
        }
      ) => {
        let slug_title = currentValue.slug_title;
        let found = previousValue.find((season) =>
          this.sameSeason(season, currentValue)
        );
        if (found != null) {
          found.langs.push(currentValue.lang);
          found.season_number = Math.min(
            found.season_number,
            currentValue.season_number
          );
          if (currentValue.is_subbed) {
            found.title = currentValue.title;
          }
          if (upNext === currentValue.id) {
            found.id = currentValue.id;
          }
        } else {
          seen.add(slug_title);
          currentValue.langs = [currentValue.lang];
          previousValue.push(
            <
              season & {
                lang: languages;
                langs: languages[];
              }
            >currentValue
          );
        }
        return previousValue;
      },
      <
        (season & {
          lang: languages;
          langs: languages[];
        })[]
      >(<unknown[]>[])
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

  private sameSeason(season1: season, season2: season) {
    if (invalidSlug.includes(season1.slug_title)) {
      return season1.season_number === season2.season_number;
    }
    return season1.slug_title === season2.slug_title;
  }
}
