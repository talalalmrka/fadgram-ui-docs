import { addIconSelectors } from "@iconify/tailwind";
import { FadgramUI } from "fadgram-ui";
//import { FadgramUI } from "../example-app/fadgram-ui";
import { fgThemeColors } from 'fadgram-ui/theme.js';
//import { fgThemeColors } from '../example-app/fadgram-ui/theme.js';
import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    //'./node_modules/fadgram-ui/**/*.js'
  ],
  theme: {
    extend: {
      /*typography: {
        DEFAULT: {
          css: {
            pre: {
              paddingLeft: 0,  // Remove left padding
              marginLeft: 0,   // Remove any left margin
            },
            code: {
              paddingLeft: 0,  // Remove left padding from code
            },
          },
        },
      },*/
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins, sans-serif'],
      },
      colors: fgThemeColors(),
      minHeight: {
        '10vh': '10vh',
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '100vh': '100vh',
        '1/10': '10%',
        '2/10': '20%',
        'full': '100%',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
      },
      boxShadow: {
        DEFAULT: '0 0 1rem 0 rgba(33, 37, 41, .15)',
        'sm': '0 0.125rem 0.5rem 0 rgba(33, 37, 41, .15)',
        'xs': '0 0.0625rem 0.25rem 0 rgba(33, 37, 41, .2)',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      listStyleType: {
        circle: 'circle',
        square: 'square',
        'upper-roman': 'upper-roman',
        'lower-alpha': 'lower-alpha',
      },
      fontSize: {
        'xxs': '0.5rem',
        'xs': '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        'md': '.955rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      transitionDuration: {
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '2000': '2000ms',
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
        '1000': '1000',
        '1050': '1050',
        '1055': '1055',
        'full': '999999'
      },
      width: {
        'content': 'fit-content'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
        'b-full': '9999px',
      },
      padding: {
        '2.5': '0.625rem',
      },
    },
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

