export enum eventsBackgroundReceive {
  ASK_INFO = "askInfo",
}

export enum eventsBackgroundSend {
  SEND_INFO = "sendInfo",
}

export type lang = "SUB" | "EN" | "FR" | "ES" | "PT" | "DE" | "RU" | "OTHERS";

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

export const possibleLangKeys = <lang[]>Object.keys(possibleLang);
