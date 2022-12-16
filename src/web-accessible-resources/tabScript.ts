import {
  Config,
  eventsBackgroundReceive,
  eventsBackgroundSend,
  FROM_CONTENT_CWBS,
  FROM_SCRIPT_CWBS,
} from "./tabConst";
import TabOverrideHistoryPushState from "./tabOverrideHistoryPushState";
// import TabOverrideXMLHttpRequest from "./tabOverrideXMLHttpRequest";

const config: Config = { preferedAudioLanguages: [] };
// const tabOverrideXMLHttpRequest = new TabOverrideXMLHttpRequest(config);
// tabOverrideXMLHttpRequest.start();
const tabOverrideHistoryPushState = new TabOverrideHistoryPushState();
tabOverrideHistoryPushState.start();

window.addEventListener("message", (event) => {
  if (
    event.source !== window ||
    event.origin !== window.location.origin ||
    event.data?.direction !== FROM_CONTENT_CWBS
  ) {
    return;
  }

  switch (event.data.command) {
    case eventsBackgroundSend.SEND_CONFIG:
      config.preferedAudioLanguages = Object.freeze(
        event.data.preferedAudioLanguages
      );
      break;
    default:
      break;
  }
});

window.postMessage(
  {
    direction: FROM_SCRIPT_CWBS,
    command: eventsBackgroundReceive.ASK_CONFIG,
  },
  window.location.origin
);

setInterval(() => {
  if (document.getElementById("CWBS-message")) {
    return;
  }
  const p = document.createElement("p");
  p.innerHTML = `Extension Crunchyroll With Better Seasons: Crunchyroll is in the process of changing the way they manage the seasons, I've disabled the extension for now waiting for stability in their work.`;
  p.style.cssText = "color: red";
  p.id = "CWBS-message";
  const season = document.getElementsByClassName(
    "erc-season-with-navigation"
  )[0];
  season.parentElement?.insertBefore(p, season);
}, 1000);
