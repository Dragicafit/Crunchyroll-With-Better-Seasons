import browser from "webextension-polyfill";
import { possibleLangKeys } from "./backgroundConst";

export class BackgroundUtils {
  private logs: string[];

  constructor() {
    this.logs = [];
  }

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

  saveLog(...logs: any[]) {
    this.logs.push(
      "log: " +
        logs.map((log) => {
          return typeof log?.simplify === "function"
            ? JSON.stringify(log.simplify())
            : JSON.stringify(log);
        })
    );
    return logs;
  }

  saveError(...errors: any[]) {
    this.logs.push(
      "error: " +
        errors.map((error) => {
          return typeof error?.simplify === "function"
            ? JSON.stringify(error.simplify())
            : JSON.stringify(error);
        })
    );
    return errors;
  }

  getLogs() {
    return this.logs;
  }
}

export function defaultLanguages(): (
  | "SUB"
  | "EN"
  | "FR"
  | "ES"
  | "PT"
  | "DE"
  | "RU"
)[] {
  const userLang = <any>(
    browser.i18n.getUILanguage().substring(0, 2).toUpperCase()
  );
  return ["SUB", possibleLangKeys.includes(userLang) ? userLang : "EN"];
}
