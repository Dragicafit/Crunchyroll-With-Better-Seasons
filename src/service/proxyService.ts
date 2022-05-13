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
  startPagePlayer,
  subtitleLocalesWithSUBValues,
  videoStreams,
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
    currentEpisode: panel,
    currentSeasonWithLang: improveSeason,
    currentEpisodeId: string,
    mergedEpisodes: improveMergedEpisode
  ) {
    currentEpisode.episode_metadata.sequence_number;
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
      startPagePlayer
    );
  }

  async getInfos(
    currentEpisode: panel,
    currentEpisodeId: string,
    seasonsWithLang: improveSeason[],
    url: string
  ) {
    const seasonId = currentEpisode.episode_metadata.season_id;

    const currentSeasonWithLang = seasonsWithLang.find(
      (season) => season.id === seasonId
    )!;
    const sameSeasonsWithLang = seasonsWithLang.filter((season) =>
      this.seasonService.sameSeason(season, currentSeasonWithLang)
    );
    const mergedEpisodesList = await this.parseService.parseMergedEpisodes(
      sameSeasonsWithLang,
      currentEpisodeId,
      url
    );
    return {
      currentSeasonWithLang,
      mergedEpisodesList,
    };
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
    upNext: string
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

  addSubtitlesFromOtherLanguages(currentEpisode: panel) {
    currentEpisode.episode_metadata.is_subbed = true;
    currentEpisode.episode_metadata.subtitle_locales.push(
      ...(<any[]>subtitleLocalesWithSUBValues)
    );
    return currentEpisode;
  }

  async addVideoStreamsFromOtherLanguages(
    videoStreams: videoStreams,
    url: string,
    currentEpisode: panel,
    mergedEpisodes: improveMergedEpisode
  ) {
    if (
      currentEpisode.episode_metadata.is_subbed ||
      !currentEpisode.episode_metadata.is_dubbed
    ) {
      return videoStreams;
    }
    for (const mergedEpisode of mergedEpisodes.episodes) {
      const urlVideoStreams = url.replace(
        /\/cms\/v2\/FR\/M3\/crunchyroll\/videos\/[A-Z0-9]{9}\/streams/,
        mergedEpisode.videoStreamsUrl
      );
      const subtitles = await this.requestService
        .fetchJson(urlVideoStreams)
        .then((body: videoStreams) => Object.values(body.subtitles));
      for (const subtitle of subtitles) {
        if (mergedEpisode.audio_locale != "SUB") {
          continue;
        }
        subtitle.locale = <any>(subtitle.locale + "SUB");
        videoStreams.subtitles[subtitle.locale] = subtitle;
      }
    }
    console.log("subtitles", videoStreams.subtitles);
    return videoStreams;
  }
}