// ====================================================================
// ============================SLIDER==================================
// ====================================================================


const images = document.querySelectorAll('.roadmap__slide')
const sliderLine = document.querySelector('.roadmap__slider-line')
let count = 0
let width
const sliderDots = document.querySelectorAll('.roadmap__slider-dot')

function init() {
    width = document.querySelector('.roadmap__slider-wrapper').offsetWidth
    sliderLine.style.width = width*images.length + 'px'
    images.forEach(i => {
        i.style.width = width + 'px'
        i.style.height = 'auto'
    })
    rollSlider()
}

window.addEventListener('resize', init)
init()
thisSlide(count)

document.querySelector('#roadmap__slider-prev').addEventListener('click', () => {
    if (count == 0) {
        return
    }
    document.querySelector('#roadmap__slider-next').disabled = false
    count--
    
    rollSlider()
    thisSlide(count)
})

document.querySelector('#roadmap__slider-next').addEventListener('click', () => {
    if (count === images.length - 1) {
        return
    }
    document.querySelector('#roadmap__slider-prev').disabled = false
    count++
    
    rollSlider()
    thisSlide(count)
})

function rollSlider() {
    sliderLine.style.transform = `translate(-${count * width}px)`
}

//Pagination


function thisSlide(i) {
    sliderDots.forEach(item => item.classList.remove('roadmap__slider-dot_active'))
    sliderDots[i].classList.add('roadmap__slider-dot_active')

    if (count <= 0) {
        document.querySelector('#roadmap__slider-prev').disabled = true
    }
    
    if (count >= images.length - 1) {
        document.querySelector('#roadmap__slider-next').disabled = true
    }
}



// ====================================================================
// ============================CARUSEL=================================
// ====================================================================


const caruselSlides = document.querySelectorAll('.carusel__slide')
const caruselLine = document.querySelector('.carusel__line')
let caruselStepCount = 0
let caruselWidth


function resizeSlide() {
    caruselWidth = document.querySelector('.carusel__wrapper').offsetWidth

        if (caruselWidth <= 400){
          caruselLine.style.width = caruselWidth * caruselSlides.length + 'px'

          caruselSlides.forEach(i => {
            i.style.width = caruselWidth + 'px'
            i.style.height = 'auto'
          })
        } else {
          caruselLine.style.width = caruselWidth * 2 + 'px'

          caruselSlides.forEach(i => {
          i.style.width = caruselWidth/3 + 'px'
          i.style.height = 'auto'
      })
    }
  }


window.addEventListener('resize', resizeSlide)
resizeSlide()

document.querySelector('#slidePrev').addEventListener('click', () => {

    counterReflection()

    caruselStepCount--
    if (caruselStepCount < 0) {
      caruselStepCount = 1
    }
    rollCarusel()
})

document.querySelector('#slideNext').addEventListener('click', () => {

    counterReflection()

    caruselStepCount++
    if (caruselStepCount > 1) {
      caruselStepCount = 0
    }
    rollCarusel()
})

function counterReflection() {
    if (caruselStepCount === 0) {
        document.getElementById('counter').innerHTML = '6'
    } else if (caruselStepCount === 1) {
        document.getElementById('counter').innerHTML = '3'
    }
}

function rollCarusel() {

    caruselLine.style.transform = `translate(${caruselStepCount * -caruselWidth}px)`
}

// setInterval(()=> {
//     caruselStepCount++
//     if (caruselStepCount > 1) {
//       caruselStepCount = 0
//     }
//     rollCarusel()
// }, 4000)


