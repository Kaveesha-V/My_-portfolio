/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0a0a12',
        'dark-card': 'rgba(18, 18, 32, 0.7)',
        cyan: {
          400: '#00f0ff',
          500: '#00d8e6',
        },
        purple: {
          500: '#8a2be2',
          600: '#7000ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s infinite ease-in-out',
        'float': 'floatSlow 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
