# Electron Highlighter for Hyper

[Hyper](https://hyper.is) theme based on [the Electron Highlighter Syntax](https://electron-highlighter.github.io).

![Screenshot](https://cdn.jsdelivr.net/gh/electron-highlighter/hyper@118772a06e52bdca1333deeaf9a38c4fdaab8c16/screenshot.png)

### Install

1. Open Hyper's preferences with `cmd + ,` (or manually at `~/.hyper.js`) with your editor.
2. Update your list of plugins to include `@electron-highlighter/hyper`, like so:

  ```js
plugins: [
    '@electron-highlighter/hyper'
],
```
3. Fully reload Hyper (`cmd + shift + r`), and enjoy your new theme!

### License

MIT

## Electron Highlighter Day (light)

A light variant is available alongside the dark theme. Use the `electron-highlighter-day.js` file in this
folder the same way you use the dark one. The Day files are generated from the `palette/` repo —
edit the palette there and run `npm run build` to regenerate.
