document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth > 1023) {
    document.addEventListener('scroll', function () {
      var navbar = document.getElementById('navbar')

      if (window.scrollY > 5) {
        navbar.classList.add('scrolled', 'fixed') 
      } else {
        navbar.classList.remove('scrolled', 'fixed')
      }
      if (window.scrollY > 0) {
        navbar.classList.add('hide-elements')
      } else {
        navbar.classList.remove('hide-elements')
      }
    })
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo')
  var playButton = document.getElementById('playButton')

  video.removeAttribute('controls')

  playButton.addEventListener('click', function () {
    if (video.paused) {
      video.play()
      playButton.style.display = 'none'
      video.setAttribute('controls', 'controls')
    } else {
      video.pause()
      playButton.style.display = 'block'
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var popupOverlay = document.getElementById('popup')
  var closeButton = document.getElementById('closeButton')
  var popupVideo = document.getElementById('popupVideo')
  var playButton = document.getElementById('playButton')
  var mainVideo = document.getElementById('myVideo')

  playButton.addEventListener('click', function () {
    mainVideo.pause()

    popupOverlay.style.display = 'flex'

    popupVideo.play()
  })

  closeButton.addEventListener('click', function () {
    popupOverlay.style.display = 'none'

    popupVideo.pause()
    popupVideo.currentTime = 0

    mainVideo.play()
  })

  popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
      closeButton.click()
    }
  })
})
