/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right top, #0f0f0f, #0f0f0f, #0f0f0f, #371414);',
        'border-gradiant':
          'linear-gradient(to right, #fea7a7, #ff8f8d, #fd7771, #f95e54, #f24236, #f24236, #f24236, #f24236, #f95e54, #fd7771, #ff8f8d, #fea7a7);',
        'header-gradient':
          'background-image: linear-gradient(to right bottom, #141414, #3d3d3d, #6b6a6a, #9d9c9c, #d1d1d0);',
      },
      screens: {
        'max-xs': { max: '480px' },
        'max-ss': { max: '620px' },
        'max-sm': { max: '768px' },
        'max-md': { max: '1060px' },
        'max-lg': { max: '1440px' },
        'max-xl': { max: '1700px' },
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

        '.mask-gradient-2': {
          '-webkit-mask-image':
            'linear-gradient(to bottom, rgba(255, 0, 0, 0), #ff0000, rgba(0, 0, 0, 0))',
          'mask-image':
            'linear-gradient(to bottom, rgba(255, 0, 0, 0), #ff0000, rgba(0, 0, 0, 0))',
        },

        '.border-gradient': {
          border: '1px solid transparent',
          'border-image-source':
            'linear-gradient(90deg,  rgba(229, 0, 0, 0) 0%, #E50000 16.67%, rgba(229, 0, 0, 0) 100%)',
          'border-image-slice': '1',
          'border-image-width': '1',
        },
      });
    },
  ],
};
