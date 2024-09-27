/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-c-pink': '#FF1E78',
        'custom-c-orange': '#FF871E',
        'custom-c-blue': '#1EC2FF',
        'custom-c-yellow': '#DBFF1E',
        // --
        'custom-b-blue': '#021526',
        'custom-b-creame': '#2E073F',
        // --
        'custom-keyword': '#6366F1',
        'custom-variable': '#93c5fd',
        'custom-string': '#fdba74',
        'custom-w-p': '#6366f1',


        'pink': 'rgb(255, 0, 89)',
        'violet': 'rgb(186, 0, 253)',
        'blue': 'rgb(0, 165, 253)',
        'yellow': 'rgb(255, 200, 0)',
        'light': 'rgb(255, 255, 255)',
      },
      fontFamily: {
        'nanum-pen': ["Nanum Pen Script", 'cursive', 'normal'],
        'amsterdam': ["New Amsterdam", 'cursive', 'normal'],
        'rubik': ["Rubik Mono One", 'monospace', 'normal'],
        'titan': ["Titan One", 'sans-serif', 'normal'],
        'lexend': ['Lexend', 'sans-serif', 'normal'],
        'fira': ['Fira Code', 'monospace', 'normal'],
      },
      keyframes: {
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        orbit: {
          '0%': {
            opacity: '1',
            filter: 'brightness(120%)',
          },
          '100%': {
            opacity: '1',
            filter: 'brightness(80%)',
          },
        },
        scrollAnimation: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        pulse: 'pulse 2s infinite',
        scrollupdown: 'scrollAnimation 3s ease-in-out infinite',
        orbit: 'pulse 0.5s linear infinite alternate',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
      },
      screens: {
        'custom': '700px',
      },
      height: {
        'screen-padded': 'calc(100vh - 80px)', // Padding'i hesaba katar
      },
    },
  },
  plugins: [],
}