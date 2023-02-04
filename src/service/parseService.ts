import { collectionSeason, season } from "../web-accessible-resources/tabConst";

export default class ParseService {
  constructor() {}

  // async parseMergedEpisodes(
  //   sameSeasonsWithLang: season[],
  //   urlAPI: urlAPI,
  //   episode?: panel
  // ): Promise<panel[]> {
  //   const promiseList: Promise<void>[] = [];
  //   for (const season of sameSeasonsWithLang) {
  //     promiseList.push(
  //       this.addOtherEpisodesToEpisode(urlAPI, season, episode)
  //     );
  //   }
  //   await Promise.all(promiseList);
  //   mergedEpisodesList.sort(
  //     (episode1, episode2) =>
  //       episode1.sequence_number - episode2.sequence_number
  //   );

  //   const preferedAudioLanguages = [...this.config.preferedAudioLanguages];
  //   preferedAudioLanguages.reverse();
  //   for (const episode of mergedEpisodesList) {
  //     for (const preferedAudioLanguage of preferedAudioLanguages) {
  //       const currentSeason = [...episode.episodes.values()].find(
  //         (episode) => episode.audio_locale === preferedAudioLanguage
  //       );
  //       if (currentSeason != null) {
  //         episode.id = currentSeason.id;
  //       }
  //     }
  //   }

  //   return mergedEpisodesList;
  // }

  // async addOtherEpisodesToEpisode(
  //   urlAPI: urlAPI,
  //   season: season,
  //   mergedEpisode: panel
  // ): Promise<void> {
  //   const urlOtherEpisodes: string = urlAPI
  //     .setApiPath(`episodes?season_id=${season.id}&`)
  //     .toString();
  //   return await this.requestService
  //     .fetchJson(urlOtherEpisodes)
  //     .then((body: collectionPanel) => {
  //       body.data.forEach((episode: panel) => {
  //         const mergedEpisodes: panel | undefined = mergedEpisode.find(
  //           (alreadyPresentEpisode) =>
  //             episode.episode_metadata.sequence_number ===
  //             alreadyPresentEpisode.episode_metadata.sequence_number
  //         );
  //         if (mergedEpisodes != null) {
  //           this.mergeEpisodeIntoMergedEpisode(
  //             episode,
  //             mergedEpisodes,
  //             season
  //           );
  //         } else {
  //           this.createMergedEpisode(episode, mergedEpisode);
  //         }
  //       });
  //     });
  // }

  async parseSeasonsWithLang(seasons: collectionSeason): Promise<season[]> {
    if (seasons.meta.versions_considered) {
      for (const season of seasons.data) {
        season.title = season.title.replace(
          / \(English Dub\)$| \(French Dub\)$| \(Spanish Dub\)$| \(Portuguese Dub\)$| \(German Dub\)$| \(Italian Dub\)$| \(Hindi Dub\)$| \(Arabic Dub\)$| \(Castilian Dub\)$| \(Russian Dub\)$| \(Dub\)$| \(Sub\)$| \(Dubbed\)$| \(Subbed\)$| \(Subtitled\)$| \(Russian\)$| \(VF\)$|\(EN\) |\(FR\) |\(ES\) |\(PT\) |\(DE\) |\(IT\) |\(HI\) |\(AR\) |\(CAS\) |\(RU\) |\(OmU\) /,
          ""
        );
      }
    }
    //   const serieId: string = seasons.data[0].series_id;
    //   await this.seasonService.findOtherSeries(serieId, urlAPI, seasons);
    return seasons.data;
  }
}
