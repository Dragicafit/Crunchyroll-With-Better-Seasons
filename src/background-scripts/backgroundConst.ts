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
