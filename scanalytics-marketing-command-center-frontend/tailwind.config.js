/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sc-primary': '#00A86B',
        'sc-secondary': '#007A4D',
        'sc-accent': '#FF6B35',
        'sc-dark': '#1A1A2E',
        'sc-light': '#F8F9FA',
        'sc-text': '#333333',
        'scanalytics-primary': '#00A86B',
        'scanalytics-secondary': '#007A4D',
        'scanalytics-dark': '#1A1A2E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 10px -2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
