(function () {
  if (window.hasRun) {
    console.log("already running");
    return;
  }
  window.hasRun = true;

  browser.runtime.onMessage.addListener((message) => {
    message.direction = "from-content-CDF";
    window.postMessage(message, window.location.origin);
  });

  window.addEventListener("message", (event) => {
    if (
      event.source !== window ||
      event.origin !== window.location.origin ||
      event.data?.direction !== "from-script-CDF"
    )
      return;
    browser.runtime.sendMessage(event.data).catch(console.error);
  });

  let s = document.createElement("script");
  s.src = browser.runtime.getURL("/src/web-accessible-resources/tab.bundle.js");
  (document.head || document.documentElement).appendChild(s);
})();
