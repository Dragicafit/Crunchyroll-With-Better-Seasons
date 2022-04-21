[![Mozilla Add-ons](https://img.shields.io/amo/v/anime-watch-parties?label=Firefox&logo=Firefox)](https://addons.mozilla.org/firefox/addon/anime-watch-parties/)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/goinehmnmhnoaepodbngfgdgjeibgelh?label=Chrome&logo=Google%20Chrome)](https://chrome.google.com/webstore/detail/anime-watch-parties/goinehmnmhnoaepodbngfgdgjeibgelh)
[![Github](https://img.shields.io/github/license/Dragicafit/Anime-Watch-Parties?logo=Github)](https://github.com/Dragicafit/Anime-Watch-Parties)

# Crunchyroll With Better Seasons

Crunchyroll With Better Seasons is a cross-platform browser extension that changes the way seasons are display on Crunchyroll.

On the serie page, it groups all audio languages into a single seasons.

On the episode page, it adds a setting to change the audio langiage.

## Manual Install

- Firefox: Download the [xpi release](https://github.com/Dragicafit/Anime-Watch-Parties/releases/download/v0.4.5-beta/Anime-Watch-Parties.xpi), go to `about:debugging#/runtime/this-firefox`, click on `Load Temporay Add-on...` and select the xpi file.
- Chromium: Download the [crx release](https://github.com/Dragicafit/Anime-Watch-Parties/releases/download/v0.4.5-beta/Anime-Watch-Parties.crx), go to `chrome://extensions`, enable debugging, drag and drop the crx file.
- Chrome: Download the [crx release](https://github.com/Dragicafit/Anime-Watch-Parties/releases/download/v0.4.5-beta/Anime-Watch-Parties.crx), go to `chrome://extensions`, enable debugging, drag and drop the crx file.

## Developing or debugging the extension

The [master branch](https://github.com/Dragicafit/Anime-Watch-Parties) generate the firefox extension, the [chrome branch](https://github.com/Dragicafit/Anime-Watch-Parties/tree/chrome) generate the chrome and chromium extension.

This project uses [Node.js](https://nodejs.org/). You have to install it before continuing:

- Linux:
  - go to [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/) and follow instructions to download `Node.js v16.x`.
- Windows:
  - go to [https://nodejs.org/en/download/current/](https://nodejs.org/en/download/current/) to download the Windows Installer.

To install all the depedencies, use the [command `npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) :

```ShellSession
$ npm install
```

Compile the extension:

```ShellSession
$ npm run build-extension
```

Finaly load the extension in your browser:

- Firefox: Go to `about:debugging#/runtime/this-firefox`, click on `Load Temporay Add-on...` and select the `manifest.json` file in `built/Firefox/`.
- Chromium: Go to `chrome://extensions`, enable debugging, click on `Load Unpacked` and select the `built/Chrome/` directory.
- Chrome: Go to `chrome://extensions`, enable debugging, click on `Load Unpacked` and select the `built/Chrome/` directory.
