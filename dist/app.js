document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 1023) {
    var navbar = document.getElementById('navbar')

    document.addEventListener('scroll', function () {
      var navbar = document.getElementById('navbar')

      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
          navbar.classList.add('hide-elements')
      } else {
        navbar.classList.remove('scrolled')

        navbar.classList.remove('hide-elements')
      }
    })
  }
})
