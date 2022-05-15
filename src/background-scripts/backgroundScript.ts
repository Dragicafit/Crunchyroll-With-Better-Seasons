import browser from "webextension-polyfill";
import SubtitleService from "../service/subtitleService";
import {
  startPageBundle,
  startPagePlayer,
} from "../web-accessible-resources/tabConst";

const subtitleService = new SubtitleService();

browser.webRequest.onBeforeRequest.addListener(
  (requestDetails) => {
    if (
      !requestDetails.documentUrl?.startsWith(startPagePlayer) ||
      !requestDetails.originUrl?.startsWith(startPagePlayer)
    ) {
      return;
    }
    return fetch(startPageBundle)
      .then((res: Response) => res.text())
      .then((body: string) => {
        body = subtitleService.overridePageBundle(body);
        const dataURL: string =
          "data:text/plain;charset=utf-8;base64," +
          btoa(
            encodeURIComponent(body).replace(
              /%([0-9A-F]{2})/g,
              function (_, b) {
                return String.fromCharCode(<any>("0x" + b));
              }
            )
          );
        console.log(dataURL);
        return {
          redirectUrl: dataURL,
        };
      });
  },
  { urls: [startPageBundle] },
  ["blocking"]
);
