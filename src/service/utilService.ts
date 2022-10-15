import browser from "webextension-polyfill";
import {
  languages,
  possibleLangKeys,
  PREFERED_AUDIO_LANGUAGES,
} from "../web-accessible-resources/tabConst";

export function defaultLanguages(): languages[] {
  const userLang: string = browser.i18n
    .getUILanguage()
    .substring(0, 2)
    .toUpperCase();
  const preferedAudioLanguages: languages[] = [
    "SUB",
    possibleLangKeys.includes(<any>userLang) ? <any>userLang : "EN",
  ];
  return preferedAudioLanguages;
}

export function setPreferedAudioLanguages(
  preferedAudioLanguages: languages[]
): void {
  browser.storage.local.set({
    [PREFERED_AUDIO_LANGUAGES]: preferedAudioLanguages,
  });
}

export async function getPreferedAudioLanguages(): Promise<languages[]> {
  const item: Record<string, any> = await browser.storage.local.get(
    PREFERED_AUDIO_LANGUAGES
  );

  let preferedAudioLanguages: any = item[PREFERED_AUDIO_LANGUAGES];

  if (!Array.isArray(preferedAudioLanguages)) {
    return defaultLanguages();
  }

  return preferedAudioLanguages.filter((preferedAudioLanguage) =>
    possibleLangKeys.includes(preferedAudioLanguage)
  );
}
