import {
  localeToDisplay,
  subtitleLocalesWithSUB,
  supportedAndMappingLocales,
} from "../web-accessible-resources/tabConst";

export default class SubtitleService {
  overridePageBundle(body: string) {
    const supportedAndMappingLocales: supportedAndMappingLocales = JSON.parse(
      body
        .match(/JSON\.parse\('({"supported".*?"}}})'\)},/)![1]
        .replaceAll("\\'", "'")
    );
    const localeToDisplay: localeToDisplay = JSON.parse(
      body.match(/JSON.parse\('({"af-na".*?})'\)}/)![1].replaceAll("\\'", "'")
    );

    for (const subtitleLocale of [...supportedAndMappingLocales.supported]) {
      const subtitleLocaleWithSUB: subtitleLocalesWithSUB = <
        subtitleLocalesWithSUB
      >(subtitleLocale + "SUB");
      const display: string =
        localeToDisplay[subtitleLocale.toLowerCase()] + " (Sub)";
      supportedAndMappingLocales.supported.push(<any>subtitleLocaleWithSUB);
      supportedAndMappingLocales.supported_fallbacks[subtitleLocaleWithSUB] = [
        subtitleLocale,
        "en-US",
      ];
      supportedAndMappingLocales.mapping[subtitleLocaleWithSUB] = {
        to: <any>subtitleLocaleWithSUB,
        desc: display,
      };
      localeToDisplay[subtitleLocaleWithSUB.toLowerCase()] = display;
    }

    return body
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
  }
}
