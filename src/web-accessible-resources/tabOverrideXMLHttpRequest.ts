import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
  episode_metadata,
  langToDisplay,
  possibleLangKeys,
  season,
  upNextSeries,
} from "../background-scripts/backgroundConst";
import { languages } from "./../background-scripts/backgroundConst";
import { TabContext } from "./tabContext";

export class TabOverrideXMLHttpRequest {
  private tabContext: TabContext;
  private upNext: string | undefined;
  private currentEpisode:
    | (episode_metadata & {
        id: string;
      })
    | undefined;

  constructor(tabContext: TabContext) {
    this.tabContext = tabContext;
  }

  askInfo(): void {
    console.log("ask info");

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
          const preferedLanguages =
            tabOverrideXMLHttpRequest.tabContext.preferedLanguages;

          if (
            preferedLanguages != null &&
            _this.readyState === 4 &&
            _this.status === 200
          ) {
            const data = JSON.parse(_this.responseText);

            if (document.URL.includes("/watch/")) {
              if (
                url2.startsWith("https://beta-api.crunchyroll.com/cms/v2/") &&
                url2.includes("/objects/")
              ) {
                const dataObjects = <collectionPanel>data;
                tabOverrideXMLHttpRequest.currentEpisode = {
                  ...dataObjects.items[0].episode_metadata,
                  id: dataObjects.items[0].id,
                };
              } else if (
                url2.startsWith("https://beta-api.crunchyroll.com/cms/v2/") &&
                url2.includes("/M3/crunchyroll/seasons")
              ) {
                const seasons = <collectionSeason>data;
                let seasonsWithLang = tabOverrideXMLHttpRequest.parseSeasons(
                  seasons.items
                );
                const currentSeason = seasonsWithLang.find(
                  (season) =>
                    season.id ===
                    tabOverrideXMLHttpRequest.currentEpisode?.season_id
                )!;
                seasonsWithLang = seasonsWithLang.filter(
                  (season) => season.slug_title === currentSeason.slug_title
                );
                const promiseList = [];
                for (const season of seasonsWithLang) {
                  let url3 = url2.replace(
                    `seasons?series_id=${season.series_id}`,
                    `episodes?season_id=${season.id}`
                  );
                  promiseList.push(
                    fetch(url3)
                      .then((response) => response.json())
                      .then((body: collectionEpisode) => {
                        const episode = body.items.find(
                          (item) =>
                            item.sequence_number ===
                            tabOverrideXMLHttpRequest.currentEpisode
                              ?.sequence_number
                        )!;
                        return {
                          id: season.lang,
                          name: langToDisplay[season.lang],
                          url: document.URL.replace(
                            tabOverrideXMLHttpRequest.currentEpisode!.id,
                            episode.id
                          ),
                        };
                      })
                  );
                }
                Promise.all(promiseList).then((languages) => {
                  languages = possibleLangKeys
                    .filter((lang) =>
                      languages.map((language) => language.id).includes(lang)
                    )
                    .map(
                      (lang) => languages.find((lang2) => lang == lang2.id)!
                    );
                  const currentLanguage = languages.find(
                    (season) => season.id == currentSeason.lang
                  )?.id;
                  console.log("send info", {
                    currentLanguage: currentLanguage,
                    languages: languages,
                  });
                  const vilosWindow = (<HTMLIFrameElement>(
                    document.getElementsByClassName("video-player")[0]
                  )).contentWindow!;
                  vilosWindow.postMessage(
                    {
                      direction: "from-script-AWP",
                      command: "SEND_INFO",
                      currentLanguage: currentLanguage,
                      languages: languages,
                    },
                    "https://static.crunchyroll.com/vilos-v2/web/vilos/player.html"
                  );
                });
              }
            } else if (document.URL.includes("/series/")) {
              if (
                url2.startsWith("https://beta-api.crunchyroll.com/cms/v2/") &&
                url2.includes("/M3/crunchyroll/seasons")
              ) {
                const dataSeasons = <collectionSeason>data;
                try {
                  tabOverrideXMLHttpRequest.waitForUpNext().then((upNext) => {
                    Object.defineProperty(_this, "responseText", {
                      value: JSON.stringify(
                        tabOverrideXMLHttpRequest.concatLanguages(
                          dataSeasons,
                          upNext
                        )
                      ),
                    });
                    resolve();
                  });
                  return;
                } catch (e) {}
              } else if (
                url2.startsWith(
                  "https://beta-api.crunchyroll.com/content/v1/up_next_series"
                )
              ) {
                const dataUpNextSeries = <upNextSeries>data;
                tabOverrideXMLHttpRequest.upNext =
                  dataUpNextSeries.panel.episode_metadata.season_id;
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

  private parseSeasons(seasons: season[]) {
    return seasons.map((season) => {
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

  private concatLanguages(data: collectionSeason, upNext: string) {
    let seasonsWithLang = <
      (season & {
        lang: languages;
        langs: languages[];
      })[]
    >this.parseSeasons(data.items);

    let seen = new Set();
    let seasons = seasonsWithLang.reduce(
      (previousValue, currentValue) => {
        let k = currentValue.slug_title;
        let found = previousValue.find(
          (season) => season.slug_title === currentValue.slug_title
        );
        if (found != null) {
          found.langs.push(currentValue.lang);
          if (currentValue.is_subbed) {
            found.title = currentValue.title;
          }
          if (upNext === currentValue.id) {
            found.id = currentValue.id;
          }
        } else {
          seen.add(k);
          currentValue.langs = [currentValue.lang];
          previousValue.push(currentValue);
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
}
