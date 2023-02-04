import SameSerie from "../model/sameSerie";
import urlAPI from "../model/urlAPI";
import {
  collectionSeason,
  season,
  seriesGroups,
} from "../web-accessible-resources/tabConst";
import RequestService from "./requestService";

export default class SeasonService {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  async findOtherSeries(
    serieId: string,
    urlAPI: urlAPI,
    seasons: collectionSeason
  ) {
    const otherSeries: string[] = sameSerie.findOtherSeries(serieId);
    if (otherSeries.length > 0) {
      const promiseList: Promise<void>[] = [];
      for (const otherSerie of otherSeries) {
        const urlOtherSeasons: string = urlAPI
          .setApiPath(`series/${otherSerie}/seasons?`)
          .toString();
        promiseList.push(
          this.requestService
            .fetchJson(urlOtherSeasons)
            .then((body: collectionSeason) => {
              seasons.data.push(...body.data);
              seasons.total += body.total;
            })
        );
      }
      await Promise.all(promiseList);
      seasons.data.sort((s1, s2) => s1.season_number - s2.season_number);
    }
  }

  sameSeason(season1: season, season2: season): boolean {
    if (!season1.versions) {
      return false;
    }
    const versionIds = season1.versions.map((version) => version.guid);
    return versionIds.includes(season2.id);
  }
}

export const sameSerie = new SameSerie(seriesGroups);
