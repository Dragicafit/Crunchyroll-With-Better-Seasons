import { eventsBackgroundReceive } from "../background-scripts/backgroundConst";

export class TabSync {
  askInfo(): void {
    console.log("ask info");

    window.postMessage(
      {
        direction: "from-script-CDF",
        command: eventsBackgroundReceive.ASK_INFO,
      },
      window.location.origin
    );
  }
}
