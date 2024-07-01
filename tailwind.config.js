module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima Nova', 'sans-serif'],
      },
      // If you want to extend more theme settings, add them here
    },
  },
  variants: {
    extend: {
      scrollbar: ['responsive'],
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Hide the scrollbar but allow scrolling */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      }, ['responsive'])
    },
  ],
}
