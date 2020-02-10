module.exports = {
  theme: {
    // Some useful comment
    fontFamily: {
      'Montserrat': ['Montserrat'],
      'display': ['Montserrat'],
      'body': ['Montserrat'],
    },

    colors: {
      langoostVioletDark80: '#402955',
      langoostViolet80: '#653591',
      langoostViolet50: '#8447b2',
      langoostViolet30: '#a87ec9',
      langoostViolet20: '#c7a9de',
      langoostViolet10: '#c7a9de',
      langoostViolet05: '#c7a9de',
      langoostOrange02: '#fcf0e8',
      langoostOrange05: '#f9e2d2',
      langoostOrange20: '#f8c199',
      langoostOrange30: '#fbb37f',
      langoostOrange50: '#ff9347',
      langoostOrange80: '#fe6c35',
      langoostWarning80: '#f04343',
      langoostWarning20: '#ffd3d3',
      langoostWarning05: '#fff1f2',
      langoostGreenSucces05: '#e4ecd7',
      langoostGreenSucces80: '#75c54a',
      langoostBackgroung:'#f9f9f9',
      langoostGrey05: '#f2f2f2',
      langoostGrey10: '#e5e5e5',
      langoostGrey20: '#cccccc',
      langoostGrey30: '#b2b2b2',
      langoostGrey50: '#727272',
      langoostGrey80: '#333333',
      langoostGold05: '#fff2d8',
      langoostGold20: '#ffe5a4',
      langoostGold50: '#f8d224',
      langoostGold80: '#facd00',
      langoostGold100: '#f2c600',
      langoostTextWhite: '#ffffff',
      white: '#ffffff',
    },
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '0.4': '0.4ms',
      '.4': '.4ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
    },

    //Transform
    transform: { // defaults to this value
      'none': 'none',
    },
    transformOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    translate: { // defaults to {}
      '1/2': '50%',
      '55': '55px',
      'full': '100%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px'],
    },
    scale: { // defaults to {}
      '90': '0.9',
      '100': '1',
      '110': '1.1',
      '-100': '-1',
      'stretched-x': ['2', '0.5'],
      'stretched-y': ['0.5', '2'],
      '3d': ['0.5', '1', '2'],
    },
    rotate: { // defaults to {}
      '90': '90deg',
      '180': '180deg',
      '270': '270deg',
      '3d': ['0', '1', '0.5', '45deg'],
    },
    skew: { // defaults to {}
      '-5': '-5deg',
      '5': '5deg',
    },
    perspective: { // defaults to {}
      'none': 'none',
      '55': '55px',
      '250': '250px',
      '500': '500px',
      '750': '750px',
      '1000': '1000px',
    },
    perspectiveOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
  },
  variants: {
    // Some useful comment
    fontFamily: ['responsive', 'hover', 'focus', 'active', 'first', 'last', 'odd', 'even'],
    borderWidth: ['responsive', 'hover', 'focus', 'active', 'first', 'last', 'odd', 'even'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'first', 'last', 'odd', 'even', 'focus-within',],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'first', 'last', 'odd', 'even'],
    backgroundImage: ['responsive', 'hover', 'focus', 'active', 'first', 'last', 'odd', 'even'],

    //Transition
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],

    //Transform
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    translate: ['responsive'],
    scale: ['responsive'],
    rotate: ['responsive'],
    skew: ['responsive'],
    perspective: ['responsive'],
    perspectiveOrigin: ['responsive'],
    transformStyle: ['responsive'],
    backfaceVisibility: ['responsive'],
    transformBox: ['responsive'],
  },
  plugins: [
    // Some useful comment

    //Translate
    require('tailwindcss-transitions')(),

    //Transform

    require('tailwindcss-transforms')({
      '3d': false, // defaults to false
    }),
  ]
}
