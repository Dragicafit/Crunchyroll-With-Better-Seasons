import _ from "lodash";
import {
  improveMergedEpisode,
  improveSeason,
  panel,
} from "../web-accessible-resources/tabConst";

export default class SaveService {
  private href: string;
  private eventsToClean: NodeJS.Timeout[];

  private upNext: string | undefined;
  private seasonsWithLang: improveSeason[] | undefined;
  private currentEpisode: panel | undefined;
  private currentMergedEpisodes: improveMergedEpisode | undefined;

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
      this.currentMergedEpisodes = undefined;
      this.href = window.location.href;
    }
  }

  saveUpNext(season_id: string): string {
    this.upNext = _.cloneDeep(season_id);
    return _.cloneDeep(this.upNext);
  }

  saveSeasonWithLang(seasonsWithLang: improveSeason[]): improveSeason[] {
    this.seasonsWithLang = _.cloneDeep(seasonsWithLang);
    return _.cloneDeep(this.seasonsWithLang);
  }

  saveCurrentEpisode(currentEpisode: panel): panel {
    this.currentEpisode = _.cloneDeep(currentEpisode);
    return _.cloneDeep(this.currentEpisode);
  }

  saveCurrentMergedEpisodes(
    currentMergedEpisodes: improveMergedEpisode
  ): improveMergedEpisode {
    this.currentMergedEpisodes = _.cloneDeep(currentMergedEpisodes);
    return _.cloneDeep(this.currentMergedEpisodes);
  }

  waitForUpNext(): Promise<string> {
    return new Promise<string>((resolve) => {
      if (this.upNext == null) {
        this.eventsToClean.push(
          setTimeout(() => resolve(this.waitForUpNext()), 100)
        );
        return;
      }

      return resolve(_.cloneDeep(this.upNext));
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

      return resolve(_.cloneDeep(this.seasonsWithLang));
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

      return resolve(_.cloneDeep(this.currentEpisode));
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

      return resolve(_.cloneDeep(this.currentMergedEpisodes));
    });
  }
}
