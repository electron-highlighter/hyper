'use strict';
const backgroundColor = '#212836';
const foregroundColor = '#97a7c8';
const cursorColor = 'rgba(72,150,255,0.8)';
const borderColor = backgroundColor;
const tabBg = '#1b212c';
const tabBgDark = '#141820';
const tabText = 'rgba(153,163,184,0.6)';
const tabTextActive = '#d5d9e2';
const tabActiveBorder = '#528bff';
const dividerBg = 'rgba(151,167,200, 0.25)';

const black = backgroundColor;
const white = foregroundColor;
const red = '#e76572';
const green = '#6af699';
const yellow = '#fffa9e';
const blue = '#71b1fe';
const magenta = '#d59df6';
const cyan = '#4ff2f8';

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack: black,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white
};

exports.decorateConfig = config => Object.assign({}, config, {
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
    .header_header {
      top: 0;
      right: 0;
      left: 0;
    }
    .tabs_nav {
      height: 41px;
      line-height: 3em;
    }
    .tabs_list {
      background-color: ${tabBg} !important;
      border-bottom-color: ${tabBgDark} !important;
      padding: .5em .5em 0;
      max-height: 41px;
    }
    .tab_tab {
      height: 3em;
      line-height: 3em;
    }
    .tab_tab .tab_text {
      border-width: 0 0 0 1px;
      border-image: linear-gradient(${tabBg}, ${tabBgDark} 1em) 0 0 0 1 stretch;
    }
    .tab_textInner {
      color: ${tabText};
    }
    .tab_tab.tab_active .tab_textInner {
      color: ${tabTextActive};
    }
    .tab_tab.tab_active + .tab_tab .tab_text {
      border-image: linear-gradient(transparent, transparent) 0 0 0 1 stretch;
    }
    .tab_first .tab_text {
      border-width: 0;
    }
    .tab_tab.tab_active {
      font-weight: 600;
      background-color: ${backgroundColor};
      border-color: rgba(0,0,0,.27) !important;
      border-radius: 3px 3px 0 0;
    }
    .tab_tab.tab_active::before {
      border-bottom-color: ${backgroundColor};
      left: 1px;
      right: 1px;
    }
    .tab_tab.tab_active .tab_textInner {
      border-left: 1px solid ${tabBgDark};
      border-right: 1px solid ${tabBgDark};
      border-top: 1px solid ${tabBgDark};
      border-radius: 3px 3px 0 0;
    }
    .tab_tab.tab_active .tab_textActive::before {
      content: '';
      z-index: 2;
      pointer-events: none;
      position: absolute;
      top: 2px;
      left: 1px;
      bottom: 0px;
      width: 2px;
      border-top-left-radius: inherit;
      border-radius: 3px 0;
      background-color: ${tabActiveBorder};
    }
    .splitpane_divider {
      background-color: ${dividerBg} !important;
    }
  `
});
