/** @type {import('tailwind').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  container:{
    center:true,
    padding: {
      DEFAULT: '100px',
      md: "50px"
    }
  },
  // plugins: [ require('tailwindcss/plugins/sticky'),
  //  ]
}