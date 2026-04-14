module.exports = {
  content: ["./*.html", "./blog/**/*.html"],
  theme: {
    extend: {
      colors: {
        'effi-green': '#004225',
        'effi-green-mid': '#035B2F',
        'effi-green-dark': '#01331B',
        'effi-beige': '#F2EFE7',
        'effi-cream': '#F4EFD9',
        'effi-body': '#92887A',
        'effi-h3': '#616161',
        'effi-border': '#E8E4D9',
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
