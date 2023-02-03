import cloneDeep from "lodash/cloneDeep";
import urlAPI from "../model/urlAPI";
import {
  collectionSeason,
  improveMergedEpisode,
  improveSeason,
  panel,
  panelV2,
} from "../web-accessible-resources/tabConst";

export default class SaveService {
  private href: string;
  private eventsToClean: NodeJS.Timeout[];

  private upNext: string | undefined;
  private seasonsWithLang: improveSeason[] | undefined;
  private currentEpisode: panel | undefined;
  private currentEpisodeV2: panelV2 | undefined;
  private currentMergedEpisodes: improveMergedEpisode | undefined;
  private collectionSeason: collectionSeason | undefined;
  private urlAPI: urlAPI | undefined;

  constructor() {
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
      this.currentEpisodeV2 = undefined;
      this.currentMergedEpisodes = undefined;
      this.collectionSeason = undefined;
      this.urlAPI = undefined;
      this.href = window.location.href;
    }
  }

  saveUpNext(season_id: string): string {
    this.upNext = cloneDeep(season_id);
    return cloneDeep(this.upNext);
  }

  saveSeasonWithLang(seasonsWithLang: improveSeason[]): improveSeason[] {
    this.seasonsWithLang = cloneDeep(seasonsWithLang);
    return cloneDeep(this.seasonsWithLang);
  }

  saveCurrentEpisode(currentEpisode: panel): panel {
    this.currentEpisode = cloneDeep(currentEpisode);
    return cloneDeep(this.currentEpisode);
  }

  saveCurrentEpisodeV2(currentEpisode: panelV2): panelV2 {
    this.currentEpisodeV2 = cloneDeep(currentEpisode);
    return cloneDeep(this.currentEpisodeV2);
  }

  saveCurrentMergedEpisodes(
    currentMergedEpisodes: improveMergedEpisode
  ): improveMergedEpisode {
    this.currentMergedEpisodes = cloneDeep(currentMergedEpisodes);
    return cloneDeep(this.currentMergedEpisodes);
  }

  saveCurrentSeasons(collectionSeason: collectionSeason): collectionSeason {
    this.collectionSeason = cloneDeep(collectionSeason);
    return cloneDeep(this.collectionSeason);
  }

  saveUrlApi(urlAPI: urlAPI): urlAPI {
    this.urlAPI = cloneDeep(urlAPI);
    return cloneDeep(this.urlAPI);
  }

  waitForUpNext(): Promise<string> {
    return new Promise<string>((resolve) => {
      if (this.upNext == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForUpNext()), 100)
        );
        return;
      }

      return resolve(cloneDeep(this.upNext));
    });
  }

  waitForSeasonsWithLang(): Promise<improveSeason[]> {
    return new Promise<improveSeason[]>((resolve) => {
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

  waitForCurrentEpisodeV2(): Promise<panelV2> {
    return new Promise<panelV2>((resolve) => {
      if (this.currentEpisodeV2 == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForCurrentEpisodeV2()), 100)
        );
        return;
      }

      return resolve(cloneDeep(this.currentEpisodeV2));
    });
  }

  waitForCurrentMergedEpisodes(): Promise<improveMergedEpisode> {
    return new Promise<improveMergedEpisode>((resolve) => {
      if (this.currentMergedEpisodes == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForCurrentMergedEpisodes()), 100)
        );
        return;
      }

      return resolve(cloneDeep(this.currentMergedEpisodes));
    });
  }

  waitForCurrentSeasons(): Promise<collectionSeason> {
    return new Promise<collectionSeason>((resolve) => {
      if (this.collectionSeason == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForCurrentSeasons()), 100)
        );
        return;
      }

      return resolve(cloneDeep(this.collectionSeason));
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
