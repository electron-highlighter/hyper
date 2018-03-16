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
  const tabText = '#7e8698'
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
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
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
