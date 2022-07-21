import {
  localeToDisplay,
  mapping,
  subtitleLocales,
  subtitleLocalesWithSUB,
  supported,
  supportedFallbacks,
} from "../web-accessible-resources/tabConst";

const regexSupported = /(JSON\.parse\(')(\[".*?"\])('\))/;
const regexSupportedFallbacks = /(Fs=JSON\.parse\(')(\{".*?"\]\})('\))/;
const regexMapping = /(JSON\.parse\(')(\{"Wp":\{".*?"\}\}\})('\))/;
const regexLocaleToDisplay = /(Vs=JSON\.parse\(')(\{".*?,"":""\})('\))/;

export default class SubtitleService {
  overridePageBundle(body: string) {
    const supported: supported = JSON.parse(
      body.match(regexSupported)![2].replaceAll("\\'", "'")
    );
    const supportedFallbacks: supportedFallbacks = JSON.parse(
      body.match(regexSupportedFallbacks)![2].replaceAll("\\'", "'")
    );
    const mapping: mapping = JSON.parse(
      body.match(regexMapping)![2].replaceAll("\\'", "'")
    );
    const localeToDisplay: localeToDisplay = JSON.parse(
      body.match(regexLocaleToDisplay)![2].replaceAll("\\'", "'")
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
        regexMapping,
        `$1${JSON.stringify(mapping).replaceAll("'", "\\'")}$3`
      )
      .replace(
        regexLocaleToDisplay,
        `$1${JSON.stringify(localeToDisplay).replaceAll("'", "\\'")}$3`
      );
  }
}
