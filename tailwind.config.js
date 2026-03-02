/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2A5A3B',
          lightGreen: '#EAF2EC',
          yellow: '#E5C043',
          dark: '#1A3A26',
          darkGreen: '#1A3A26',
          gold: '#E5C043'
        }
      }
    },
  },
  plugins: [],
}
