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
          orange: '#FC5200',
          accent: '#FF6E27',
          amber: '#FF9F1C',
          green: '#2ECC71',
          dark: '#0A0C10',
          surface: '#12161F',
          card: '#181C26',
          border: 'rgba(255, 255, 255, 0.08)'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 50px -10px rgba(252, 82, 0, 0.4)',
        'glow-green': '0 0 40px -10px rgba(46, 204, 113, 0.35)',
      }
    },
  },
  plugins: [],
}
