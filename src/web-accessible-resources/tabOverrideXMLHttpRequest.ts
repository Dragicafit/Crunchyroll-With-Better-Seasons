import {
  crunchyrollApiEpisode,
  crunchyrollApiObjects,
  crunchyrollApiSeasons,
  crunchyrollApiUpNextSeries,
  episode_metadata,
  languages,
} from "../background-scripts/backgroundConst";
import { TabContext } from "./tabContext";
export class TabOverrideXMLHttpRequest {
  private tabContext: TabContext;
  private upNext: string[] | undefined;
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
                const dataObjects = <crunchyrollApiObjects>data;
                tabOverrideXMLHttpRequest.currentEpisode = {
                  ...dataObjects.items[0].episode_metadata,
                  id: dataObjects.items[0].id,
                };
              } else if (
                url2.startsWith("https://beta-api.crunchyroll.com/cms/v2/") &&
                url2.includes("/M3/crunchyroll/seasons")
              ) {
                const dataSeasons = <crunchyrollApiSeasons>data;
                console.info(url2);
                dataSeasons.items = dataSeasons.items.map((item) => {
                  const slug_title = item.slug_title;
                  if (slug_title.endsWith("-english-dub")) {
                    item.lang = "EN";
                  } else if (slug_title.endsWith("-french-dub")) {
                    item.lang = "FR";
                  } else if (slug_title.endsWith("-spanish-dub")) {
                    item.lang = "ES";
                  } else if (slug_title.endsWith("-portuguese-dub")) {
                    item.lang = "PT";
                  } else if (slug_title.endsWith("-german-dub")) {
                    item.lang = "DE";
                  } else if (slug_title.endsWith("-russian-dub")) {
                    item.lang = "RU";
                  }
                  item.slug_title = item.slug_title.replace(
                    /-english-dub|-french-dub|-spanish-dub|-portuguese-dub|-german-dub|-russian-dub/,
                    ""
                  );
                  return item;
                });
                const newLocal = dataSeasons.items.find(
                  (value) =>
                    value.id ==
                    tabOverrideXMLHttpRequest.currentEpisode?.season_id
                )!;
                const slug_title = newLocal.slug_title;
                const slug_title2 = slug_title;
                console.info(slug_title2);
                const seasons = dataSeasons.items.filter(
                  (value) => value.slug_title == slug_title2
                );
                console.info(seasons);
                for (const season of seasons) {
                  let url3 = url2.replace(
                    "seasons?series_id=" + season.series_id,
                    "episodes?season_id=" + season.id
                  );
                  season;
                  fetch(url3)
                    .then((response) => response.json())
                    .then((body: crunchyrollApiEpisode) => {
                      const episode = body.items.find(
                        (item) =>
                          item.sequence_number ===
                          tabOverrideXMLHttpRequest.currentEpisode
                            ?.sequence_number
                      )!;
                      console.info(
                        document.URL.replace(
                          tabOverrideXMLHttpRequest.currentEpisode!.id,
                          episode.id
                        )
                      );
                    });
                }
              }
            } else if (document.URL.includes("/series/")) {
              if (
                url2.startsWith("https://beta-api.crunchyroll.com/cms/v2/") &&
                url2.includes("/M3/crunchyroll/seasons")
              ) {
                const dataSeasons = <crunchyrollApiSeasons>data;
                try {
                  Object.defineProperty(_this, "responseText", {
                    value: JSON.stringify(
                      tabOverrideXMLHttpRequest.filterLanguages(
                        dataSeasons,
                        preferedLanguages
                      )
                    ),
                  });
                } catch (e) {}
              } else if (
                url2.startsWith(
                  "https://beta-api.crunchyroll.com/content/v1/up_next_series"
                )
              ) {
                const dataUpNextSeries = <crunchyrollApiUpNextSeries>data;
                try {
                  tabOverrideXMLHttpRequest
                    .adaptUpNext(dataUpNextSeries)
                    .then((data) => {
                      Object.defineProperty(_this, "responseText", {
                        value: JSON.stringify(data),
                      });
                      resolve();
                    });
                  return;
                } catch (e) {}
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

  private filterLanguages(data: any, preferedLanguages: languages[]) {
    let newItems: {
      SUB: any[];
      RU: any[];
      FR: any[];
      EN: any[];
      ES: any[];
      PT: any[];
      DE: any[];
      OTHERS: any[];
    } = {
      SUB: [],
      RU: [],
      FR: [],
      EN: [],
      ES: [],
      PT: [],
      DE: [],
      OTHERS: [],
    };

    const oldItems = [...data.items];

    newItems.SUB = oldItems.filter((item) => item.is_subbed);
    newItems.EN = oldItems.filter((item) =>
      item.slug_title.endsWith("english-dub")
    );
    newItems.FR = oldItems.filter((item) =>
      item.slug_title.endsWith("french-dub")
    );
    newItems.ES = oldItems.filter((item) =>
      item.slug_title.endsWith("spanish-dub")
    );
    newItems.PT = oldItems.filter((item) =>
      item.slug_title.endsWith("portuguese-dub")
    );
    newItems.DE = oldItems.filter((item) =>
      item.slug_title.endsWith("german-dub")
    );
    newItems.RU = oldItems.filter((item) =>
      item.slug_title.endsWith("russian-dub")
    );
    newItems.OTHERS = oldItems.filter(
      (item) =>
        !item.is_subbed &&
        !item.slug_title.endsWith("english-dub") &&
        !item.slug_title.endsWith("french-dub") &&
        !item.slug_title.endsWith("spanish-dub") &&
        !item.slug_title.endsWith("portuguese-dub") &&
        !item.slug_title.endsWith("german-dub") &&
        !item.slug_title.endsWith("russian-dub")
    );

    data.items = [];
    for (const language of preferedLanguages) {
      data.items = data.items.concat(newItems[language]);
    }

    this.upNext = data.items.map((item: any) => item.id);

    return data;
  }

  private adaptUpNext(data: any): Promise<any> {
    return new Promise<any>((resolve) => {
      if (this.upNext == null) {
        return setTimeout(() => resolve(this.adaptUpNext(data)), 100);
      }

      if (!this.upNext.includes(data.panel.episode_metadata.season_id)) {
        data.panel.episode_metadata.season_id = this.upNext[0];
        document.getElementsByClassName("up-next-section")[0].remove();
      }

      return resolve(data);
    });
  }
}
