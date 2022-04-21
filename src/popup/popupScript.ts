import Sortable from "sortablejs";
import browser from "webextension-polyfill";
import {
  eventsBackgroundReceive,
  possibleLang,
  possibleLangKeys,
  lang,
} from "../background-scripts/backgroundConst";
import { defaultLanguage } from "../background-scripts/backgroundUtils";
import "./index.scss";

browser.storage.local.get("name").then((item) => {
  let name: lang[] = item["name"];
  if (name == null) {
    name = defaultLanguage();
  }

  var el = document.getElementById("items")!;
  var e2 = document.getElementById("items2")!;

  for (const i of name) {
    el.innerHTML += `<div class="Box-body my-handle" data-id="${i}">${possibleLang[i]}</div>`;
  }

  for (const i of possibleLangKeys.filter((n: any) => !name.includes(n))) {
    e2.innerHTML += `<div class="Box-body my-handle" data-id="${i}">${possibleLang[i]}</div>`;
  }

  const list = new Sortable(el!, {
    group: "shared",
    dragoverBubble: true,

    onSort: function () {
      browser.storage.local.set({ name: list.toArray() });
    },
  });

  new Sortable(e2!, {
    group: "shared",
    dragoverBubble: true,
  });

  console.log("ask info");
  browser.runtime
    .sendMessage({
      command: eventsBackgroundReceive.ASK_INFO,
    })
    .catch(console.error);
});
