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
          green: '#2e7d32', // Richer agricultural green (Nutrihub style)
          lightGreen: '#e8f5e9',
          yellow: '#fbc02d',
          orange: '#f57c00', // Nutrihub orange accent
          dark: '#1b5e20',
          darkGreen: '#1b5e20',
          gold: '#fbc02d'
        }
      }
    },
  },
  plugins: [],
}
