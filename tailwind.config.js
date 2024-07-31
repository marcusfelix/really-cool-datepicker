/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont'],
      },
      colors: {
        'light/5': '#E8E8E8',
        'light/7': '#DBDBDB',
        'light/10': '#858585',
        'light/11': '#6F6F6F'
      },
    },
  },
  plugins: [],
}

