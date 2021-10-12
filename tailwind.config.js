//const colors = require('tailwindcss/colors');
//const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [/data-theme$/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   secondary: '#83d7bc',
    //   black: '#000000',
    //   grayNavBar: colors.gray[50],
    //   graySuperLight: colors.gray[200],
    //   grayLight: colors.gray[400],
    //   gray: colors.gray[500],
    //   grayDark: colors.gray[900],
    //   primary: '#56aeaa',
    //   red: colors.red[500],
    //   smokeLight: 'rgba(0, 0, 0, 0.3)',
    //   transparent: 'transparent',
    //   white: '#fefefe',
    // },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '6rem',
        xl: '12rem',
      },
    },
    extend: {
      // fontFamily: {
      //   sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      // },
      gridTemplateRows: {
        // https://web.dev/one-line-layouts/#04.-pancake-stack:-grid-template-rows:-auto-1fr-auto
        pancakeStack: 'auto 1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    rtl: false,
    themes: [
      {
        tdexdark: {
          primary: '#313131',
          'primary-focus': '#2f2f2f',
          'primary-content': '#ffffff',
          secondary: '#0fff00',
          'secondary-focus': '#10d501',
          'secondary-content': '#ffffff',
          accent: '#c6c6c6',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#000000',
          'neutral-focus': '#2f2f2f',
          'neutral-content': '#ffffff',
          'base-100': '#313131',
          'base-200': '#181818',
          'base-300': '#0a0a0a',
          'base-content': '#ffffff',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff2424',
        },
      },
    ],
  },
};
