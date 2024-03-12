import {
  localeToDisplay,
  subtitleLocales,
  subtitleLocalesWithSUB,
  supported,
  supportedFallbacks,
} from "../web-accessible-resources/tabConst";

const regexSupported = /(JSON\.parse\(')(\["\w{2}(?:-\w+){0,3}",[-\w",]*?fr-FR[-\w",]*?\])('\))/;
const regexSupportedFallbacks2 =
  /(JSON\.parse\(')(\{"default":\["\w{2}(?:-\w+){0,3}"\],"\w{2}(?:-\w+){0,3}":\[[-\w",:\[\]]*?"\]\})('\))/;
const regexLocaleToDisplay2 =
  /(\d+:e=>\{"use strict";e\.exports=JSON\.parse\(')(\{"en-US":".*?"\})('\)\})/;

export default class SubtitleService {
  overridePageBundle(body: string) {
    const supported: supported = JSON.parse(
      body.match(regexSupported)![2].replaceAll("\\'", "'")
    );
    const supportedFallbacks2: supportedFallbacks = JSON.parse(
      body.match(regexSupportedFallbacks2)![2].replaceAll("\\'", "'")
    );
    const localeToDisplay2: localeToDisplay = JSON.parse(
      body.match(regexLocaleToDisplay2)![2].replaceAll("\\'", "'")
    );

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
        regexSupportedFallbacks2,
        `$1${JSON.stringify(supportedFallbacks2).replaceAll("'", "\\'")}$3`
      )
      .replaceAll(
        new RegExp(regexLocaleToDisplay2, "g"),
        `$1${JSON.stringify(localeToDisplay2).replaceAll("'", "\\'")}$3`
      );
  }
}
