module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('./bg-intro-desktop.png')",
      }
    },
  },
  variants: {
    extend: {
      maxHeight: ['focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
