import {
  localeToDisplay,
  mapping,
  subtitleLocales,
  subtitleLocalesWithSUB,
  supported,
  supportedFallbacks,
} from "../web-accessible-resources/tabConst";

const regexSupported = /(JSON\.parse\(')(\[".*?"\])('\))/;
const regexSupportedFallbacks = /([^\w]\w\w=JSON\.parse\(')(\{".*?"\]\})('\))/;
const regexSupportedFallbacks2 =
  /(\d+:e=>\{"use strict";e\.exports=JSON\.parse\(')(\{"default":\[.*?"\]\})('\)\})/;
const regexMapping = /(JSON\.parse\(')(\{"Wp":\{".*?"\}\}\})('\))/;
const regexLocaleToDisplay =
  /([^\w]\w\w=JSON\.parse\('.*?[^\w]\w\w=JSON\.parse\(')(\{".*?,"":""\})('\))/;
const regexLocaleToDisplay2 =
  /(\d+:e=>\{"use strict";e\.exports=JSON\.parse\(')(\{"en-US":".*?"\})('\)\})/;

export default class SubtitleService {
  overridePageBundle(body: string) {
    const supported: supported = JSON.parse(
      body.match(regexSupported)![2].replaceAll("\\'", "'")
    );
    const supportedFallbacks: supportedFallbacks = JSON.parse(
      body.match(regexSupportedFallbacks)![2].replaceAll("\\'", "'")
    );
    const supportedFallbacks2: supportedFallbacks = JSON.parse(
      body.match(regexSupportedFallbacks2)![2].replaceAll("\\'", "'")
    );
    const mapping: mapping = JSON.parse(
      body.match(regexMapping)![2].replaceAll("\\'", "'")
    );
    const localeToDisplay: localeToDisplay = JSON.parse(
      body.match(regexLocaleToDisplay)![2].replaceAll("\\'", "'")
    );
    const localeToDisplay2: localeToDisplay = JSON.parse(
      body.match(regexLocaleToDisplay2)![2].replaceAll("\\'", "'")
    );

    for (const subtitleLocale of [
      ...(<subtitleLocales[]>Object.keys(supportedFallbacks)),
    ]) {
      const subtitleLocaleWithSUB: subtitleLocalesWithSUB = <
        subtitleLocalesWithSUB
      >(subtitleLocale + "SUB");
      const display: string =
        localeToDisplay[subtitleLocale.toLowerCase()] + " (Sub)";
      supported.push(<any>subtitleLocaleWithSUB);
      supportedFallbacks[subtitleLocaleWithSUB] = [subtitleLocale, "en-US"];
      mapping.Wp[subtitleLocaleWithSUB] = {
        to: <any>subtitleLocaleWithSUB,
        desc: display,
      };
      localeToDisplay[subtitleLocaleWithSUB.toLowerCase()] = display;
    }

    for (const subtitleLocale of [
      ...(<subtitleLocales[]>Object.keys(localeToDisplay2)),
    ]) {
      const subtitleLocaleWithSUB: subtitleLocalesWithSUB = <
        subtitleLocalesWithSUB
      >(subtitleLocale + "SUB");
      const display: string = localeToDisplay2[subtitleLocale] + " (Sub)";
      supportedFallbacks2[subtitleLocaleWithSUB] = [subtitleLocale, "en-US"];
      localeToDisplay2[subtitleLocaleWithSUB] = display;
    }

    return body
      .replace(
        regexSupported,
        `$1${JSON.stringify(supported).replaceAll("'", "\\'")}$3`
      )
      .replace(
        regexSupportedFallbacks,
        `$1${JSON.stringify(supportedFallbacks).replaceAll("'", "\\'")}$3`
      )
      .replace(
        regexSupportedFallbacks2,
        `$1${JSON.stringify(supportedFallbacks2).replaceAll("'", "\\'")}$3`
      )
      .replace(
        regexMapping,
        `$1${JSON.stringify(mapping).replaceAll("'", "\\'")}$3`
      )
      .replace(
        regexLocaleToDisplay,
        `$1${JSON.stringify(localeToDisplay).replaceAll("'", "\\'")}$3`
      )
      .replaceAll(
        new RegExp(regexLocaleToDisplay2, "g"),
        `$1${JSON.stringify(localeToDisplay2).replaceAll("'", "\\'")}$3`
      );
  }
}
