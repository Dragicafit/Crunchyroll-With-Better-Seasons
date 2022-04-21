import browser from "webextension-polyfill";
import { eventsBackgroundSend, lang } from "./backgroundConst";
import { defaultLanguage } from "./backgroundUtils";

export class BackgroundSync {
  sendInfo() {
    console.log(...this.saveLog("send info"));

    browser.storage.local.get("name").then((item) => {
      let name: lang[] = item["name"];
      if (name == null) {
        name = defaultLanguage();
      }

      browser.runtime
        .sendMessage({
          command: eventsBackgroundSend.SEND_INFO,
          clientContext: name,
        })
        .catch(() => {});

      browser.tabs.query({}).then((tabs) => {
        tabs.forEach((tab) => {
          if (tab.id == null) return;
          browser.tabs
            .sendMessage(tab.id, {
              command: eventsBackgroundSend.SEND_INFO,
              clientContext: name,
            })
            .catch(() => {});
        });
      });
    });
  }

  private saveLog(...logs: any[]) {
    return logs;
  }
}
