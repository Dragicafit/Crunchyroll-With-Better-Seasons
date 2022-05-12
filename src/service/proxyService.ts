import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
  eventsBackgroundSend,
  improveMergedEpisode,
  improveMergedSeason,
  improveSeason,
  langToDisplay,
  languages,
  panel,
  possibleLangKeys,
} from "../web-accessible-resources/tabConst";
import ParseService from "./parseService";
import RequestService from "./requestService";
import SeasonService from "./seasonService";

export default class ProxyService {
  private readonly requestService: RequestService;
  private readonly seasonService: SeasonService;
  private readonly parseService: ParseService;

  constructor(
    requestService: RequestService,
    seasonService: SeasonService,
    parseService: ParseService
  ) {
    this.requestService = requestService;
    this.seasonService = seasonService;
    this.parseService = parseService;
  }

  getSeasonsFromEpisode(
    dataObjects: collectionPanel,
    url: string
  ): Promise<collectionSeason> {
    const serieId = dataObjects.items[0].episode_metadata.series_id;
    const episodeId = dataObjects.items[0].id;
    let urlSeasons = url.replace(
      `objects/${episodeId}?`,
      `seasons?series_id=${serieId}&`
    );
    return this.requestService.fetchJson(urlSeasons);
  }

  async sendLanguagesToVilos(
    seasons: collectionSeason,
    currentEpisode: panel,
    url: string
  ) {
    const currentEpisodeId = currentEpisode.id;
    const currentEpisodeNumber =
      currentEpisode.episode_metadata.sequence_number;
    const seasonId = currentEpisode.episode_metadata.season_id;

    const seasonsWithLang = await this.parseService.parseSeasonsWithLang(
      seasons,
      url
    );
    const currentSeasonWithLang = seasonsWithLang.find(
      (season) => season.id === seasonId
    )!;
    const sameSeasonsWithLang = seasonsWithLang.filter((season) =>
      this.seasonService.sameSeason(season, currentSeasonWithLang)
    );
    const episodes = await this.parseService.parseMergeEpisode(
      sameSeasonsWithLang,
      currentEpisodeId,
      url
    );
    const mergedEpisodes: improveMergedEpisode = episodes.find(
      (item) => item.sequence_number === currentEpisodeNumber
    )!;
    const languages: {
      id: languages;
      name: string;
      url: string;
    }[] = mergedEpisodes.episodes.map((episode) => ({
      id: episode.audio_locale,
      name: langToDisplay[episode.audio_locale],
      url: document.URL.replace(currentEpisodeId, episode.id),
    }));
    const languagesOrdered = possibleLangKeys
      .filter((lang) => languages.map((language) => language.id).includes(lang))
      .map((lang) => languages.find((lang2) => lang == lang2.id)!);
    const currentLanguageId = languagesOrdered.find(
      (season) => season.id == currentSeasonWithLang.audio_locale2
    )?.id;
    const vilosWindow = (<HTMLIFrameElement>(
      document.getElementsByClassName("video-player")[0]
    )).contentWindow!;
    console.log("send info", {
      currentLanguage: currentLanguageId,
      languages: languagesOrdered,
    });
    vilosWindow.postMessage(
      {
        direction: "from-script-CWBS",
        command: eventsBackgroundSend.SEND_INFO,
        currentAudioLanguage: currentLanguageId,
        audioLanguages: languagesOrdered,
      },
      "https://static.crunchyroll.com/vilos-v2/web/vilos/player.html"
    );
  }

  async addEpisodesFromOtherLanguages(
    episodes: collectionEpisode,
    seasonsWithLang: improveSeason[],
    url: string
  ) {
    const currentSeasonId = episodes.items[0].season_id;
    const currentSeasonWithLang = seasonsWithLang.find(
      (season) => season.id === currentSeasonId
    )!;
    const sameSeasonsWithLang = seasonsWithLang.filter((season) =>
      this.seasonService.sameSeason(season, currentSeasonWithLang)
    );
    const promiseList: Promise<void>[] = [];
    for (const season of sameSeasonsWithLang) {
      if (season.id === currentSeasonId) {
        continue;
      }
      let urlOtherEpisodes = url.replace(
        `episodes?season_id=${currentSeasonId}`,
        `episodes?season_id=${season.id}`
      );
      promiseList.push(
        this.requestService
          .fetchJson(urlOtherEpisodes)
          .then((body: collectionEpisode) => {
            body.items.forEach((episode) => {
              if (
                !episodes.items.find(
                  (alreadyPresentEpisode) =>
                    episode.sequence_number ===
                    alreadyPresentEpisode.sequence_number
                )
              ) {
                episodes.items.push(episode);
              }
            });
          })
      );
    }
    await Promise.all(promiseList);
    episodes.items.sort(
      (episode1, episode2) =>
        episode1.sequence_number - episode2.sequence_number
    );
    return episodes;
  }

  async concatLanguages(
    seasonsWithLang: improveSeason[],
    upNext: string,
    url: string
  ): Promise<improveMergedSeason[]> {
    const mergedSeasons = await this.parseService.parseMergedSeasons(
      seasonsWithLang,
      upNext
    );
    return mergedSeasons.map((season) => {
      let firstDub = true;
      for (const lang of possibleLangKeys.filter(
        (lang) =>
          season.seasons.find((season) => season.audio_locale === lang) != null
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
  }
}
