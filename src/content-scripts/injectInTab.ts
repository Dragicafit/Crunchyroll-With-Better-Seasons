import browser from "webextension-polyfill";
import { getPreferedAudioLanguages } from "../service/utilService";
import {
  eventsBackgroundReceive,
  eventsBackgroundSend,
  FROM_CONTENT_CWBS,
  FROM_SCRIPT_CWBS,
  languages,
  PREFERED_AUDIO_LANGUAGES,
} from "../web-accessible-resources/tabConst";

window.addEventListener("message", (event) => {
  if (
    event.source !== window ||
    event.origin !== window.location.origin ||
    event.data?.direction !== FROM_SCRIPT_CWBS
  ) {
    return;
  }

  switch (event.data.command) {
    case eventsBackgroundReceive.ASK_CONFIG:
      getPreferedAudioLanguages().then((preferedAudioLanguages: languages[]) =>
        sendPreferedAudioLanguages(preferedAudioLanguages)
      );
      break;
    default:
      break;
  }
});

const s = document.createElement("script");
s.src = browser.runtime.getURL("/src/web-accessible-resources/tab.bundle.js");
(document.head || document.documentElement).appendChild(s);

browser.storage.onChanged.addListener((changes) => {
  const preferedAudioLanguages = changes[PREFERED_AUDIO_LANGUAGES]?.newValue;
  sendPreferedAudioLanguages(preferedAudioLanguages);
});

function sendPreferedAudioLanguages(preferedAudioLanguages: languages[]) {
  window.postMessage(
    {
      direction: FROM_CONTENT_CWBS,
      command: eventsBackgroundSend.SEND_CONFIG,
      preferedAudioLanguages: preferedAudioLanguages,
    },
    window.location.origin
  );
}
