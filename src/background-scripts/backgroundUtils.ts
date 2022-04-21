import { possibleLangKeys } from "./backgroundConst";
import browser from "webextension-polyfill";

export class BackgroundUtils {
  getActiveTab() {
    return new Promise<browser.Tabs.Tab | null>((resolve) => {
      browser.tabs
        .query({
          currentWindow: true,
          active: true,
        })
        .then((tabs) => {
          if (tabs.length > 0) return resolve(tabs[0]);
          resolve(null);
        })
        .catch((error) => console.error(...this.saveError(error)));
    });
  }

  insertScript(tabId: number) {
    console.log(...this.saveLog("insert script"));

    browser.tabs
      .executeScript(tabId, {
        runAt: "document_end",
        file: "/src/content-scripts/listener.js",
      })
      .catch((error) => console.error(...this.saveError(error)));
  }

  private saveLog(...logs: any[]) {
    return logs;
  }

  private saveError(...errors: any[]) {
    return errors;
  }
}

export function defaultLanguage(): (
  | "SUB"
  | "EN"
  | "FR"
  | "ES"
  | "PT"
  | "DE"
  | "RU"
)[] {
  return [
    "SUB",
    possibleLangKeys.includes(<any>browser.i18n.getUILanguage().toUpperCase())
      ? <any>browser.i18n.getUILanguage().toUpperCase()
      : "EN",
  ];
}
