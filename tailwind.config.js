/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wezi-blue': {
          100: '#E6F3FF',
          500: '#0066FF',
          600: '#0052CC',
          900: '#003D99'
        },
        'wezi-cyan': {
          100: '#E6FFFF',
          500: '#00CCFF',
          600: '#00B3E6',
          900: '#0099CC'
        },
        'wezi-green': {
          100: '#E6FFF2',
          500: '#00FF88',
          600: '#00E673',
          900: '#00CC66'
        },
        'wezi-pink': {
          100: '#FFE6F2',
          500: '#FF1493',
          600: '#E6127A',
          900: '#CC1066'
        }
      },
      backgroundImage: {
        'wezi-gradient': 'linear-gradient(135deg, #0066FF 0%, #00CCFF 50%, #00FF88 100%)',
        'wezi-gradient-reverse': 'linear-gradient(135deg, #00FF88 0%, #00CCFF 50%, #0066FF 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}