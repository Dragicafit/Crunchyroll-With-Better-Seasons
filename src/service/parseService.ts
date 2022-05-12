import {
  collectionEpisode,
  collectionSeason,
  improveMergedEpisode,
  improveMergedSeason,
  improveSeason,
} from "../web-accessible-resources/tabConst";
import { improveApiSeasons } from "../web-accessible-resources/tabImproveApiSeasons";
import RequestService from "./requestService";
import SeasonService from "./seasonService";

export default class ParseService {
  private readonly requestService: RequestService;
  private readonly seasonService: SeasonService;

  constructor(requestService: RequestService, seasonService: SeasonService) {
    this.requestService = requestService;
    this.seasonService = seasonService;
  }

  async parseMergedEpisodes(
    sameSeasonsWithLang: improveSeason[],
    episodeId: string,
    url: string
  ) {
    const episodes: improveMergedEpisode[] = [];
    const promiseList: Promise<void>[] = [];
    for (const season of sameSeasonsWithLang) {
      let urlEpisodes = url.replace(
        `objects/${episodeId}?`,
        `episodes?season_id=${season.id}&`
      );
      promiseList.push(
        this.requestService
          .fetchJson(urlEpisodes)
          .then((body: collectionEpisode) => {
            body.items.forEach((episode) => {
              const found = episodes.find(
                (alreadyPresentEpisode) =>
                  episode.sequence_number ===
                  alreadyPresentEpisode.sequence_number
              );
              if (found != null) {
                if (season.audio_locale2 == "SUB") {
                  found.subtitle_locales = episode.subtitle_locales;
                }
                found.episodes.push({
                  id: episode.id,
                  subtitle_locales: episode.subtitle_locales,
                  audio_locale: season.audio_locale2,
                  videoStreamsUrl: episode.__links__.streams.href,
                });
                found.is_subbed = found.is_subbed || episode.is_subbed;
                found.is_dubbed = found.is_dubbed || episode.is_dubbed;
              } else {
                const mainValue = <improveMergedEpisode>episode;
                mainValue.episodes = [
                  {
                    id: episode.id,
                    subtitle_locales: episode.subtitle_locales,
                    audio_locale: season.audio_locale2,
                    videoStreamsUrl: episode.__links__.streams.href,
                  },
                ];
                episodes.push(mainValue);
              }
            });
          })
      );
    }
    await Promise.all(promiseList);
    return episodes;
  }

  async parseSeasonsWithLang(
    seasons: collectionSeason,
    url: string
  ): Promise<improveSeason[]> {
    const serieId = seasons.__resource_key__.replace(
      "cms:/seasons?series_id=",
      ""
    );
    await this.seasonService.findOtherSeries(serieId, url, seasons);
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
      const seasonWithLang = <improveSeason>season;
      const improveApiSeason = improveApiSeasons.get(season.id);
      seasonWithLang.useNewLang = useNewLang;
      seasonWithLang.useNewOrder = useNewOrder;
      if (useNewLang) {
        seasonWithLang.audio_locale2 = improveApiSeason!.lang;
      } else {
        if (
          seasonWithLang.is_subbed ||
          seasonWithLang.slug_title.match(/-sub$|-subbed$|-subtitled$/)
        ) {
          seasonWithLang.audio_locale2 = "SUB";
        } else if (seasonWithLang.slug_title.match(/-english-dub$/)) {
          seasonWithLang.audio_locale2 = "EN";
        } else if (seasonWithLang.slug_title.match(/-french-dub$/)) {
          seasonWithLang.audio_locale2 = "FR";
        } else if (seasonWithLang.slug_title.match(/-spanish-dub$/)) {
          seasonWithLang.audio_locale2 = "ES";
        } else if (seasonWithLang.slug_title.match(/-portuguese-dub$/)) {
          seasonWithLang.audio_locale2 = "PT";
        } else if (seasonWithLang.slug_title.match(/-german-dub$/)) {
          seasonWithLang.audio_locale2 = "DE";
        } else if (seasonWithLang.slug_title.match(/-russian(-dub)?$/)) {
          seasonWithLang.audio_locale2 = "RU";
        } else if (seasonWithLang.slug_title.match(/-dub$|-dubbed$/)) {
          seasonWithLang.audio_locale2 = "EN";
        } else {
          seasonWithLang.audio_locale2 = "OTHERS";
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

  async parseMergedSeasons(
    seasonsWithLang: improveSeason[],
    currentEpisodeId: string
  ) {
    const seasons = seasonsWithLang.reduce(
      (previousValue: improveMergedSeason[], currentValue: improveSeason) => {
        const found = previousValue.find((season) =>
          this.seasonService.sameSeason(season, currentValue)
        );
        if (found != null) {
          if (currentValue.audio_locale2 == "SUB") {
            found.subtitle_locales = currentValue.subtitle_locales;
          }
          found.seasons.push({
            id: currentValue.id,
            audio_locale: currentValue.audio_locale2,
          });
          if (!found.useNewOrder || !currentValue.useNewOrder) {
            found.season_number = Math.min(
              found.season_number,
              currentValue.season_number
            );
          }
          if (currentValue.audio_locale2 === "SUB") {
            found.title = currentValue.title;
          }
          if (currentEpisodeId === currentValue.id) {
            found.id = currentValue.id;
          }
        } else {
          const mainValue = <improveMergedSeason>currentValue;
          mainValue.seasons = [
            {
              id: currentValue.id,
              audio_locale: currentValue.audio_locale2,
            },
          ];
          previousValue.push(mainValue);
        }
        return previousValue;
      },
      <improveMergedSeason[]>(<unknown[]>[])
    );
    return seasons;
  }
}
