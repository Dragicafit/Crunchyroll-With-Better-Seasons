"use strict";

let settings;

window.addEventListener("message", (event) => {
  if (
    event.source !== window.parent ||
    event.origin !== "https://beta.crunchyroll.com" ||
    event.data?.direction !== "from-script-AWP"
  )
    return;
  switch (event.data.command) {
    case "sendInfo":
      settings = createSettings(
        event.data.languages,
        event.data.currentLanguage
      );
  }
});

function render({ tagName, children, callback, ...properties }) {
  const element = document.createElement(tagName);
  Object.entries(properties).forEach(
    ([property, value]) => (element[property] = value)
  );
  if (Array.isArray(children))
    children.forEach((child) =>
      element.appendChild(child instanceof HTMLElement ? child : render(child))
    );
  if (typeof callback === "function") callback(element);
  return element;
}

function setPlaybackRate(infos) {
  window.parent.location = infos.url;
}

function createSettings(languages, currentLanguage) {
  console.log("create settings", languages, currentLanguage);
  return [
    {
      title: "Audio",
      type: "playbackRate",
      values: languages,
      callback: setPlaybackRate,
    },
  ].flatMap(({ type, title, values, callback }) => {
    const displayValue = render({
      tagName: "span",
      className: "font",
    });
    const elementByValues = {};
    const elements = [
      render({
        tagName: "div",
        id: `ic_${type}_menu`,
        classList: ["ic_menu"],
        children: [
          {
            tagName: "div",
            className: "font",
            innerHTML: title,
          },
          {
            tagName: "div",
            className: "right",
            children: [
              {
                tagName: "div",
                className: "right_text",
                children: [displayValue],
              },
              {
                tagName: "div",
                className: "next",
              },
            ],
          },
        ],
        callback: (element) => {
          element.addEventListener("click", () => {
            window.location.hash = "";
            document
              .getElementById("velocity-settings-menu")
              .setAttribute("ic_options", "hide");
            window.location.hash = type;
          });
        },
      }),
      render({
        tagName: "div",
        id: type,
        className: "ic_settings",
        children: [
          {
            tagName: "div",
            className: "ic_back",
            innerHTML: `<div class='back'></div><div class='font'>${title}</div>`,
            callback: (element) => {
              element.addEventListener("click", () =>
                document
                  .getElementById("velocity-settings-menu")
                  .removeAttribute("ic_options")
              );
            },
          },
          {
            tagName: "div",
            className: "ic_options",
            children: values.map((option) => {
              const element = render({
                tagName: "div",
                className: "ic_option",
                innerHTML: `
                <svg viewBox='0 0 20 20' style='height: 20px; width: 20px;'>
                  <circle class='bg' cx='10' cy='10' r='9' style='fill: rgb(25, 46, 56); opacity: 1;'></circle>
                  <circle class='dot' cx='10' cy='10' r='4' style='fill: rgb(68, 195, 171);'></circle>
                  <path class='outer_circle' d='M10,2a8,8,0,1,1-8,8,8.009,8.009,0,0,1,8-8m0-2A10,10,0,1,0,20,10,10,10,0,0,0,10,0Z' style='fill: rgb(160, 160, 160);'></path>
                </svg>`,
                children: (() => {
                  const children = [
                    {
                      tagName: "span",
                      className: "text font",
                      innerHTML: `${option.name}`,
                    },
                  ];
                  return children;
                })(),
                callback: (element) => {
                  element.addEventListener("click", () => {
                    callback(option);
                  });
                },
              });
              elementByValues[option.id] = {
                element,
                option,
              };
              return element;
            }, {}),
          },
        ],
      }),
    ];
    changeSelected(displayValue, elementByValues, currentLanguage);

    return elements;
  });
}

function changeSelected(displayValue, elementByValues, value) {
  if (!value) return;
  const { element, option } = elementByValues[value];
  displayValue.innerText = option.name;
  const selected = document.querySelector(".ic_option[value=true]");
  if (selected) selected.setAttribute("value", "false");
  element.setAttribute("value", "true");
}

function insertSettings(velocitySettingsMenu, elements) {
  elements.forEach((element) =>
    velocitySettingsMenu.insertBefore(
      element,
      velocitySettingsMenu.firstElementChild
    )
  );
  new MutationObserver(() => {
    velocitySettingsMenu.setAttribute(
      "ic_options",
      velocitySettingsMenu.querySelector(
        '[data-testid="vilos-settings_back_button"]'
      )
        ? "submenu"
        : ""
    );
  }).observe(velocitySettingsMenu, {
    childList: true,
  });
}

new MutationObserver((_, observer) => {
  const vilos = document.getElementById("vilos");
  if (!vilos) return;
  observer.disconnect();
  new MutationObserver((_, observer) => {
    observer.disconnect();
    new MutationObserver((mutations) => {
      const velocityControlsPackage = mutations.reduce(
        (f, { addedNodes }) =>
          f ||
          [...addedNodes].find(({ id }) => id === "velocity-controls-package"),
        false
      );
      if (!velocityControlsPackage) return;
      new MutationObserver((mutations) => {
        const [addedNode] = mutations.flatMap(({ addedNodes }) => [
          ...addedNodes,
        ]);
        if (!addedNode) return;
        const velocitySettingsMenu = addedNode.querySelector(
          "#velocity-settings-menu"
        );
        if (velocitySettingsMenu && settings) {
          insertSettings(velocitySettingsMenu, settings);
        }
      }).observe(velocityControlsPackage, {
        childList: true,
      });
    }).observe(document.getElementById("vilosRoot"), {
      childList: true,
    });
  }).observe(vilos, {
    childList: true,
  });
}).observe(document.documentElement, {
  childList: true,
});
