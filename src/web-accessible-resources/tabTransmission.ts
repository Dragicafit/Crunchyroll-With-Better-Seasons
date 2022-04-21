import { eventsBackgroundSend } from "../background-scripts/backgroundConst";
import { TabEvents } from "./tabEvents";

export default {
  start: function (tabEvent: TabEvents) {
    window.addEventListener("message", (event) => {
      if (
        event.source !== window ||
        event.origin !== window.location.origin ||
        event.data?.direction !== "from-content-CDF"
      )
        return;
      switch (event.data.command) {
        case eventsBackgroundSend.SEND_INFO:
          tabEvent.sendInfo(event.data.preferedLanguages);
          break;
        default:
          break;
      }
    });
  },
};
