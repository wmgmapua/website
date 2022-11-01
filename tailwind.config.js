/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
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
    extend: {},
  },
  plugins: [],
};