import { lang } from "../background-scripts/backgroundConst";
import { TabContext } from "./tabContext";
import { TabSync } from "./tabSync";

export class TabEvents {
  tabContext: TabContext;
  tabSync: TabSync;

  constructor(tabContext: TabContext, tabSync: TabSync) {
    this.tabContext = tabContext;
    this.tabSync = tabSync;
  }

  sendInfo(item: lang[]): void {
    console.log("send info", item);

    this.tabContext.item = item;
  }
}
