/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rainbow: {
          1: '#4158d0',
          2: '#c850c0',
          3: '#ffcc70',
        },
      },
    },
  },
  plugins: [],
};
