import urlAPI from "../model/urlAPI";
import {
  collectionEpisode,
  collectionPanel,
  collectionSeason,
  Config,
  eventsBackgroundSend,
  FROM_SCRIPT_CWBS,
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
  private readonly config: Config;

  constructor(
    requestService: RequestService,
    seasonService: SeasonService,
    parseService: ParseService,
    config: Config
  ) {
    this.requestService = requestService;
    this.seasonService = seasonService;
    this.parseService = parseService;
    this.config = config;
  }

  getSeasonsFromEpisode(
    dataObjects: collectionPanel,
    urlAPI: urlAPI
  ): Promise<collectionSeason> {
    const serieId: string = dataObjects.items[0].episode_metadata.series_id;
    const urlSeasons: string = urlAPI
      .setApiPath(`seasons?series_id=${serieId}&`)
      .toString();
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
      .map((lang) => languages.find((lang2) => lang === lang2.id)!);
    const currentLanguageId: languages | undefined = languagesOrdered.find(
      (season) => season.id === currentSeasonWithLang.audio_locale2
    )?.id;
    const vilosWindow: Window = (<HTMLIFrameElement>(
      document.getElementsByClassName("video-player")[0]
    )).contentWindow!;

    const post: () => void = () => {
      console.log(
        "send info",
        {
          currentLanguage: currentLanguageId,
          languages: languagesOrdered,
        },
        vilosWindow
      );
      if (!this.isLoaded(vilosWindow)) {
        setTimeout(post, 100);
        return;
      }
      vilosWindow.postMessage(
        {
          direction: FROM_SCRIPT_CWBS,
          command: eventsBackgroundSend.SEND_INFO,
          preferedAudioLanguage: currentLanguageId,
          audioLanguages: languagesOrdered,
        },
        startPagePlayer
      );
    };
    post();
  }

  private isLoaded(window: Window): boolean {
    try {
      window.location.href;
      return false;
    } catch (error) {
      return true;
    }
  }

  async getInfos(
    currentEpisode: panel,
    seasonsWithLang: improveSeason[],
    urlAPI: urlAPI
  ) {
    const seasonId: string = currentEpisode.episode_metadata.season_id;
    const currentSeasonWithLang: improveSeason = seasonsWithLang.find(
      (season) => season.id === seasonId
    )!;
    const sameSeasonsWithLang: improveSeason[] = seasonsWithLang.filter(
      (season) => this.seasonService.sameSeason(season, currentSeasonWithLang)
    );
    const mergedEpisodesList: improveMergedEpisode[] =
      await this.parseService.parseMergedEpisodes(sameSeasonsWithLang, urlAPI);
    return {
      currentSeasonWithLang,
      mergedEpisodesList,
    };
  }

  async addEpisodesFromOtherLanguages(
    collectionEpisode: collectionEpisode,
    seasonsWithLang: improveSeason[],
    urlAPI: urlAPI
  ) {
    const currentSeasonId: string = collectionEpisode.items[0].season_id;
    const currentSeasonWithLang: improveSeason = seasonsWithLang.find(
      (season) => season.id === currentSeasonId
    )!;
    const sameSeasonsWithLang: improveSeason[] = seasonsWithLang.filter(
      (season) => this.seasonService.sameSeason(season, currentSeasonWithLang)
    );

    const episodes =
      await this.parseService.parseMergedEpisodesWithCurrentEpisodes(
        sameSeasonsWithLang,
        collectionEpisode.items,
        urlAPI,
        currentSeasonId
      );

    const preferedAudioLanguages = this.config.preferedAudioLanguages;
    preferedAudioLanguages.reverse();
    for (const episode of episodes) {
      for (const preferedAudioLanguage of preferedAudioLanguages) {
        const currentSeason = [...episode.episodes.values()].find(
          (episode) => episode.audio_locale === preferedAudioLanguage
        );
        if (currentSeason != null) {
          episode.id = currentSeason.id;
        }
      }
    }
    return episodes;
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
    urlAPI: urlAPI,
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
      if (
        mergedEpisode.audio_locale != "SUB" ||
        mergedEpisode.videoStreamsUrl == null
      ) {
        continue;
      }
      const urlVideoStreams: string =
        urlAPI.getHost() +
        mergedEpisode.videoStreamsUrl +
        "?" +
        urlAPI.getExtraInfos();
      const otherVideoStreams: videoStreams =
        await this.requestService.fetchJson(urlVideoStreams);
      for (const otherSubtitle of Object.values(otherVideoStreams.subtitles)) {
        otherSubtitle.locale = <any>(otherSubtitle.locale + "SUB");
        videoStreams.subtitles[otherSubtitle.locale] = otherSubtitle;
      }
      for (const [otherStream, otherStreamInfo] of Object.entries(
        otherVideoStreams.streams
      ))
        for (const otherSubtitle of Object.values(otherStreamInfo)) {
          if (otherSubtitle.hardsub_locale === "") continue;
          otherSubtitle.hardsub_locale = <any>(
            (otherSubtitle.hardsub_locale + "SUB")
          );
          (<any>videoStreams.streams)[otherStream][
            otherSubtitle.hardsub_locale
          ] = otherSubtitle;
        }
    }
    console.log("videoStreams", videoStreams);
    return videoStreams;
  }
}
