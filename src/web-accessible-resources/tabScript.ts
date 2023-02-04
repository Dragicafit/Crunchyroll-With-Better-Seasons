import TabOverrideHistoryPushState from "./tabOverrideHistoryPushState";
import TabOverrideXMLHttpRequest from "./tabOverrideXMLHttpRequest";

const tabOverrideXMLHttpRequest = new TabOverrideXMLHttpRequest();
tabOverrideXMLHttpRequest.start();
const tabOverrideHistoryPushState = new TabOverrideHistoryPushState();
tabOverrideHistoryPushState.start();
