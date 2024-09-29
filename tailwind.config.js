/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right top, #0f0f0f, #0f0f0f, #0f0f0f, #371414);',
      },
    },
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
