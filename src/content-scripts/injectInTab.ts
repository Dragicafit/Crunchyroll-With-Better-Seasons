import browser from "webextension-polyfill";

const s = document.createElement("script");
s.src = browser.runtime.getURL("/src/web-accessible-resources/tab.bundle.js");
(document.head || document.documentElement).appendChild(s);
