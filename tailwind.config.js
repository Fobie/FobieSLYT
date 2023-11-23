/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'primary' : "#079221",
        'primary-hover' : '#036315',
        'white' : '#FFF',
        'light-grey' : '#D1D5DB',
        'grey' : '#808080',
        'deep-grey' : '#0A0A0F',
        'light-black' : '#313131',
        'black' : '#101017',
        'deep-black' : '#050507',
      }
    },
  },
  plugins: [],
}

