/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand colors from AL SAFIR logo
        brand: {
          gold: '#b48b22',
          black: '#000000',
          white: '#FFFFFF',
          dark: '#1B1B1B', // text on golden background
        },
        // Amber palette based on brand gold #b48b22
        amber: {
          50: '#FBF6E8',
          100: '#F5E9C9',
          200: '#E8D49A',
          300: '#D4B96A',
          400: '#C4A03A',
          500: '#b48b22',
          600: '#98751E',
          700: '#7A5F19',
          800: '#5C4814',
          900: '#453610',
        },
      },
      fontFamily: {
        script: ['Luxurious Script', 'cursive'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'logo': '0.2em',
        'tagline': '0.18em',
      },
    },
  },
  plugins: [],
};
