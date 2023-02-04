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
      currentEpisode.episode_metadata.is_subbed ||
      !currentEpisode.episode_metadata.is_dubbed ||
      !currentEpisode.episode_metadata.versions
    ) {
      return videoStreams;
    }
    for (const version of currentEpisode.episode_metadata.versions) {
      if (version.audio_locale != "ja-JP" || version.media_guid == null) {
        continue;
      }
      const urlVideoStreams: string = `${urlAPI.getHost()}/content/v2/cms/videos/${
        version.media_guid
      }/streams?${urlAPI.getExtraInfos()}`;
      const otherVideoStreams: videoStreams =
        await this.requestService.fetchJson(
          urlVideoStreams,
          urlAPI.getAuthorization()
        );
      for (const otherSubtitle of Object.values(
        otherVideoStreams.meta.subtitles
      )) {
        otherSubtitle.locale = <any>(otherSubtitle.locale + "SUB");
        videoStreams.meta.subtitles[otherSubtitle.locale] = otherSubtitle;
      }
      for (const [otherStream, otherStreamInfo] of Object.entries(
        otherVideoStreams.data[0]
      ))
        for (const otherSubtitle of Object.values(otherStreamInfo)) {
          if (otherSubtitle.hardsub_locale === "") continue;
          otherSubtitle.hardsub_locale = <any>(
            (otherSubtitle.hardsub_locale + "SUB")
          );
          (<any>videoStreams.data[0])[otherStream][
            otherSubtitle.hardsub_locale
          ] = otherSubtitle;
        }
    }
    console.log("videoStreams", videoStreams);
    return videoStreams;
  }
}
