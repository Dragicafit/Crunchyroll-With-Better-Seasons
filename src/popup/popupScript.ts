import Sortable from "sortablejs";
import browser from "webextension-polyfill";
import {
  languages,
  possibleLang,
  possibleLangKeys,
  preferedLangKey,
} from "../background-scripts/backgroundConst";
import { defaultLanguages } from "../background-scripts/backgroundUtils";
import "./index.scss";

browser.storage.local.get(preferedLangKey).then((item) => {
  let preferedLanguages: languages[] = item[preferedLangKey];
  if (preferedLanguages == null) {
    preferedLanguages = defaultLanguages();
  }

  var el = document.getElementById("show")!;
  var e2 = document.getElementById("hide")!;

  for (const lang of preferedLanguages) {
    el.innerHTML += `<div class="Box-body grab" data-id="${lang}">${possibleLang[lang]}</div>`;
  }

  for (const lang of possibleLangKeys.filter(
    (n: any) => !preferedLanguages.includes(n)
  )) {
    e2.innerHTML += `<div class="Box-body grab" data-id="${lang}">${possibleLang[lang]}</div>`;
  }

  const list = new Sortable(el!, {
    group: "shared",
    dragoverBubble: true,

    onSort: function () {
      browser.storage.local.set({ [preferedLangKey]: list.toArray() });
    },
  });

  new Sortable(e2!, {
    group: "shared",
    dragoverBubble: true,
  });
});
