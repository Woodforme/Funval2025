module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#31c3bd',
          dark: '#118c87'
        },
        secondary: {
          DEFAULT: '#f2b137',
          dark: '#cc8b13'
        },
        dark: '#1a2a33',
        light: '#dbe8ed',
        gray: {
          DEFAULT: '#a8bfc9',
          dark: '#6b8997'
        }
      },
      boxShadow: {
        'cell': '0 8px 0 rgba(0, 0, 0, 0.2)',
        'cell-active': '0 4px 0 rgba(0, 0, 0, 0.2)',
        'card': '0 4px 0 rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: [],
}