document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 1023) {
    document.addEventListener('scroll', function () {
      var navbar = document.getElementById('navbar')
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
        navbar.classList.remove('hide-elements')
      }
    })
  }
})
