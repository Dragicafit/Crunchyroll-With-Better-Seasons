export type languages =
  | "ja-JP"
  | "en-US"
  | "en-IN"
  | "de-DE"
  | "es-419"
  | "es-ES"
  | "fr-FR"
  | "it-IT"
  | "pt-BR"
  | "pt-PT"
  | "ru-RU"
  | "ar-SA"
  | "hi-IN"
  | "zh-CN"
  | "ko-KR";

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
  ad_breaks?: { offset_ms: number; type: string }[];
  audio_locale: string;
  availability_ends: string;
  availability_notes: string;
  availability_starts: string;
  available_date: string | null;
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
  versions:
    | {
        audio_locale: string;
        guid: string;
        is_premium_only: boolean;
        media_guid: string;
        original: boolean;
        season_guid: string;
        variant: string;
      }[]
    | null;
};

export type panel = {
  playback: string;
  id: string;
  title: string;
  promo_title: string;
  streams_link: string;
  channel_id: string;
  linked_resource_key: string;
  slug: string;
  type: string;
  episode_metadata: episode_metadata;
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
  title: string;
  series_id: string;
  description: string;
  seo_title: string;
  number_of_episodes: number;
  versions:
    | {
        audio_locale: string;
        guid: string;
        original: boolean;
        variant: string;
      }[]
    | null;
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
  season_number: number;
  keywords: [];
  images: {};
  audio_locales: string[];
};

export type collectionPanel = {
  total: number;
  data: panel[];
  meta: {};
};

export type collectionSeason = {
  total: number;
  data: season[];
  meta: {
    versions_considered: boolean;
  };
};

export type collectionEpisode = {
  total: number;
  data: episode[];
  meta: {
    versions_considered: boolean;
  };
};

export type episode = {
  production_episode_id: string;
  upload_date: string;
  identifier: string;
  images: {
    thumbnail: {
      height: number;
      source: string;
      type: string;
      width: number;
    }[][];
  };
  next_episode_id: string;
  eligible_region: string;
  free_available_date: string;
  series_title: string;
  season_slug_title: string;
  series_id: string;
  subtitle_locales: string[];
  versions: {
    audio_locale: string;
    guid: string;
    is_premium_only: boolean;
    media_guid: string;
    original: boolean;
    season_guid: string;
    variant: string;
  }[];
  is_dubbed: boolean;
  availability_notes: string;
  mature_blocked: boolean;
  description: string;
  audio_locale: string;
  playback: string;
  listing_id: string;
  available_date: string | null;
  next_episode_title: string;
  seo_description: string;
  episode_air_date: string;
  episode: string;
  season_id: string;
  availability_ends: string;
  media_type: string;
  availability_starts: string;
  hd_flag: boolean;
  extended_maturity_rating: {};
  slug_title: string;
  title: string;
  season_number: number;
  available_offline: boolean;
  series_slug_title: string;
  episode_number: number;
  closed_captions_available: boolean;
  id: string;
  sequence_number: number;
  season_tags: [];
  is_mature: boolean;
  is_clip: boolean;
  premium_available_date: string;
  is_premium_only: boolean;
  seo_title: string;
  streams_link: string;
  channel_id: string;
  premium_date: string | null;
  maturity_ratings: string[];
  duration_ms: number;
  slug: string;
  season_title: string;
  is_subbed: boolean;
};

export type streamInfo = {
  [subtitleLocale: string]: {
    hardsub_locale: subtitleLocales | "";
    url: string;
  };
};

export type videoStreams = {
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
    versions: {
      audio_locale: string;
      guid: string;
      is_premium_only: boolean;
      media_guid: string;
      original: boolean;
      season_guid: string;
      variant: string;
    }[];
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

export const possibleLangKeys: languages[] = [
  "ja-JP",
  "en-US",
  "en-IN",
  "de-DE",
  "es-419",
  "es-ES",
  "fr-FR",
  "it-IT",
  "pt-BR",
  "pt-PT",
  "ru-RU",
  "ar-SA",
  "hi-IN",
  "zh-CN",
  "ko-KR",
];

export const regexPageSeries =
  /^https:\/\/((beta|www)\.)?crunchyroll\.com\/([a-z]{2}(-[a-z]{2})?\/)?series\/[A-Z0-9]{9}/;

export const regexPageWatch =
  /^https:\/\/((beta|www)\.)?crunchyroll\.com\/([a-z]{2}(-[a-z]{2})?\/)?watch\/[A-Z0-9]{9}/;

export const startPagePlayer =
  "https://static.crunchyroll.com/vilos-v2/web/vilos/player.html";

export const startPageBundle =
  "https://static.crunchyroll.com/vilos-v2/web/vilos/js/bundle.js";

export const regexApiObjects =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/content\/v2\/cms\/)(?<apiPath>objects\/[A-Z0-9]{9}\?)(?<extraInfos>.*)$/;

export const regexApiSeasons =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/content\/v2\/cms\/)(?<apiPath>series\/[A-Z0-9]{9}\/seasons\?)(?<extraInfos>.*)$/;

export const regexApiVideoStreams =
  /^(?<host>https:\/\/((beta(-api)?|www)\.)?crunchyroll\.com)(?<baseUrl>\/content\/v2\/cms\/)(?<apiPath>videos\/[A-Z0-9]{9}\/streams\?)(?<extraInfos>.*)$/;

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
