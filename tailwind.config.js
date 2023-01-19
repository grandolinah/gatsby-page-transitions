/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});

const perspective = plugin(function({addUtilities}) {
  addUtilities({
    '.perspective': {
      perspective: "1000px",
    },
  })
});


const preserve3d = plugin(function({addUtilities}) {
  addUtilities({
    '.preserve-3d': {
      transformStyle: "preserve-3d",
    },
  })
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        layout: 'calc(100vh - 112px)'
      },
    },
  },
  plugins: [rotateY, backfaceVisibility, perspective, preserve3d],
}
