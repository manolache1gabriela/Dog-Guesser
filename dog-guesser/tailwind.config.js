/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'wider': 'wider linear 15s infinite'
      },
      keyframes: {
        wider: {
          '75%': {
            backgroundColor: 'green'
          },
          '90%': {
            backgroundColor: 'orange'
          },
          '100%': {
            width: '100%',
            backgroundColor: 'red'
          }
        }
      }
    },
  },
  safelist: [
    {
      pattern: /bg-+/, // 👈  This includes bg of all colors and shades
    },
  ],
  plugins: [],
}