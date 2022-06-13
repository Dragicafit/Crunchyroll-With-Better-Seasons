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
    const serieId: string = dataObjects.items[0].episode_metadata.series_id;
    const episodeId: string = dataObjects.items[0].id;
    const urlSeasons: string = url.replace(
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
      name: string | undefined;
      url: string;
    }[] = mergedEpisodes.episodes.map((episode) => ({
      id: episode.audio_locale,
      name: langToDisplay.get(episode.audio_locale),
      url: document.URL.replace(currentEpisodeId, episode.id),
    }));
    const languagesOrdered = possibleLangKeys
      .filter((lang) => languages.map((language) => language.id).includes(lang))
      .map((lang) => languages.find((lang2) => lang == lang2.id)!);
    const currentLanguageId: languages | undefined = languagesOrdered.find(
      (season) => season.id == currentSeasonWithLang.audio_locale2
    )?.id;
    const vilosWindow: Window = (<HTMLIFrameElement>(
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
    const seasonId: string = currentEpisode.episode_metadata.season_id;
    const currentSeasonWithLang: improveSeason = seasonsWithLang.find(
      (season) => season.id === seasonId
    )!;
    const sameSeasonsWithLang: improveSeason[] = seasonsWithLang.filter(
      (season) => this.seasonService.sameSeason(season, currentSeasonWithLang)
    );
    const mergedEpisodesList: improveMergedEpisode[] =
      await this.parseService.parseMergedEpisodes(
        sameSeasonsWithLang,
        url,
        currentEpisodeId
      );
    return {
      currentSeasonWithLang,
      mergedEpisodesList,
    };
  }

  async addEpisodesFromOtherLanguages(
    collectionEpisode: collectionEpisode,
    seasonsWithLang: improveSeason[],
    url: string
  ) {
    const currentSeasonId: string = collectionEpisode.items[0].season_id;
    const currentSeasonWithLang: improveSeason = seasonsWithLang.find(
      (season) => season.id === currentSeasonId
    )!;
    const sameSeasonsWithLang: improveSeason[] = seasonsWithLang.filter(
      (season) => this.seasonService.sameSeason(season, currentSeasonWithLang)
    );

    return await this.parseService.parseMergedEpisodesWithCurrentEpisodes(
      sameSeasonsWithLang,
      collectionEpisode.items,
      url,
      currentSeasonId
    );
  }

  async concatLanguages(
    seasonsWithLang: improveSeason[],
    upNext: string
  ): Promise<improveMergedSeason[]> {
    const mergedSeasons: improveMergedSeason[] =
      await this.parseService.parseMergedSeasons(seasonsWithLang, upNext);
    return mergedSeasons.map((season) => {
      let firstDub = true;
      for (const lang of possibleLangKeys.filter((lang) =>
        season.seasons.has(lang)
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
      const urlVideoStreams: string = url.replace(
        /\/cms\/v2\/[A-Z]{2}\/M3\/crunchyroll\/videos\/[A-Z0-9]{9}\/streams/,
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
