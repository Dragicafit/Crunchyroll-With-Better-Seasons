/*
MIT License

Copyright (c) 2019-2022 Thomas Tavernier
https://github.com/ThomasTavernier/Improve-Crunchyroll/blob/2d2a3f6696a2045ae399e5bccc886e0fe6decc1b/LICENSE
https://github.com/ThomasTavernier/Improve-Crunchyroll/blob/2d2a3f6696a2045ae399e5bccc886e0fe6decc1b/content/js/crunchyrollVideoPlayerV2.js

Copyright (c) 2022 Damien HERBERT
*/

"use strict";

import {
  eventsBackgroundSend,
  FROM_SCRIPT_CWBS,
  languages,
} from "../web-accessible-resources/tabConst";

let settings: HTMLElement[];

window.addEventListener("message", (event) => {
  if (
    event.source !== window.parent ||
    event.origin !== "https://beta.crunchyroll.com" ||
    event.data?.direction !== FROM_SCRIPT_CWBS
  )
    return;
  switch (event.data.command) {
    case eventsBackgroundSend.SEND_INFO:
      console.log("receive info", {
        preferedAudioLanguage: event.data.preferedAudioLanguage,
        audioLanguages: event.data.audioLanguages,
      });
      settings = createSettings(
        [
          {
            title: "Audio",
            type: "audioLanguage",
            values: <
              {
                id: languages;
                name: string | undefined;
                url: string;
              }[]
            >event.data.audioLanguages,
            callback: changeAudioLanguage,
          },
        ],
        event.data.preferedAudioLanguage
      );
  }
});

function render({
  tagName,
  children,
  callback,
  ...properties
}: {
  tagName: string;
  children?: any;
  callback?: (element: EventTarget) => void;
  [properties: string]: any;
}) {
  const element: HTMLElement = document.createElement(tagName);
  Object.entries(properties).forEach(
    ([property, value]) => ((<any>element)[property] = value)
  );
  if (Array.isArray(children))
    children.forEach((child) =>
      element.appendChild(child instanceof HTMLElement ? child : render(child))
    );
  if (typeof callback === "function") callback(element);
  return element;
}

function changeAudioLanguage(infos: {
  id: languages;
  name: string | undefined;
  url: string;
}) {
  window.parent.location = infos.url;
}

function createSettings<U extends { id: string; name?: string }>(
  settings: [
    {
      title: string;
      type: string;
      values: U[];
      callback: (infos: U) => void;
    }
  ],
  currentValue: string
) {
  console.log("create settings", settings, currentValue);
  return settings.flatMap(({ type, title, values, callback }) => {
    const displayValue = render({
      tagName: "span",
      className: "font",
    });
    const elementByValues: {
      [x: string]: { element: HTMLElement; option: U };
    } = {};
    const elements: HTMLElement[] = [
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
        callback: (element: EventTarget) => {
          element.addEventListener("click", () => {
            window.location.hash = "";
            document.body.setAttribute("ic_options", "hide");
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
            callback: (element: EventTarget) => {
              element.addEventListener("click", () =>
                document.body.removeAttribute("ic_options")
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
                  <circle class='bg' cx='10' cy='10' r='9'></circle>
                  <circle class='dot' cx='10' cy='10' r='4'></circle>
                  <path class='outer_circle' d='M10,2a8,8,0,1,1-8,8,8.009,8.009,0,0,1,8-8m0-2A10,10,0,1,0,20,10,10,10,0,0,0,10,0Z'></path>
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
                callback: (element: EventTarget) => {
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
    changeSelected(displayValue, elementByValues, currentValue);

    return elements;
  });
}

function changeSelected<U extends { id: string; name?: string }>(
  displayValue: HTMLElement,
  elementByValues: {
    [x: string]: {
      element: HTMLElement;
      option: U;
    };
  },
  currentValue: string
) {
  if (!currentValue) return;
  const { element, option } = elementByValues[currentValue];
  displayValue.innerText = option.name ?? "";
  const selected = document.querySelector(".ic_option[value=true]");
  if (selected) selected.setAttribute("value", "false");
  element.setAttribute("value", "true");
}

function insertSettings(
  velocitySettingsMenu: Element,
  elements: HTMLElement[]
) {
  for (const element of elements) {
    velocitySettingsMenu.insertBefore(
      element,
      velocitySettingsMenu.querySelector(
        '[data-testid="vilos-settings_texttrack_submenu"]'
      )
    );
  }
  if (
    velocitySettingsMenu.querySelector(
      '[data-testid="vilos-settings_back_button"]'
    )
  ) {
    document.body.setAttribute("ic_options", "submenu");
  } else if (document.body.getAttribute("ic_options") === "submenu") {
    document.body.removeAttribute("ic_options");
  }
}

function insertSettingsWithObserver(
  velocitySettingsMenu: Element,
  elements: HTMLElement[]
) {
  insertSettings(velocitySettingsMenu, elements);
  new MutationObserver((mutations, observer) => {
    if (!velocitySettingsMenu.isConnected) {
      return observer.disconnect();
    }
    if (
      mutations.find((mutation) =>
        [...mutation.addedNodes].find((addedNode: Node) =>
          elements.includes(<any>addedNode)
        )
      )
    ) {
      return;
    }
    insertSettings(velocitySettingsMenu, elements);
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
      const velocityControlsPackage: HTMLElement | false = <
        HTMLElement | false
      >(<unknown>(
        mutations.reduce(
          (f: MutationRecord | false, { addedNodes }: { addedNodes: any }) =>
            f ||
            [...addedNodes].find(
              ({ id }: { id?: string }) => id === "velocity-controls-package"
            ),
          false
        )
      ));
      if (!velocityControlsPackage) return;
      new MutationObserver((mutations) => {
        const addedNode = mutations.flatMap((mutation: MutationRecord) => [
          ...mutation.addedNodes,
        ])[0];
        if (!addedNode) return;
        const velocitySettingsMenu = (<HTMLElement>addedNode).querySelector(
          "#velocity-settings-menu"
        );
        if (velocitySettingsMenu && settings) {
          insertSettingsWithObserver(velocitySettingsMenu, settings);
        }
      }).observe(velocityControlsPackage, {
        childList: true,
      });
    }).observe(document.getElementById("vilosRoot")!, {
      childList: true,
    });
  }).observe(vilos, {
    childList: true,
  });
}).observe(document.documentElement, {
  childList: true,
});
