import { rgba, lighten, darken, transparentize } from "polished";

const colorList = [
    'slateblue',
    'goldenrod',
    'royalblue',
    'orangered',
];

const themeConfig = {
    accent: 'slateblue',
    randomAccent: false,
    colorList: colorList,
}

const basicPalette = {
    'black': '#000000',
    'white': 'rgba(255,255,255)',
    'background': '#1F1F1F',
    'accent': 
        themeConfig.randomAccent ? 
            colorList[getRandomInt(colorList.length - 1)] : themeConfig.accent,
    'blue': '#3E88F6',
    'red': '#F63E3E',
    'green': '#3BCC49',
    'yellow': '#FFD336',
    'purple': '#C550EE',
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

console.log(basicPalette['red'])
const expandedPalette = {
    ...basicPalette,
    'accentLight': () => (lighten(0.025, basicPalette.accent)),
    'accentExtraLight': () => (lighten(0.2, basicPalette.accent)),
    'grey600':     () => (lighten(0.15, basicPalette.black)),
    'grey500':     () => (lighten(0.22, basicPalette.black)),
    'grey400':     () => (lighten(0.35, basicPalette.black)),
    'grey300':     () => (lighten(0.5, basicPalette.black)),
    'grey100':     () => (lighten(0.1, basicPalette.black)),
    'blue500':     () => (darken(0.4, basicPalette.blue)),
    'purple500':   () => (darken(0.4, basicPalette.purple)),
};

const theme = {
    ...basicPalette,
    ...expandedPalette
}

export const breakpoints = {
    'xs': 576,
    's': 768,
    'md': 992,
    'l': 1200,
    'xl': 1400
}

export const boxShadow = {
    'md': `0 0 10px ${transparentize(0.4, basicPalette.black)}`,
    'l': `0 0 30px ${transparentize(0.6, basicPalette.black)}`
}

export default theme;

