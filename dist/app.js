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

const wrapper = document.querySelector('.wrapper')
const carousel = document.querySelector('.carousel')
const firstCardWidth = carousel.querySelector('.card').offsetWidth
const arrowBtns = document.querySelectorAll('.wrapper i')
const carouselChildrens = [...carousel.children]

// Add this condition after initializing the carouselChildrens variable
if (carouselChildrens.length <= 5) {
  // If there are 5 or fewer slides, hide the navigation buttons
  arrowBtns.forEach((btn) => (btn.style.display = 'none'))
}

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

// Add this condition to set justify-content:center when there are fewer than 4 slides
if (carouselChildrens.length < 5) {
  carousel.style.justifyContent = 'center'
} else {
  carousel.style.justifyContent = 'flex-start' // Set to 'flex-start' for other cases
}

carousel.classList.add('no-transition')
carousel.scrollLeft = carousel.offsetWidth
carousel.classList.remove('no-transition')

arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id == 'left' ? -firstCardWidth : firstCardWidth
    handleButtonVisibility() // Call the function after manual scrolling
  })
})

const dragStart = (e) => {
  isDragging = true
  carousel.classList.add('dragging')
  startX = e.pageX
  startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  if (!isDragging) return
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = () => {
  isDragging = false
  carousel.classList.remove('dragging')
}

const infiniteScroll = () => {
  // Comment out or remove the following lines
  /*
  if (carousel.scrollLeft === 0) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add('no-transition');
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove('no-transition');
  }
  */

  clearTimeout(timeoutId)
  if (!wrapper.matches(':hover')) autoPlay()
}

// Modify the autoPlay function to call handleButtonVisibility
const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return

  timeoutId = setTimeout(() => {
    carousel.scrollLeft += firstCardWidth
    handleButtonVisibility() // Call the function after scrolling
  }, 2500)
}

const handleButtonVisibility = () => {
  // Show/hide buttons based on the number of slides
  arrowBtns.forEach(
    (btn) =>
      (btn.style.display = carouselChildrens.length <= 5 ? 'none' : 'flex')
  )

  // Set justify-content:center only when there are fewer than 4 slides
}

// Call handleButtonVisibility once when the page loads to set initial button visibility and justify-content
handleButtonVisibility()

carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)
carousel.addEventListener('scroll', infiniteScroll)
wrapper.addEventListener('mouseenter', () => clearTimeout(timeoutId))
wrapper.addEventListener('mouseleave', autoPlay)
