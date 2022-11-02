export default class TabOverrideHistoryPushState {
  start() {
    const _pushState = history.pushState;
    history.pushState = function () {
      arguments[0].previousURL = document.URL;
      return _pushState.apply(history, <any>arguments);
    };
  }
}
