/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-gradient': {
          '-webkit-mask-image': 'linear-gradient(#000, rgba(0, 0, 0, 0))',
          'mask-image': 'linear-gradient(#000, rgba(0, 0, 0, 0))',
        },
      });
    },
  ],
};
