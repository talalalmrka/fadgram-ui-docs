import { addIconSelectors } from "@iconify/tailwind";
import { FadgramUI } from "fadgram-ui";
import { FadgramTheme } from "fadgram-ui/theme.js";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    //'./node_modules/fadgram-ui/**/*.js'
  ],
  safelist: [
    //'modal-backdrop',
  ],
  theme: {
    extend: FadgramTheme(),
  },
  plugins: [
    FadgramUI,
    addIconSelectors({
      prefixes: [
        'bi',
      ],
      iconSelector: ".{prefix}-{name}",
      maskSelector: ".icon",
    }),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

