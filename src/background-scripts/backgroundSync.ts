import browser from "webextension-polyfill";
import {
  eventsBackgroundSend,
  languages,
  preferedLangKey,
} from "./backgroundConst";
import { BackgroundScript } from "./backgroundScript";
import { defaultLanguages } from "./backgroundUtils";

export class BackgroundSync {
  private backgroundScript: BackgroundScript;

  constructor(backgroundScript: BackgroundScript) {
    this.backgroundScript = backgroundScript;
  }

  sendInfo() {
    browser.storage.local.get(preferedLangKey).then((item) => {
      console.log(...this.saveLog("send info", item));

      let preferedLanguages: languages[] = item[preferedLangKey];
      if (preferedLanguages == null) {
        preferedLanguages = defaultLanguages();
      }

      browser.tabs.query({}).then((tabs) => {
        tabs.forEach((tab) => {
          if (tab.id == null) return;
          browser.tabs
            .sendMessage(tab.id, {
              command: eventsBackgroundSend.SEND_INFO,
              preferedLanguages: preferedLanguages,
            })
            .catch(() => {});
        });
      });
    });
  }

  private saveLog(...logs: any[]) {
    return this.backgroundScript.backgroundUtils.saveLog(...logs);
  }
}
