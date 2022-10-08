import cloneDeep from "lodash/cloneDeep";
import urlAPI from "../model/urlAPI";
import {
  collectionEpisode,
  collectionSeason,
  episode,
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
    urlAPI: urlAPI,
    episodeId: string
  ): Promise<improveMergedEpisode[]> {
    const mergedEpisodes: improveMergedEpisode[] = [];
    const promiseList: Promise<void>[] = [];
    for (const season of sameSeasonsWithLang) {
      const urlEpisodes: string = urlAPI
        .setApiPath(`episodes?season_id=${season.id}&`)
        .toString();
      promiseList.push(
        this.requestService
          .fetchJson(urlEpisodes)
          .then((body: collectionEpisode) => {
            body.items.forEach((episode) => {
              const found: improveMergedEpisode | undefined =
                mergedEpisodes.find(
                  (alreadyPresentEpisode) =>
                    episode.sequence_number ===
                    alreadyPresentEpisode.sequence_number
                );
              if (found != null) {
                this.mergeEpisodeIntoMergedEpisode(episode, found, season);
              } else {
                this.createMergedEpisode(episode, season, mergedEpisodes);
              }
            });
          })
      );
    }
    await Promise.all(promiseList);
    mergedEpisodes.sort(
      (episode1, episode2) =>
        episode1.sequence_number - episode2.sequence_number
    );
    return mergedEpisodes;
  }

  async parseMergedEpisodesWithCurrentEpisodes(
    sameSeasonsWithLang: improveSeason[],
    currentEpisodes: episode[],
    urlAPI: urlAPI,
    currentSeasonId: string
  ): Promise<improveMergedEpisode[]> {
    const mergedEpisodesList: improveMergedEpisode[] = [];
    const promiseList: Promise<void>[] = [];
    for (const season of sameSeasonsWithLang) {
      if (season.id === currentSeasonId) {
        currentEpisodes.forEach((episode) => {
          const foundIndex: number = mergedEpisodesList.findIndex(
            (alreadyPresentEpisode) =>
              episode.sequence_number === alreadyPresentEpisode.sequence_number
          );
          const mainValue: improveMergedEpisode = this.createMergedEpisode(
            episode,
            season,
            mergedEpisodesList
          );
          if (foundIndex !== -1) {
            const found: improveMergedEpisode = mergedEpisodesList[foundIndex];
            mergedEpisodesList.splice(foundIndex, 1);

            this.mergeEpisodeIntoMergedEpisode(mainValue, found, season);
          }
        });
        continue;
      }
      const urlOtherEpisodes: string = urlAPI
        .setApiPath(`episodes?season_id=${season.id}&`)
        .toString();
      promiseList.push(
        this.requestService
          .fetchJson(urlOtherEpisodes)
          .then((body: collectionEpisode) => {
            body.items.forEach((episode) => {
              const found: improveMergedEpisode | undefined =
                mergedEpisodesList.find(
                  (alreadyPresentEpisode) =>
                    episode.sequence_number ===
                    alreadyPresentEpisode.sequence_number
                );
              if (found != null) {
                this.mergeEpisodeIntoMergedEpisode(episode, found, season);
              } else {
                this.createMergedEpisode(episode, season, mergedEpisodesList);
              }
            });
          })
      );
    }
    await Promise.all(promiseList);
    mergedEpisodesList.sort(
      (episode1, episode2) =>
        episode1.sequence_number - episode2.sequence_number
    );
    return mergedEpisodesList;
  }

  async parseSeasonsWithLang(
    seasons: collectionSeason,
    urlAPI: urlAPI
  ): Promise<improveSeason[]> {
    const serieId: string = seasons.__resource_key__.replace(
      "cms:/seasons?series_id=",
      ""
    );
    await this.seasonService.findOtherSeries(serieId, urlAPI, seasons);
    const useNewLang: boolean = seasons.items.every((season) => {
      const improveApiSeason = improveApiSeasons.get(season.id);
      return improveApiSeason != null && improveApiSeason.lang != null;
    });
    const useNewOrder: boolean = seasons.items.every((season) => {
      const improveApiSeason = improveApiSeasons.get(season.id);
      return (
        improveApiSeason != null &&
        improveApiSeason.season_number != null &&
        improveApiSeason.season_number_order != null
      );
    });
    const seasonsWithLang: improveSeason[] = seasons.items.map((season) => {
      const seasonWithLang: improveSeason = <improveSeason>season;
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
        } else if (seasonWithLang.slug_title.match(/-italian-dub$/)) {
          seasonWithLang.audio_locale2 = "IT";
        } else if (seasonWithLang.slug_title.match(/-hindi-dub$/)) {
          seasonWithLang.audio_locale2 = "HI";
        } else if (seasonWithLang.slug_title.match(/-arabic-dub$/)) {
          seasonWithLang.audio_locale2 = "AR";
        } else if (seasonWithLang.slug_title.match(/-castilian-dub$/)) {
          seasonWithLang.audio_locale2 = "CAS";
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
        /-english-dub$|-french-dub$|-spanish-dub$|-portuguese-dub$|-german-dub$|-italian-dub$|-hindi-dub$|-arabic-dub$|-castilian-dub$|-russian(-dub)?$|-dub$|-sub$|-dubbed$|-subbed$|-subtitled$/,
        ""
      );
      seasonWithLang.title = season.title.replace(
        / \(English Dub\)$| \(French Dub\)$| \(Spanish Dub\)$| \(Portuguese Dub\)$| \(German Dub\)$| \(Italian Dub\)$| \(Hindi Dub\)$| \(Arabic Dub\)$| \(Castilian Dub\)$| \(Russian Dub\)$| \(Dub\)$| \(Sub\)$| \(Dubbed\)$| \(Subbed\)$| \(Subtitled\)$| \(Russian\)$| \(VF\)$|\(EN\) |\(FR\) |\(ES\) |\(PT\) |\(DE\) |\(IT\) |\(HI\) |\(AR\) |\(CAS\) |\(RU\) |\(OmU\) /,
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
    currentSeasonId: string
  ): Promise<improveMergedSeason[]> {
    const seasons: improveMergedSeason[] = seasonsWithLang.reduce(
      (previousValue: improveMergedSeason[], currentValue: improveSeason) => {
        const found: improveMergedSeason | undefined = previousValue.find(
          (season) => this.seasonService.sameSeason(season, currentValue)
        );
        if (found != null) {
          this.mergeSeasonWithLangIntoMergedSeason(currentValue, found);
        } else {
          this.createMergedSeason(currentValue, previousValue);
        }
        return previousValue;
      },
      <improveMergedSeason[]>(<unknown[]>[])
    );
    for (const season of seasons) {
      const currentSeason = [...season.seasons.values()].find(
        (season) => season.id === currentSeasonId
      );
      if (currentSeason != null) {
        season.id = currentSeason.id;
      }
    }
    return seasons;
  }

  private createMergedEpisode(
    episode: episode,
    seasonWithLang: improveSeason,
    mergedEpisodes: improveMergedEpisode[]
  ): improveMergedEpisode {
    const mergedEpisode: improveMergedEpisode = <improveMergedEpisode>(
      cloneDeep(episode)
    );
    mergedEpisode.episodes = [
      {
        id: episode.id,
        subtitle_locales: episode.subtitle_locales,
        audio_locale: seasonWithLang.audio_locale2,
        videoStreamsUrl: episode.__links__.streams?.href,
      },
    ];
    mergedEpisodes.push(mergedEpisode);
    return mergedEpisode;
  }

  private createMergedSeason(
    seasonWithLang: improveSeason,
    mergedSeasons: improveMergedSeason[]
  ) {
    const mergedSeason: improveMergedSeason = <improveMergedSeason>(
      cloneDeep(seasonWithLang)
    );
    mergedSeason.audio_locales2 = [seasonWithLang.audio_locale2];
    mergedSeason.seasons = new Map([
      [
        seasonWithLang.audio_locale2,
        {
          id: seasonWithLang.id,
          audio_locale: seasonWithLang.audio_locale2,
        },
      ],
    ]);
    mergedSeasons.push(mergedSeason);
  }

  private mergeEpisodeIntoMergedEpisode(
    episode: episode,
    mergedEpisode: improveMergedEpisode,
    seasonWithLang: improveSeason
  ): void {
    if (seasonWithLang.audio_locale2 === "SUB") {
      mergedEpisode.subtitle_locales = episode.subtitle_locales;
    }
    mergedEpisode.is_subbed = mergedEpisode.is_subbed || episode.is_subbed;
    mergedEpisode.is_dubbed = mergedEpisode.is_dubbed || episode.is_dubbed;
    mergedEpisode.episodes.push({
      id: episode.id,
      subtitle_locales: episode.subtitle_locales,
      audio_locale: seasonWithLang.audio_locale2,
      videoStreamsUrl: episode.__links__.streams?.href,
    });
  }

  private mergeSeasonWithLangIntoMergedSeason(
    seasonWithLang: improveSeason,
    mergedSeason: improveMergedSeason
  ) {
    if (seasonWithLang.audio_locale2 === "SUB") {
      mergedSeason.subtitle_locales = seasonWithLang.subtitle_locales;
      mergedSeason.audio_locale2 = seasonWithLang.audio_locale2;
    }
    mergedSeason.is_subbed = mergedSeason.is_subbed || seasonWithLang.is_subbed;
    mergedSeason.is_dubbed = mergedSeason.is_dubbed || seasonWithLang.is_dubbed;
    mergedSeason.audio_locales2.push(seasonWithLang.audio_locale2);
    mergedSeason.seasons.set(seasonWithLang.audio_locale2, {
      id: seasonWithLang.id,
      audio_locale: seasonWithLang.audio_locale2,
    });
    if (!mergedSeason.useNewOrder) {
      mergedSeason.season_number = Math.min(
        mergedSeason.season_number,
        seasonWithLang.season_number
      );
    }
    if (seasonWithLang.audio_locale2 === "SUB") {
      mergedSeason.title = seasonWithLang.title;
    }
  }
}
