import urlAPI from "../model/urlAPI";
import {
  panel,
  possibleLangKeys,
  season,
  subtitleLocalesWithSUBValues,
  videoStreams,
} from "../web-accessible-resources/tabConst";
import RequestService from "./requestService";

export default class ProxyService {
  private readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  async getInfos(currentEpisode: panel, urlAPI: urlAPI) {
    // const seasonId: string = currentEpisode.episode_metadata.season_id;
    // const currentSeasonWithLang: season = seasonsWithLang.data.find(
    //   (season) => season.id === seasonId
    // )!;
    // const sameSeasonsWithLang: season[] = seasonsWithLang.data.filter(
    //   (season) => this.seasonService.sameSeason(season, currentSeasonWithLang)
    // );
    // await this.parseService.parseMergedEpisodes(
    //   sameSeasonsWithLang,
    //   urlAPI
    // );
  }

  async concatLanguages(seasons: season[]): Promise<season[]> {
    return seasons.map((season) => {
      let firstDub = true;
      const langs = season.versions
        ? season.versions.map((version) => version.audio_locale)
        : season.audio_locales;
      for (const lang of possibleLangKeys.filter((lang) =>
        langs.includes(lang)
      )) {
        if (lang === "ja-JP") {
          season.title += `, SUB`;
        } else if (firstDub) {
          firstDub = false;
          season.title += `, DUBS: ${lang}`;
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
    currentEpisode: panel
  ) {
    if (
      currentEpisode.episode_metadata.audio_locale === "ja-JP" ||
      !currentEpisode.episode_metadata.versions
    ) {
      return videoStreams;
    }
    for (const version of currentEpisode.episode_metadata.versions) {
      if (version.audio_locale != "ja-JP" || version.guid == null) {
        continue;
      }
      const urlVideoStreams: string = `${urlAPI.getHost()}${urlAPI.getBaseUrl()}${
        version.guid
      }${urlAPI.getApiPath().substring(9)}?${urlAPI.getExtraInfos()}`;
      const otherVideoStreams: videoStreams =
        await this.requestService.fetchJson(
          urlVideoStreams,
          urlAPI.getAuthorization()
        );
      for (const otherHardSubs of Object.values(otherVideoStreams.hardSubs)) {
        otherHardSubs.hlang = <any>(otherHardSubs.hlang + "SUB");
        videoStreams.hardSubs[otherHardSubs.hlang] = otherHardSubs;
      }
      for (const otherSubtitle of Object.values(otherVideoStreams.subtitles)) {
        otherSubtitle.language = <any>(otherSubtitle.language + "SUB");
        videoStreams.subtitles[otherSubtitle.language] = otherSubtitle;
      }
    }
    console.log("videoStreams", videoStreams);
    return videoStreams;
  }
}
