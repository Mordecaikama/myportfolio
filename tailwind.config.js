/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['*', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        mord: colors.green,
      },
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    screens: {
      xs: '320px',
      sm: '370px',
      md: '768px',
      lg: '1024px',
      xl: '1248px',
      xl: '1538px',
    },
  },
  plugins: [],
}
