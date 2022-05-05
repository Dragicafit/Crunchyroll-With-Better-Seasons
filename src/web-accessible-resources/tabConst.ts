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
  | "RU"
  | "OTHERS";

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
  extended_maturity_ratings: {};
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
  subtitle_locales: (
    | "en-US"
    | "es-419"
    | "es-ES"
    | "fr-FR"
    | "pt-BR"
    | "ar-SA"
    | "it-IT"
    | "de-DE"
    | "ru-RU"
  )[];
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
  extended_maturity_ratings: {};
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

export type impoveSeason = season & {
  lang: languages;
  season_number_order: number;
  useNewLang: boolean;
  useNewOrder: boolean;
};

export type impoveMergedSeason = impoveSeason & {
  langs: languages[];
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
  extended_maturity_ratings: {};
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
  subtitle_locales: (
    | "en-US"
    | "es-419"
    | "es-ES"
    | "fr-FR"
    | "pt-BR"
    | "ar-SA"
    | "it-IT"
    | "de-DE"
    | "ru-RU"
  )[];
  playback: string;
  availability_notes: string;
};

export const possibleLang = {
  SUB: "Subs",
  EN: "English dub",
  FR: "French dub",
  ES: "Spanish dub",
  PT: "Portuguese dub",
  DE: "German dub",
  RU: "Russian dub",
  OTHERS: "Other dubs",
};

export const langToDisplay = {
  SUB: "Japanese",
  EN: "English (United States)",
  FR: "Français (France)",
  ES: "Español (Latin America)",
  PT: "Português (Brasil)",
  DE: "Deutsch (Germany)",
  RU: "Русский (Russia)",
  OTHERS: "Other",
};

export const possibleLangKeys = <languages[]>Object.keys(possibleLang);

export const regexPageSeries =
  /^https:\/\/beta.crunchyroll.com\/([a-z]{2}(-[a-z]{2})?\/)?series/;

export const regexPageWatch =
  /^https:\/\/beta.crunchyroll.com\/([a-z]{2}(-[a-z]{2})?\/)?watch/;

export const regexApiObjects =
  /^https:\/\/beta-api.crunchyroll.com\/cms\/v2\/[A-Z]{2}\/M3\/crunchyroll\/objects\/[A-Z0-9]{9}/;

export const regexApiSeasons =
  /^https:\/\/beta-api.crunchyroll.com\/cms\/v2\/[A-Z]{2}\/M3\/crunchyroll\/seasons/;

export const startApiUpNextSeries =
  "https://beta-api.crunchyroll.com/content/v1/up_next_series";

export const regexApiEpisodes =
  /^https:\/\/beta-api.crunchyroll.com\/cms\/v2\/[A-Z]{2}\/M3\/crunchyroll\/episodes/;

export const findOtherDubs = new Map([
  ["G24H1NM05", "GR751KNZY"], //AOT
  ["GR751KNZY", "G24H1NM05"], //AOT
  ["GYNV9DP2R", "G6NQ5DWZ6"], //MHA
  ["G6NQ5DWZ6", "GYNV9DP2R"], //MHA
  ["GY1XX0N0Y", "GRE50KV36"], //BC
  ["GRE50KV36", "GY1XX0N0Y"], //BC
  ["G0XHWM9MP", "G6DQDD3WR"], //FT
  ["G6DQDD3WR", "G0XHWM9MP"], //FT
  ["GR0XP5V9Y", "G6GG91P26"], //FW
  ["G6GG91P26", "GR0XP5V9Y"], //FW
  ["GKEH2G8N4", "G619JM99Y"], //Monster Strike
  ["G619JM99Y", "GKEH2G8N4"], //Monster Strike
]);
