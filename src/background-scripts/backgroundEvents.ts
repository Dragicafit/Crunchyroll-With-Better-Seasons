import { BackgroundScript } from "./backgroundScript";

export class BackgroundEvent {
  private backgroundScript: BackgroundScript;

  constructor(backgroundScript: BackgroundScript) {
    this.backgroundScript = backgroundScript;
  }

  askInfo() {
    console.log(...this.saveLog("ask info"));

    this.backgroundScript.backgroundSync.sendInfo();
  }

  private saveLog(...logs: any[]) {
    return this.backgroundScript.backgroundUtils.saveLog(...logs);
  }
}
