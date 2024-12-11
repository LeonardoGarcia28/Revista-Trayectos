const { addDynamicIconSelectors } = require("@iconify/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html",
    "./src/**/*.{html,js}",
    "./node_modules/flyonui/dist/js/*.js",
    "./node_modules/flyonui/dist/js/accordion.js",
    "./src/**/*.{html,js,jsx,tsx}"
],
  theme: {
    extend: {},
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin"),
    addIconSelectors(['mdi', 'mdi-light']),
    addDynamicIconSelectors()
  ],
}