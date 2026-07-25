module.exports = {
  content: ["./*.html", "./blog/**/*.html", "./energieberatung/**/*.html"],
  theme: {
    extend: {
      colors: {
        'effi-green': '#004225',
        'effi-green-mid': '#035B2F',
        'effi-green-dark': '#01331B',
        'effi-beige': '#F1F6F2',
        'effi-cream': '#F4F8F5',
        'effi-body': '#3a4a42',
        'effi-h3': '#616161',
        'effi-border': '#E3EBE7',
        'effi-gold': '#C3A87A',
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    }
  }
}
