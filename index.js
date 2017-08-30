'use strict'

const black = '#212836'
const white = '#a8b5d1'
const red = '#e76572'
const green = '#6af699'
const yellow = '#fffa9e'
const blue = '#71b1fe'
const magenta = '#d59df6'
const cyan = '#4ff2f8'
const lightBlack = '#7992b4'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white
}

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark')

module.exports.decorateConfig = config => {
  const backgroundColor = black
  const foregroundColor = white
  const cursorColor = config.cursorColor || '#528bff'
  const borderColor = '#141820'
  const tabNavBg = '#1b212c'
  const tabText = 'rgba(153,163,184,.8)'
  const tabTextActive = '#d5d9e2'
  const dividerBg = 'rgba(64,74,89,.4)'
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      ._nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      ._list {
        margin-left: 0;
      }
      ._title {
  			display: none !important;
  		}
      ._tab._first {
        padding-left: 82px;
      }
      ._tab ._textInner {
        color: ${tabText};
        font-weight: 500;
      }
      ._tab._active {
        background-color: ${backgroundColor};
      }
      ._tab._active ._textInner {
        color: ${tabTextActive};
      }
      ._firstActive {
        border-left-width: 0px;
      }
      ._borderShim {
        border-width: 0 !important;
      }
      ._divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}
