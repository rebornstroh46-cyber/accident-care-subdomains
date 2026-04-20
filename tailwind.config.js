/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hazard:   '#FACC15',
        fire:     { DEFAULT: '#DC2626', dark: '#991B1B' },
        ice:      { DEFAULT: '#60A5FA', dark: '#1E40AF' },
        gold:     '#F59E0B',
      },
      fontFamily: {
        display: ['Rajdhani', 'Impact', 'Arial Black', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'tape-slide': 'tapeSlide 12s linear infinite',
        'pulse-slow':  'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'blink':       'blink 1.2s step-start infinite',
        'float':       'float 6s ease-in-out infinite',
      },
      keyframes: {
        tapeSlide: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '160px 160px' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%':     { opacity: 0 },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
