let s = document.createElement("script");
s.src = chrome.runtime.getURL("/src/web-accessible-resources/tab.bundle.js");
(document.head || document.documentElement).appendChild(s);
