/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui({
    defaultTheme: 'dark',
    addCommonColors: true,
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        layout: {},
        colors: {
          background: '#bcd1eb'
        },
      },
      dark: {
        // layout: {}, // dark theme layout tokens
        colors: {
          background: '#041529',
          primary: {
            DEFAULT: '#30e0c9'
          }
        },
      },
    }
  })],
}

