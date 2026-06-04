'use strict'

const black = '#eef0f5'
const white = '#2f3b54'
const red = '#f52a65'
const green = '#10a877'
const yellow = '#d18a16'
const blue = '#366ff0'
const magenta = '#8b4fe0'
const cyan = '#0a9fbf'
const lightBlack = '#7b88a8'

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
  const borderColor = '#d3d8e3'
  const selectionColor = 'rgba(54, 111, 240, 0.2)'
  const tabNavBg = '#e4e7ee'
  const tabText = lightBlack
  const tabTextActive = '#2f3b54'
  const dividerBg = 'rgba(194,198,212,.5)'

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
