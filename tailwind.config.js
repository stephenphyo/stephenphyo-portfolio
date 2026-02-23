/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f7fb',
          100: '#e6eaf2',
          200: '#c6cedd',
          300: '#9aa6be',
          400: '#6f7fa0',
          500: '#526284',
          600: '#3f4d69',
          700: '#313c54',
          800: '#232b3e',
          900: '#151c2a'
        },
        teal: {
          50: '#e6fbff',
          100: '#c0f4ff',
          200: '#8aeaff',
          300: '#4bdfff',
          400: '#18d2ff',
          500: '#00c6ff',
          600: '#009fce',
          700: '#00749a',
          800: '#004d66',
          900: '#002a38'
        },
        sand: {
          50: '#fff8ec',
          100: '#ffedcc',
          200: '#fedc99',
          300: '#fecb66',
          400: '#fdbb33',
          500: '#e09f1e',
          600: '#b37d17',
          700: '#845b10',
          800: '#56390a',
          900: '#2d1d05'
        }
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 45, 45, 0.35)'
      }
    }
  },
  plugins: []
};


