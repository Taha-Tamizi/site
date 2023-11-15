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

document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo')
  var playButton = document.getElementById('playButton')

  // Hide the default controls initially
  video.removeAttribute('controls')

  playButton.addEventListener('click', function () {
    if (video.paused) {
      video.play()
      playButton.style.display = 'none' // Hide the play button when video is playing
      video.setAttribute('controls', 'controls') // Show the default controls when video is playing
    } else {
      video.pause()
      playButton.style.display = 'block' // Show the play button when video is paused
    }
  })
})
