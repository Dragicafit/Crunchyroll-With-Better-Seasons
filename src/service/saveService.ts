import cloneDeep from "lodash/cloneDeep";
import urlAPI from "../model/urlAPI";
import {
  panel,
  regexPageWatch,
  season,
} from "../web-accessible-resources/tabConst";

export default class SaveService {
  private href: string;
  private eventsToClean: NodeJS.Timeout[];

  private seasonsWithLang: season[] | undefined;
  private currentEpisode: panel | undefined;
  private urlAPI: urlAPI | undefined;

  constructor() {
    this.href = window.location.href;
    this.eventsToClean = [];

    setInterval(() => this.resetIfChanged(), 100);
  }

  resetIfChanged() {
    if (
      this.href != window.location.href &&
      !window.location.href.match(regexPageWatch)
    ) {
      this.eventsToClean.forEach(clearTimeout);
      this.eventsToClean = [];
      this.seasonsWithLang = undefined;
      this.currentEpisode = undefined;
      this.urlAPI = undefined;
      this.href = window.location.href;
    }
  }

  saveSeasonWithLang(seasonsWithLang: season[]): season[] {
    this.seasonsWithLang = cloneDeep(seasonsWithLang);
    return cloneDeep(this.seasonsWithLang);
  }

  saveCurrentEpisode(currentEpisode: panel): panel {
    this.currentEpisode = cloneDeep(currentEpisode);
    return cloneDeep(this.currentEpisode);
  }

  saveUrlApi(urlAPI: urlAPI): urlAPI {
    this.urlAPI = cloneDeep(urlAPI);
    return cloneDeep(this.urlAPI);
  }

  waitForSeasonsWithLang(): Promise<season[]> {
    return new Promise<season[]>((resolve) => {
      if (this.seasonsWithLang == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForSeasonsWithLang()), 100)
        );
        return;
      }

      return resolve(cloneDeep(this.seasonsWithLang));
    });
  }

  waitForCurrentEpisode(): Promise<panel> {
    return new Promise<panel>((resolve) => {
      if (this.currentEpisode == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForCurrentEpisode()), 100)
        );
        return;
      }

      return resolve(cloneDeep(this.currentEpisode));
    });
  }

  waitForUrlAPI(): Promise<urlAPI> {
    return new Promise<urlAPI>((resolve) => {
      if (this.urlAPI == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForUrlAPI()), 100)
        );
        return;
      }

      return resolve(cloneDeep(this.urlAPI));
    });
  }
}
