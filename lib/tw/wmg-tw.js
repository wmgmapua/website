const plugin = require("tailwindcss/plugin");

/**
 * Converts a pixel value to rem.
 * @access private
 * @param {number} px
 * @returns string
 */
const _toRem = (px) => `${ px / 16 }rem`;

/**
 * WMG Website Tailwind config.
 * @returns any
 */
const wmgTw = () => plugin(({ matchUtilities, theme }) => {
    // size-[]
    matchUtilities({
      'size': (value) => ({
        fontSize: value
      }),
    }, { values: theme('fontSize') });

    // family-[]
    matchUtilities({
      'family': (value) => ({
        fontFamily: value
      }),
    }, { values: theme('fontFamily') });

    // weight-[]
    matchUtilities({
      'weight': (value) => ({
        fontWeight: value
      })
    }, { values: theme('fontWeight') });

  },
  {
    theme: {
      screens: {
        sm: '320px',
        md: '640px',
        lg: '890px',
        xl: '1077px',
      },
      colors: {
        'wmg-white': {
          200: '#fff',
          300: '#f5f5f5',
          400: '#e0e0e0',
          600: '#9e9e9e',
          800: '#616161',
          'ink': '#000',
        },
        'wmg-blue': {
          200: '#9bacbe',
          300: '#546579',
          400: '#2d3e50',
          600: '#0f1722',
          800: '#06090d',
          'ink': '#fff',
        },
        'wmg-red': {
          200: '#ff8d8d',
          300: '#ec4f4f',
          400: '#c41b1b',
          600: '#8d0c0c',
          800: '#5b0000',
          'ink': '#fff',
        },
        'wmg-black-alpha': {
          'default': 'rgba(0, 0, 0, .12)',
          'ink': 'rgba(0, 0, 0, .37)',
        },
        'wmg-white-alpha': {
          'default': 'rgba(255, 255, 255, .12)',
          'ink': 'rgba(255, 255, 255, .37)',
        },
      },
      fontSize: {
        'xs': 12,
        'sm': 16,
        'md': 20,
        'lg': 25,
        'xl': 30,
        '2xl': 36,
        '3xl': 42,
        '4xl': 49,
        '5xl': 57,
        '6xl': 66,
      },
      spacing: {
        'none': 0,
        'xs': 4,
        'sm': 8,
        'md': 16,
        'lg': 24,
        'xl': 32,
        '2xl': 48,
        '3xl': 64,
        '4xl': 80,
        '5xl': 96,
        '6xl': 112,
        'auto': 'auto'
      },
      dropShadow: {
        'xs': '0 0.1rem 0.3rem rgba(0, 0, 0, 0.2)',
        'sm': '0 0.3rem 0.5rem rgba(0, 0, 0, 0.2)',
        'md': '0 0.7rem 1.2rem rgba(0, 0, 0, 0.2)',
        'lg': '0 1.2rem 1.5rem rgba(0, 0, 0, 0.2)',
        'xl': '0 1.7rem 2.1rem rgba(0, 0, 0, 0.2)',
        '2xl': '0 2.3rem 3.5rem rgba(0, 0, 0, 0.2)',
        '3xl': '0 3.5rem 4.7rem rgba(0, 0, 0, 0.2)',
        '4xl': '0 4.7rem 5.2rem rgba(0, 0, 0, 0.2)',
        '5xl': '0 5.2rem 6.5rem rgba(0, 0, 0, 0.2)',
        '6xl': '0 6.7rem 7.3rem rgba(0, 0, 0, 0.2)',
      },
      padding: {
        'none': 0,
        'xs': '0.1rem',
        'sm': '0.3rem',
        'md': '0.7rem',
        'lg': '1.2rem',
        'xl': '2.3rem',
        '2xl': '3.4rem',
        '3xl': '4.5rem',
        '4xl': '6.1rem',
        '5xl': '8.2rem',
        '6xl': '12.3rem',
        'auto': 'auto',
      },
      fontFamily: {
        'sans': '\'Montserrat\', sans-serif',
        'mono': '\'Jetbrains Mono\', monospace',
      },
      fontWeight: {
        'light': 200,
        'normal': 400,
        'bold': 700,
        'black': 900
      },
    }
  });

module.exports = { wmgTw };