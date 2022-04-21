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
};

export type crunchyrollApiObjects = {
  items: {
    slug_title: string;
    lang: "EN" | "FR" | "ES" | "PT" | "DE" | "RU";
    episode_metadata: episode_metadata;
    id: string;
    series_id: string;
  }[];
};
export type crunchyrollApiSeasons = {
  items: {
    slug_title: string;
    lang: "EN" | "FR" | "ES" | "PT" | "DE" | "RU";
    episode_metadata: episode_metadata;
    id: string;
    series_id: string;
  }[];
};
export type crunchyrollApiUpNextSeries = {
  items: {
    slug_title: string;
    lang: "EN" | "FR" | "ES" | "PT" | "DE" | "RU";
    episode_metadata: episode_metadata;
    id: string;
    series_id: string;
  }[];
};
export type crunchyrollApiEpisode = {
  items: { sequence_number: number; id: string }[];
};

export const possibleLang = {
  SUB: "Subs",
  EN: "English dub",
  FR: "French dub",
  ES: "Spanish dub",
  PT: "Portuguese dub",
  DE: "German dub",
  RU: "Russian dub",
  OTHERS: "Other dub",
};

export const possibleLangKeys = <languages[]>Object.keys(possibleLang);
