import browser from "webextension-polyfill";
import {
  localeToDisplay,
  startPageBundle,
  startPagePlayer,
  subtitleLocalesWithSUB,
  supportedAndMappingLocales,
} from "../web-accessible-resources/tabConst";

browser.webRequest.onBeforeRequest.addListener(
  (requestDetails) => {
    if (
      !requestDetails.documentUrl?.startsWith(startPagePlayer) ||
      !requestDetails.originUrl?.startsWith(startPagePlayer)
    ) {
      return;
    }
    return fetch(requestDetails.url)
      .then((res: Response) => res.text())
      .then((body: string) => {
        const supportedAndMappingLocales: supportedAndMappingLocales =
          JSON.parse(
            body
              .match(/JSON\.parse\('({"supported".*?"}}})'\)},/)![1]
              .replaceAll("\\'", "'")
          );
        const localeToDisplay: localeToDisplay = JSON.parse(
          body
            .match(/JSON.parse\('({"af-na".*?})'\)}/)![1]
            .replaceAll("\\'", "'")
        );

        for (const subtitleLocale of [
          ...supportedAndMappingLocales.supported,
        ]) {
          const subtitleLocaleWithSUB: subtitleLocalesWithSUB = <
            subtitleLocalesWithSUB
          >(subtitleLocale + "SUB");
          const display: string =
            localeToDisplay[subtitleLocale.toLowerCase()] + " (Sub)";
          supportedAndMappingLocales.supported.push(<any>subtitleLocaleWithSUB);
          supportedAndMappingLocales.supported_fallbacks[
            subtitleLocaleWithSUB
          ] = [subtitleLocale, "en-US"];
          supportedAndMappingLocales.mapping[subtitleLocaleWithSUB] = {
            to: <any>subtitleLocaleWithSUB,
            desc: display,
          };
          localeToDisplay[subtitleLocaleWithSUB.toLowerCase()] = display;
        }

        body = body
          .replace(
            /(JSON\.parse\('){"supported".*?"}}}('\)},)/,
            `$1${JSON.stringify(supportedAndMappingLocales).replaceAll(
              "'",
              "\\'"
            )}$2`
          )
          .replace(
            /(JSON.parse\('){"af-na".*?}('\)})/,
            `$1${JSON.stringify(localeToDisplay).replaceAll("'", "\\'")}$2`
          );

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
