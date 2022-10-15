import {
  eventsBackgroundReceive,
  eventsBackgroundSend,
  FROM_CONTENT_CWBS,
  FROM_SCRIPT_CWBS,
} from "./tabConst";
import TabOverrideXMLHttpRequest from "./tabOverrideXMLHttpRequest";

const config = { preferedAudioLanguages: [] };
const tabOverrideXMLHttpRequest = new TabOverrideXMLHttpRequest(config);
tabOverrideXMLHttpRequest.start();

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
      config.preferedAudioLanguages = event.data.preferedAudioLanguages;
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
