import SameSerie from "../model/sameSerie";
import urlAPI from "../model/urlAPI";
import {
  collectionSeason,
  improveSeason,
  invalidSlug,
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
          .setApiPath(`seasons?series_id=${otherSerie}&`)
          .toString();
        promiseList.push(
          this.requestService
            .fetchJson(urlOtherSeasons)
            .then((body: collectionSeason) => {
              seasons.items.push(...body.items);
            })
        );
      }
      await Promise.all(promiseList);
      seasons.items.sort((s1, s2) => s1.season_number - s2.season_number);
    }
  }

  sameSeason(season1: improveSeason, season2: improveSeason) {
    if (season1.useNewOrder && season2.useNewOrder) {
      return season1.season_number_order === season2.season_number_order;
    }
    if (invalidSlug.includes(season1.slug_title)) {
      return season1.season_number === season2.season_number;
    }
    return season1.slug_title === season2.slug_title;
  }
}

export const sameSerie = new SameSerie(seriesGroups);
