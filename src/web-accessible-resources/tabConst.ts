export enum eventsBackgroundSend {
  SEND_INFO = "sendInfo",
  SEND_CONFIG = "sendConfig",
}

export enum eventsBackgroundReceive {
  ASK_CONFIG = "askConfig",
}

export const FROM_CONTENT_CWBS = "from-content-CWBS";
export const FROM_SCRIPT_CWBS = "from-script-CWBS";

export const PREFERED_AUDIO_LANGUAGES = "PREFERED_AUDIO_LANGUAGES";

export type Config = { preferedAudioLanguages: languages[] };

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
  upload_date: string;
  availability_starts: string;
  availability_ends: string;
  eligible_region: string;
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
  audio_locale: string;
  versions: null;
  closed_captions_available: boolean;
  identifier: string;
};

export type episode_metadataV2 = {
  ad_breaks: { offset_ms: number; type: string }[];
  audio_locale: string;
  availability_ends: string;
  availability_notes: string;
  availability_starts: string;
  available_date?: string;
  available_offline: boolean;
  closed_captions_available: boolean;
  duration_ms: number;
  eligible_region: string;
  episode: string;
  episode_air_date: string;
  episode_number: number;
  extended_maturity_rating: {};
  free_available_date: string;
  identifier: string;
  is_clip: boolean;
  is_dubbed: boolean;
  is_mature: boolean;
  is_premium_only: boolean;
  is_subbed: boolean;
  mature_blocked: boolean;
  maturity_ratings: string[];
  premium_available_date: string;
  premium_date: null;
  season_id: string;
  season_number: number;
  season_slug_title: string;
  season_title: string;
  sequence_number: number;
  series_id: string;
  series_slug_title: string;
  series_title: string;
  subtitle_locales: string[];
  upload_date: string;
  versions?: {
    audio_locale: string;
    guid: string;
    is_premium_only: boolean;
    media_guid: string;
    original: boolean;
    season_guid: string;
    variant: string;
  }[];
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
  images: {
    thumbnail: {
      width: number;
      height: number;
      type: string;
      source: string;
    }[][];
  };
  episode_metadata: episode_metadata;
  title: string;
  slug_title: string;
  external_id: string;
  promo_title: string;
  slug: string;
  description: string;
  promo_description: string;
  id: string;
  linked_resource_key: string;
  channel_id: string;
  playback: string;
  type: string;
  streams_link?: string;
};

export type panelV2 = {
  playback: string;
  id: string;
  title: string;
  promo_title: string;
  streams_link: string;
  channel_id: string;
  linked_resource_key: string;
  slug: string;
  type: string;
  episode_metadata: episode_metadataV2;
  external_id: string;
  promo_description: string;
  images: {
    thumbnail: {
      height: number;
      source: string;
      type: string;
      width: number;
    }[][];
  };
  description: string;
  slug_title: string;
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
  season_display_number: string;
  season_sequence_number: number;
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
  audio_locale: string;
  versions: null;
  identifier: string;
};

export type seasonV2 = {
  title: string;
  series_id: string;
  description: string;
  seo_title: string;
  number_of_episodes: number;
  versions?: {
    audio_locale: string;
    guid: string;
    original: boolean;
    variant: string;
  }[];
  slug_title: string;
  season_tags: string[];
  maturity_ratings: string[];
  is_mature: boolean;
  audio_locale: string;
  channel_id: string;
  is_dubbed: boolean;
  subtitle_locales: string[];
  season_display_number: string;
  is_complete: boolean;
  is_simulcast: boolean;
  extended_maturity_rating: {};
  availability_notes: string;
  seo_description: string;
  identifier: string;
  season_sequence_number: number;
  mature_blocked: boolean;
  is_subbed: boolean;
  id: string;
  season_number: 1;
  keywords: [];
  images: {};
  audio_locales: string[];
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
    videoStreamsUrl?: string;
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

export type collectionPanelV2 = {
  total: number;
  data: panelV2[];
  meta: {};
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

export type collectionSeasonV2 = {
  total: number;
  data: seasonV2[];
  meta: {
    versions_considered: boolean;
  };
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
  upload_date: string;
  availability_starts: string;
  availability_ends: string;
  eligible_region: string;
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
  subtitle_locales: subtitleLocales[];
  playback: string;
  availability_notes: string;
  audio_locale: string;
  versions: null;
  closed_captions_available: boolean;
  identifier: string;
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
  audio_locale: string;
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
  versions: null;
};

export type videoStreamsV2 = {
  total: number;
  data: [
    {
      vo_adaptive_dash: streamInfo;
      multitrack_adaptive_hls_v2: streamInfo;
      adaptive_hls: streamInfo;
      download_dash: streamInfo;
      drm_download_hls: streamInfo;
      vo_drm_adaptive_hls: streamInfo;
      adaptive_dash: streamInfo;
      drm_download_dash: streamInfo;
      drm_multitrack_adaptive_hls_v2: streamInfo;
      vo_drm_adaptive_dash: streamInfo;
      drm_adaptive_dash: streamInfo;
      drm_adaptive_hls: streamInfo;
      urls: streamInfo;
      vo_adaptive_hls: streamInfo;
      download_hls: streamInfo;
    }
  ];
  meta: {
    closed_captions: {};
    media_id: string;
    bifs: string[];
    versions: null;
    captions: {};
    audio_locale: string;
    subtitles: {
      [subtitleLocale: string]: {
        locale: subtitleLocales;
        url: string;
        format: string;
      };
    };
  };
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
  ["FR", "Français (France)"],
  ["ES", "Español (Latin America)"],
  ["PT", "Português (Brasil)"],
  ["DE", "Deutsch (Germany)"],
  ["IT", "Italian (Italy)"],
  ["HI", "Hindi (India)"],
  ["AR", "العربية (Arabic)"],
  ["CAS", "Español (España)"],
  ["RU", "Русский (Russia)"],
  ["OTHERS", "Other"],
]);

export const possibleLangKeys: languages[] = [...possibleLang.keys()];

export const regexPageSeries =
  /^https:\/\/((beta|www)\.)?crunchyroll\.com\/([a-z]{2}(-[a-z]{2})?\/)?series\/[A-Z0-9]{9}/;

export const regexPageWatch =
  /^https:\/\/((beta|www)\.)?crunchyroll\.com\/([a-z]{2}(-[a-z]{2})?\/)?watch\/[A-Z0-9]{9}/;

export const startPagePlayer =
  "https://static.crunchyroll.com/vilos-v2/web/vilos/player.html";

export const startPageBundle =
  "https://static.crunchyroll.com/vilos-v2/web/vilos/js/bundle.js";

export const regexApiObjects =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/cms\/v2\/[A-Z]{2}\/M\d\/(?:crunchyroll|-)\/)(?<apiPath>objects\/[A-Z0-9]{9}\?)(?<extraInfos>.*)$/;

export const regexApiObjectsV2 =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/content\/v2\/cms\/)(?<apiPath>objects\/[A-Z0-9]{9}\?)(?<extraInfos>.*)$/;

export const regexApiSeasons =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/cms\/v2\/[A-Z]{2}\/M\d\/(?:crunchyroll|-)\/)(?<apiPath>seasons\?)(?<extraInfos>.*)$/;

export const regexApiSeasonsV2 =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/content\/v2\/cms\/)(?<apiPath>series\/[A-Z0-9]{9}\/seasons\?)(?<extraInfos>.*)$/;

export const regexApiUpNextSeries =
  /^https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com\/content\/v1\/up_next_series/;

export const regexApiEpisodes =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/cms\/v2\/[A-Z]{2}\/M\d\/(?:crunchyroll|-)\/)(?<apiPath>episodes\?)(?<extraInfos>.*)$/;

export const regexApiVideoStreams =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/cms\/v2\/[A-Z]{2}\/M\d\/(?:crunchyroll|-)\/)(?<apiPath>videos\/[A-Z0-9]{9}\/streams\?)(?<extraInfos>.*)$/;

export const regexApiVideoStreamsV2 =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/content\/v2\/cms\/)(?<apiPath>videos\/[A-Z0-9]{9}\/streams\?)(?<extraInfos>.*)$/;

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
