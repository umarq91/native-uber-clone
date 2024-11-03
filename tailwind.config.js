const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',

  ],
  presets: [require('nativewind/preset')],
  theme: {
   extend:{}
  },
  // plugins: [require('tailwindcss-animate')],
};