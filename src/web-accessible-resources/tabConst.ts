export enum eventsBackgroundSend {
  SEND_INFO = "sendInfo",
}

export type languages =
  | "SUB"
  | "EN"
  | "FR"
  | "ES"
  | "PT"
  | "DE"
  | "IT"
  | "HI"
  | "AR"
  | "CAS"
  | "RU"
  | "OTHERS";

export type subtitleLocales =
  | "ar-ME"
  | "ar-SA"
  | "de-DE"
  | "en-US"
  | "es-419"
  | "es-ES"
  | "es-LA"
  | "fr-FR"
  | "hi-IN"
  | "it-IT"
  | "pt-BR"
  | "pt-PT"
  | "ru-RU"
  | "tr-TR";

export type subtitleLocalesWithSUB =
  | "ar-MESUB"
  | "ar-SASUB"
  | "de-DESUB"
  | "en-USSUB"
  | "es-419SUB"
  | "es-ESSUB"
  | "es-LASUB"
  | "fr-FRSUB"
  | "hi-INSUB"
  | "it-ITSUB"
  | "pt-BRSUB"
  | "pt-PTSUB"
  | "ru-RUSUB"
  | "tr-TRSUB";

export const subtitleLocalesValues: subtitleLocales[] = [
  "ar-ME",
  "ar-SA",
  "de-DE",
  "en-US",
  "es-419",
  "es-ES",
  "es-LA",
  "fr-FR",
  "hi-IN",
  "it-IT",
  "pt-BR",
  "pt-PT",
  "ru-RU",
  "tr-TR",
];

export const subtitleLocalesWithSUBValues: subtitleLocalesWithSUB[] = [
  "ar-MESUB",
  "ar-SASUB",
  "de-DESUB",
  "en-USSUB",
  "es-419SUB",
  "es-ESSUB",
  "es-LASUB",
  "fr-FRSUB",
  "hi-INSUB",
  "it-ITSUB",
  "pt-BRSUB",
  "pt-PTSUB",
  "ru-RUSUB",
  "tr-TRSUB",
];

export type episode_metadata = {
  series_id: string;
  series_title: string;
  series_slug_title: string;
  season_id: string;
  season_title: string;
  season_slug_title: string;
  season_number: number;
  episode_number: number;
  episode: string;
  sequence_number: number;
  duration_ms: number;
  episode_air_date: string;
  is_premium_only: boolean;
  extended_maturity_rating: {};
  maturity_ratings: string[];
  is_mature: boolean;
  mature_blocked: boolean;
  available_date: string | null;
  free_available_date: string | null;
  premium_date: string | null;
  premium_available_date: string | null;
  is_subbed: boolean;
  is_dubbed: boolean;
  is_clip: boolean;
  available_offline: boolean;
  subtitle_locales: subtitleLocales[];
  availability_notes: string;
};

export type panel = {
  __class__: "panel";
  __href__: "";
  __links__: {
    "episode/season": { href: string };
    "episode/series": { href: string };
    resource: { href: string };
    "resource/channel": { href: string };
    streams: { href: string };
  };
  __actions__: {};
  id: string;
  external_id: string;
  channel_id: string;
  title: string;
  description: string;
  promo_title: string;
  promo_description: string;
  type: string;
  slug: string;
  slug_title: string;
  images: {
    thumbnail: {
      width: number;
      height: number;
      type: string;
      source: string;
    }[][];
  };
  episode_metadata: episode_metadata;
  playback: string;
  linked_resource_key: string;
};

export type season = {
  __class__: "season";
  __href__: string;
  __resource_key__: string;
  __links__: {
    "season/channel": {
      href: string;
    };
    "season/episodes": {
      href: string;
    };
    "season/series": { href: string };
  };
  __actions__: {};
  id: string;
  channel_id: string;
  title: string;
  slug_title: string;
  series_id: string;
  season_number: number;
  is_complete: boolean;
  description: string;
  keywords: [];
  season_tags: string[];
  images: {};
  extended_maturity_rating: {};
  maturity_ratings: string[];
  is_mature: boolean;
  mature_blocked: boolean;
  is_subbed: boolean;
  is_dubbed: boolean;
  is_simulcast: boolean;
  seo_title: string;
  seo_description: string;
  availability_notes: string;
  audio_locales: [];
  subtitle_locales: [];
};

export type improveSeason = season & {
  audio_locale2: languages;
  season_number_order: number;
  useNewLang: boolean;
  useNewOrder: boolean;
};

export type improveMergedSeason = improveSeason & {
  audio_locales2: languages[];
  seasons: Map<
    languages,
    {
      id: string;
      audio_locale: languages;
    }
  >;
};

export type improveMergedEpisode = episode & {
  episodes: {
    id: string;
    audio_locale: languages;
    subtitle_locales: subtitleLocales[];
    videoStreamsUrl: string;
  }[];
};

export type collectionPanel = {
  __class__: "collection";
  __href__: string;
  __resource_key__: string;
  __links__: {};
  __actions__: {};
  total: number;
  items: panel[];
};

export type collectionSeason = {
  __class__: "collection";
  __href__: string;
  __resource_key__: string;
  __links__: {};
  __actions__: {};
  total: number;
  items: season[];
};

export type collectionEpisode = {
  __class__: "collection";
  __href__: string;
  __resource_key__: string;
  __links__: {};
  __actions__: {};
  total: number;
  items: episode[];
};

export type upNextSeries = {
  playhead: number;
  fully_watched: boolean;
  never_watched: boolean;
  panel: panel;
};

export type episode = {
  __class__: "episode";
  __href__: string;
  __resource_key__: string;
  __links__: {
    "episode/channel": {
      href: string;
    };
    "episode/next_episode": {
      href: string;
    };
    "episode/season": {
      href: string;
    };
    "episode/series": {
      href: string;
    };
    streams: { href: string };
  };
  __actions__: {};
  id: string;
  channel_id: string;
  series_id: string;
  series_title: string;
  series_slug_title: string;
  season_id: string;
  season_title: string;
  season_slug_title: string;
  season_number: number;
  episode: string;
  episode_number: number;
  sequence_number: number;
  production_episode_id: string;
  title: string;
  slug_title: string;
  description: string;
  next_episode_id: string;
  next_episode_title: string;
  hd_flag: boolean;
  maturity_ratings: string[];
  extended_maturity_rating: {};
  is_mature: boolean;
  mature_blocked: boolean;
  episode_air_date: string;
  available_date: string | null;
  free_available_date: string | null;
  premium_date: string | null;
  premium_available_date: string | null;
  is_subbed: boolean;
  is_dubbed: boolean;
  is_clip: boolean;
  seo_title: string;
  seo_description: string;
  season_tags: string[];
  available_offline: boolean;
  media_type: string;
  slug: string;
  images: {
    thumbnail: {
      width: number;
      height: number;
      type: string;
      source: string;
    }[][];
  };
  duration_ms: number;
  is_premium_only: boolean;
  listing_id: string;
  subtitle_locales: subtitleLocales[];
  playback: string;
  availability_notes: string;
};

export type streamInfo = {
  [subtitleLocale: string]: {
    hardsub_locale: subtitleLocales | "";
    url: string;
  };
};

export type videoStreams = {
  __class__: "video_streams";
  __href__: string;
  __resource_key__: string;
  __links__: {
    resource: { href: string };
  };
  __actions__: {};
  media_id: string;
  audio_locale: subtitleLocales;
  subtitles: {
    [subtitleLocale: string]: {
      locale: subtitleLocales;
      url: string;
      format: string;
    };
  };
  captions: {};
  streams: {
    adaptive_dash: streamInfo;
    adaptive_hls: streamInfo;
    download_dash: streamInfo;
    download_hls: streamInfo;
    drm_adaptive_dash: streamInfo;
    drm_adaptive_hls: streamInfo;
    drm_download_dash: streamInfo;
    drm_download_hls: streamInfo;
    drm_multitrack_adaptive_hls_v2: streamInfo;
    multitrack_adaptive_hls_v2: streamInfo;
    urls: streamInfo;
    vo_adaptive_dash: streamInfo;
    vo_adaptive_hls: streamInfo;
    vo_drm_adaptive_dash: streamInfo;
    vo_drm_adaptive_hls: streamInfo;
  };
  bifs: string[];
};

export type supported = subtitleLocales[];

export type supportedFallbacks = {
  [subtitleLocale: string]: subtitleLocales[];
};

export type mapping = {
  Wp: {
    [locale: string]: { to: subtitleLocales; desc: string };
  };
};

export type localeToDisplay = {
  [locale: string]: string;
};

export const possibleLang: Map<languages, string> = new Map([
  ["SUB", "Subs"],
  ["EN", "English dub"],
  ["FR", "French dub"],
  ["ES", "Spanish dub"],
  ["PT", "Portuguese dub"],
  ["DE", "German dub"],
  ["IT", "Italian dub"],
  ["HI", "Hindi dub"],
  ["AR", "Arabic dub"],
  ["CAS", "Castilian dub"],
  ["RU", "Russian dub"],
  ["OTHERS", "Other dubs"],
]);

export const langToDisplay: Map<languages, string> = new Map([
  ["SUB", "Japanese"],
  ["EN", "English (United States)"],
  ["FR", "Fran??ais (France)"],
  ["ES", "Espa??ol (Latin America)"],
  ["PT", "Portugu??s (Brasil)"],
  ["DE", "Deutsch (Germany)"],
  ["IT", "Italian (Italy)"],
  ["HI", "Hindi (India)"],
  ["AR", "?????????????? (Arabic)"],
  ["CAS", "Espa??ol (Espa??a)"],
  ["RU", "?????????????? (Russia)"],
  ["OTHERS", "Other"],
]);

export const possibleLangKeys: languages[] = [...possibleLang.keys()];

export const regexPageSeries =
  /^https:\/\/beta.crunchyroll.com\/([a-z]{2}(-[a-z]{2})?\/)?series\/[A-Z0-9]{9}/;

export const regexPageWatch =
  /^https:\/\/beta.crunchyroll.com\/([a-z]{2}(-[a-z]{2})?\/)?watch\/[A-Z0-9]{9}/;

export const startPagePlayer =
  "https://static.crunchyroll.com/vilos-v2/web/vilos/player.html";

export const startPageBundle =
  "https://static.crunchyroll.com/vilos-v2/web/vilos/js/bundle.js";

export const regexApiObjects =
  /^(?<host>https:\/\/beta(-api)?.crunchyroll.com)(?<baseUrl>\/cms\/v2\/[A-Z]{2}\/M3\/crunchyroll\/)(?<apiPath>objects\/[A-Z0-9]{9}\?)(?<extraInfos>.*)$/;

export const regexApiSeasons =
  /^(?<host>https:\/\/beta(-api)?.crunchyroll.com)(?<baseUrl>\/cms\/v2\/[A-Z]{2}\/M3\/crunchyroll\/)(?<apiPath>seasons\?)(?<extraInfos>.*)$/;

export const regexApiUpNextSeries =
  /^https:\/\/beta(-api)?.crunchyroll.com\/content\/v1\/up_next_series/;

export const regexApiEpisodes =
  /^(?<host>https:\/\/beta(-api)?.crunchyroll.com)(?<baseUrl>\/cms\/v2\/[A-Z]{2}\/M3\/crunchyroll\/)(?<apiPath>episodes\?)(?<extraInfos>.*)$/;

export const regexApiVideoStreams =
  /^(?<host>https:\/\/beta(-api)?.crunchyroll.com)(?<baseUrl>\/cms\/v2\/[A-Z]{2}\/M3\/crunchyroll\/)(?<apiPath>videos\/[A-Z0-9]{9}\/streams\?)(?<extraInfos>.*)$/;

export const invalidSlug: string[] = [
  "kaguya-sama-love-is-war",
  "my-hero-academia-season",
  "my-hero-academia",
];

export const seriesGroups: string[][] = [
  ["GR751KNZY", "G24H1NM05"], // Attack on Titan
  ["G6NQ5DWZ6", "GYNV9DP2R"], // My Hero Academia
  ["GRE50KV36", "GY1XX0N0Y"], // Black Clover
  ["G6DQDD3WR", "G0XHWM9MP"], // Fairy Tail
  ["G6GG91P26", "GR0XP5V9Y"], // Food Wars
  ["G619JM99Y", "GKEH2G8N4"], // Monster Strike
  ["G6VDWKM76", "G6VNXNE4R"], // Persona5
  ["GRGGVKP4R", "GRWEK728R"], // Yowamushi Pedal
  ["GYGGPPW7Y", "GRE5XQJV6", "GR09QXWGR", "G6P8GKKJ6"], // Natsume Yujin-cho
  ["G8DHV7W21", "G9VHN9PPW", "G4PH0WXXM", "GR19V7816"], // Dragon Ball
  ["G6ZXZXZ4R", "G3KHEV5NG"], // Saiyuki Reload
  ["GY9PJ5KWR", "GYQ4MW246"], // Naruto
];
