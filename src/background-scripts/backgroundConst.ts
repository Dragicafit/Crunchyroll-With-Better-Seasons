export enum eventsBackgroundReceive {
  ASK_INFO = "askInfo",
}

export enum eventsBackgroundSend {
  SEND_INFO = "sendInfo",
}

export const preferedLangKey = "PREFERED_LANG_KEY";

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
  is_mature: boolean;
  mature_blocked: boolean;
  available_date: null;
  free_available_date: null;
  premium_date: null;
  premium_available_date: null;
  is_subbed: boolean;
  is_dubbed: boolean;
  is_clip: boolean;
  available_offline: boolean;
  maturity_ratings: string[];
  subtitle_locales: string[];
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
  "episode/season": { href: string };
  "episode/series": { href: string };
  resource: { href: string };
  "resource/channel": { href: string };
  streams: { href: string };
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
    }[];
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
  season_tags: [];
  images: {};
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
  is_mature: boolean;
  mature_blocked: boolean;
  episode_air_date: string;
  available_date: string;
  free_available_date: string;
  premium_date: string;
  premium_available_date: string;
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
  SUB: "Sub",
  EN: "English",
  FR: "French",
  ES: "Spanish",
  PT: "Portuguese",
  DE: "German",
  RU: "Russian",
  OTHERS: "Other",
};

export const possibleLangKeys = <languages[]>Object.keys(possibleLang);
