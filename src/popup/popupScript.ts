import Sortable from "sortablejs";
import {
  getPreferedAudioLanguages,
  setPreferedAudioLanguages,
} from "../service/utilService";
import {
  languages,
  possibleLang,
  possibleLangKeys,
} from "../web-accessible-resources/tabConst";
import "./index.scss";

getPreferedAudioLanguages().then((preferedAudioLanguages: languages[]) => {
  const otherPossibleLangKeys = possibleLangKeys.filter(
    (possibleLangKey: languages) =>
      !preferedAudioLanguages.includes(possibleLangKey)
  );
  preferedAudioLanguages.push(...otherPossibleLangKeys);

  var priority: HTMLElement = document.getElementById("priority")!;
  for (const lang of preferedAudioLanguages) {
    priority.innerHTML += `<div class="Box-body grab" data-id="${lang}">⠿ ${possibleLang.get(
      lang
    )}</div>`;
  }

  const list = new Sortable(priority!, {
    group: "shared",
    dragoverBubble: true,

    onSort: () => {
      const preferedAudioLanguages: languages[] = <languages[]>(
        list
          .toArray()
          .filter((preferedAudioLanguage: string) =>
            possibleLangKeys.includes(<any>preferedAudioLanguage)
          )
      );
      setPreferedAudioLanguages(preferedAudioLanguages);
    },
  });
});
