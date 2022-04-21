import browser from "webextension-polyfill";
import { eventsBackgroundReceive, preferedLangKey } from "./backgroundConst";
import { BackgroundScript } from "./backgroundScript";

export default {
  start: function (backgroundScript: BackgroundScript) {
    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      backgroundScript.backgroundUtils.insertScript(tabId);
    });

    browser.runtime.onMessage.addListener((message, sender) => {
      if (sender.tab == null) {
        backgroundScript.backgroundUtils.getActiveTab().then(func);
        return;
      }
      func(sender.tab);

      function func(tab: browser.Tabs.Tab | null) {
        if (tab?.id == null) return;

        switch (message?.command) {
          case eventsBackgroundReceive.ASK_INFO:
            backgroundScript.backgroundEvent.askInfo();
            break;
          default:
            break;
        }
      }
    });

    browser.storage.onChanged.addListener((changes, areaName) => {
      if (areaName != "local") {
        return;
      }
      if (
        changes[preferedLangKey] != null &&
        changes[preferedLangKey].newValue != changes[preferedLangKey].oldValue
      ) {
        backgroundScript.backgroundSync.sendInfo();
      }
    });
  },
};
