import { TabContext } from "./tabContext";
import { TabEvents } from "./tabEvents";
import { TabOverrideXMLHttpRequest } from "./tabOverrideXMLHttpRequest";
import { TabSync } from "./tabSync";
import tabTransmission from "./tabTransmission";

let tabContext = new TabContext();

let tabSync = new TabSync();
let tabEvents = new TabEvents(tabContext, tabSync);
let tabOverrideXMLHttpRequest = new TabOverrideXMLHttpRequest(tabContext);
tabTransmission.start(tabEvents);
tabOverrideXMLHttpRequest.askInfo();

tabSync.askInfo();
