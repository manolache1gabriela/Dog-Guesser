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
          '100%': {
            width: '100%',
            backgroundColor: 'red'
          },
          '50%': {
            backgroundColor: 'green'
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