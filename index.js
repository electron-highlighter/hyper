'use strict'

const black = '#24283b'
const white = '#a8b5d1'
const red = '#f7768e'
const green = '#58ffc7'
const yellow = '#ffd9af'
const blue = '#82aaff'
const magenta = '#d2a6ef'
const cyan = '#57f9ff'
const lightBlack = '#7c8eac'

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

module.exports.decorateConfig = config => {
  const backgroundColor = colors.black
  const foregroundColor = colors.white
  const cursorColor = config.cursorColor || colors.white
  const cursorAccentColor = config.cursorAccentColor || colors.black
  const borderColor = '#141820'
  const selectionColor = 'rgba(130, 170, 255, 0.3)'
  const tabNavBg = '#1b212c'
  const tabText = colors.lightBlack
  const tabTextActive = '#d5d9e2'
  const dividerBg = 'rgba(64,74,89,.4)'
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
      }
    `,
    css: `
      ${config.css || ''}
      .tabs_nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      /* hide the tab border shim, we are providing our own */
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
      /* Hide title when only one tab */
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}
