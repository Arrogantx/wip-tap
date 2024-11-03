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
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#ff3b3b',
          600: '#ff1111',
          700: '#e70000',
          800: '#c00',
          900: '#a00',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  safelist: [
    'bg-blue-50',
    'bg-yellow-50',
    'bg-green-50',
    'bg-red-50',
    'text-blue-700',
    'text-yellow-700',
    'text-green-700',
    'text-red-700',
    'bg-blue-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-red-100',
    'text-blue-800',
    'text-yellow-800',
    'text-green-800',
    'text-red-800',
    'border-blue-500',
    'border-green-500',
    'border-yellow-500',
    'border-red-500',
    'hover:bg-brand-600',
    'hover:bg-brand-700',
    'hover:bg-brand-800',
  ],
}