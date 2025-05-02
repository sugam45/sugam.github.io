/** @import {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#00010D',
        },
        accent: {
          DEFAULT: '#00010D',
        },
        highlight: {
          DEFAULT: '#D0D3D9',
        },
        accent2: {
          DEFAULT: '#0D0D0D',
        },
      },
    },
  },
  plugins: [],
} 