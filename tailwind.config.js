module.exports = {
  purge: [
    './src/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black:{
          DEFAULT: '#000000',
          dark: '#212121'
        },
        green:{
          light:'#2add97',
          dark: '#3E7A19'
        },
        blue:{
          light:'#bce7fc'
        },
        yellow: {
          dark: '#f9f575'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
