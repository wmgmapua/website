const { wmgTw } = require("./lib/tw/wmg-tw");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  plugins: [wmgTw()],
};