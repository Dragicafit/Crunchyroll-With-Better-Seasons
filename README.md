[![Mozilla Add-ons](https://img.shields.io/amo/v/anime-watch-parties?label=Firefox&logo=Firefox)](https://addons.mozilla.org/firefox/addon/anime-watch-parties/)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/goinehmnmhnoaepodbngfgdgjeibgelh?label=Chrome&logo=Google%20Chrome)](https://chrome.google.com/webstore/detail/anime-watch-parties/goinehmnmhnoaepodbngfgdgjeibgelh)
[![Github](https://img.shields.io/github/license/Dragicafit/Anime-Watch-Parties?logo=Github)](https://github.com/Dragicafit/Anime-Watch-Parties)

# Anime Watch Parties

Anime Watch Parties is a cross-platform extension that synchronizes videos on major anime websites.
This extension allows you to enjoy your favorite anime on Crunchyroll, Funimation, Wakanim or ADN with your friends.

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

## Developing or debugging the server and the extension

The [master branch](https://github.com/Dragicafit/Anime-Watch-Parties) generate the firefox extension, the [chrome branch](https://github.com/Dragicafit/Anime-Watch-Parties/tree/chrome) generate the chrome and chromium extension.

This project uses [Node.js](https://nodejs.org/en/) and [Redis](https://redis.io/). You have to install them before continuing:

- Linux:
  - go to [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/) and follow instructions to download `Node.js v16.x`.
  - install `docker` and `docker-compose` then run `docker-compose up -d` to start the `Redis server`

To install all the depedencies, use the [command `npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) :

```ShellSession
$ npm install
```

First things to do:

- copy the file `.env.example` to `.env`
- modify the url in `src/background-scripts/clientScript.ts` from `https://animewatchparties.com` to `https://localhost:4000`
- run `npm run cert` to create a self-signed certificate (the server uses https) and you have to allow it: [https://localhost:4000](https://localhost:4000).

Compile the extension:

```ShellSession
$ npm run build-extension
```

Then start the server:

```ShellSession
$ npm run debug
```

Finaly load the extension in your browser:

- Firefox: Go to `about:debugging#/runtime/this-firefox`, click on `Load Temporay Add-on...` and select the `manifest.json` file in `built/Firefox/`.
- Chromium: Go to `chrome://extensions`, enable debugging, click on `Load Unpacked` and select the `built/Chrome/` directory.
- Chrome: Go to `chrome://extensions`, enable debugging, click on `Load Unpacked` and select the `built/Chrome/` directory.

## Related

This project is a continuation of [Wakanim With Friends](https://github.com/Dragicafit/Wakanim-With-Friends).

[Roll Together](https://github.com/samuraiexx/roll_together) is a similar project.
