# Atom Electron Highlighter for Hyper

[Hyper](https://hyper.is) theme based on [the Atom Electron Highlighter Syntax](https://github.com/mmcbride1007/electron-highlighter-syntax).

![](https://cdn.rawgit.com/mmcbride1007/hyper-electron-highlighter/master/screenshot.png)

### Install

1. Open Hyper's preferences with `Cmd + ,` (or manually at `~/.hyper.js`) with your editor.
2. Update your list of plugins to include `hyper-electron-highlighter`, like so:

  ```js
plugins: [
  'hyper-electron-highlighter'
],
```
3. Fully reload HyperTerm (`Cmd+Shift+R`), and tada! :tada:

### Transparency

So you want a transparent terminal huh? Can't say I blame you. This theme allows you to customize the background transparency by setting a value in your `~/.hyper.js` config. Just create a property called `transparentBgAlpha` in the `config` object and give it a value. This value will be passed into the background color in the theme as the `a` portion of the `rgba` (if you don't add this property, it defaults to 1, which is no transparency). So for example, if you want your terminal to have 70% alpha, this is what you'd do:

```js
// ~/.hyper.js

module.exports = {
  config = {
    // your normal settings and stuff
    ...

    // add this one!
    transparentBgAlpha: 0.7,

    // maybe more stuff here?
  },
  plugins: [
    'hyper-electron-highlighter'
  ],
  localPlugins: []
}
```

### License

MIT
