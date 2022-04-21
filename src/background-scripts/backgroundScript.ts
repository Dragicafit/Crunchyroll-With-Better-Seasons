import browser from "webextension-polyfill";
import { BackgroundEvent } from "./backgroundEvents";
import { BackgroundSync } from "./backgroundSync";
import clientTransmission from "./backgroundTransmission";
import { BackgroundUtils } from "./backgroundUtils";

export class BackgroundScript {
  backgroundUtils: BackgroundUtils;
  backgroundSync: BackgroundSync;
  backgroundEvent: BackgroundEvent;

  public constructor() {
    this.backgroundUtils = new BackgroundUtils();
    this.backgroundSync = new BackgroundSync();
    this.backgroundEvent = new BackgroundEvent(this);

    clientTransmission.start(this);

    browser.tabs
      .query({})
      .then((tabs) => {
        tabs.forEach((tab) => {
          if (tab.id == null) return;
          this.backgroundUtils.insertScript(tab.id);
        });
      })
      .catch((error) => console.error(...this.saveError(error)));
  }

  private saveError(...errors: any[]) {
    return errors;
  }
}

new BackgroundScript();
