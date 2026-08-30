/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          orange: '#FF6A00',
          orangeDark: '#E65100',
          orangeLight: '#FFA133',
          orangeGlow: '#FF7E1D',
          cream: '#FFF9F2',
          card: '#FFFFFF',
          dark: '#1E1E24',
          grayText: '#5A6070'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 20px 40px -15px rgba(230, 81, 0, 0.25)',
        'float': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'badge': '0 10px 25px -5px rgba(255, 106, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
