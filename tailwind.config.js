/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    relative: true,
    files: [
      './src/**/*.{html,js,jsx}',
      // './index.html',
    ],
  },
  theme: {
    fontSize: {
      'sm': '0.875rem',
      'base': '1rem',
      'md': '1.5rem',
      'lg': '2rem',
      'xl': '2.5rem',
      '2xl': '8.5rem',
    },
    lineHeight: {
      'xs': '1',
      'sm': '1.125',
      'normal': '1.5',
      'md': '2',
      'lg': '2.5',
      'xl': '3',
    },
    screens: {
      'xs': {'min': '320px'},
      // => @media (min-width: 320px and max-width: 639px) { ... }

      'sm': {'min': '720px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '980px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1280px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1400px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1600px'},
      // => @media (min-width: 1536px) { ... }
    },

    animatedSettings: {
      animatedSpeed: 1000,
      animationDelaySpeed: 500,
      classes: ['fadeInUp']
    },
    extend: {
      colors: {
        'ignota-black': '#0B0B0C',
        'ignota-white': '#FCFCFC',
        'ignota-orange': '#FF5C00',
        'ignota-orange-2': '#FF9D66',
        'ignota-purple': '#730ADE',
        'ignota-hover': '#FE9496',
        'ignota-gray-1': '#D7D7D8',
        'ignota-gray-2': '#EDEDED',
        'ignota-gray-3': '#55555D',
        'ignota-pink-1': '#FF7376',
        'ignota-pink-2': '#FE9496',
        'ignota-red': '#FB1B20',

      },
      fontFamily: {
        'sans': ['neue-haas-grotesk-display','sans-serif']
      },
      transitionDuration: {
        '1500': '1500ms',
      }
    }
  },
  plugins: [
    // Other plugins
    //     require('@tailwindcss/typography'),
    require('tailwindcss-animatecss'),
    require('@tailwindcss/forms'),
  ],
  safelist: [
    'animate__animated',
    'animate__fadeInUp',
    'border-b-ignota-red',
    'text-ignota-gray-3'
  ]
}
