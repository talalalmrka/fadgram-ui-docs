import { FadgramUI } from "fadgram-ui";
import { fgThemeColors } from 'fadgram-ui/theme.js';
import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Add paths to your plugin components
    './node_modules/fadgram-ui/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins, sans-serif'],
      },
      colors: fgThemeColors(),
    },
  },
  plugins: [
    FadgramUI,
  ],
  darkMode: 'class',
}

