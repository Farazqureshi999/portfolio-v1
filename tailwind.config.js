module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins'],
      'nunito': ['Nunito'],
    },
    fontWeight:{
      normal:300,
      medium:500,
      semibold:600,
      bold:700,
      'extra-bold':800,
    },
    colors:{
      'fq-white':'#fff',
      'fq-dark-blue1':'#101F42',
      'fq-gray':'#cad8e4',
      'fq-blue-1':'#809dcb',
      'fq-blue-light':'#78a7dc',
      'fq-dark-blue2':'#2c3960'
    },
    letterSpacing: {
      'lg':'5px'
    },
    container:{
      padding:'4rem',
      center:true,
    }
  },
  plugins: [],
}
