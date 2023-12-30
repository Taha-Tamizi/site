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

    popupVideo.controls = true
  })

  closeButton.addEventListener('click', function () {
    popupVideo.pause()
    popupVideo.currentTime = 0

    mainVideo.pause()

    popupOverlay.style.display = 'none'

    playButton.style.display = 'block'

    popupVideo.controls = false
  })

  popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
      closeButton.click()
    }
  })
})

var container = document.getElementById('container')
var slider = document.getElementById('slider')
var slides = document.getElementsByClassName('slide').length
var buttons = document.getElementsByClassName('btn')

var currentPosition = 0
var currentMargin = 0
var slidesPerPage = 0
var slidesCount = slides - slidesPerPage
var containerWidth = container.offsetWidth
var prevKeyActive = false
var nextKeyActive = true

window.addEventListener('resize', checkWidth)

function checkWidth() {
  containerWidth = container.offsetWidth
  setParams(containerWidth)
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1
  } else {
    if (w < 901) {
      slidesPerPage = 2
    } else {
      if (w < 1101) {
        slidesPerPage = 3
      } else {
        slidesPerPage = 4
      }
    }
  }
  slidesCount = slides - slidesPerPage
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage
  }
  currentMargin = -currentPosition * (100 / slidesPerPage)
  slider.style.marginLeft = currentMargin + '%'
  if (currentPosition > 0) {
    buttons[0].classList.remove('inactive')
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive')
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add('inactive')
  }
}
setParams()

function slideRight() {
  if (currentPosition !== 0) {
    slider.style.marginRight = currentMargin + 340 + 8 + 'px'
    currentMargin += 340 + 8
    currentPosition--
  }
  if (currentPosition === 0) {
    buttons[0].classList.add('inactive')
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove('inactive')
  }
}

function slideLeft() {
  if (currentPosition !== slidesCount) {
    slider.style.marginRight = currentMargin - (340 + 8) + 'px'
    currentMargin -= 340 + 8
    currentPosition++
  }
  if (currentPosition === slidesCount) {
    buttons[1].classList.add('inactive')
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove('inactive')
  }
}
