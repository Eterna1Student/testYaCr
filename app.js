// let offset = 0
// const sliderLine = document.querySelector('#swiperLine')
// const sliderSlide = document.querySelector('.swiper__slide')
// let containerWidth = 0
// let slideWidth = 0
// let slideActive = 0
// const quantitySlides = document.querySelectorAll('.swiper__slide')

// containerWidth = sliderLine.offsetWidth
// slideWidth = sliderSlide.offsetWidth


// window.addEventListener('resize', () => {
//   containerWidth = sliderLine.offsetWidth
//   slideWidth = sliderSlide.offsetWidth
// })


// document.querySelector('#slideNext').addEventListener('click', () => {
//   if (slideActive < quantitySlides.length - 3) {
//     slideActive += 1
//   } else {
//     slideActive = 0
//   }

//   sliderLine.style.transform = `translateX(${slideActive * -slideWidth}px)`
// })

// document.querySelector('#slidePrev').addEventListener('click', () => {
//   if (slideActive > 0) {
//     slideActive -= 1
//   } else {
//     slideActive = quantitySlides.length - 3
//   }

//   sliderLine.style.transform = `translateX(${slideActive * -slideWidth}px)`
// })

// Адаптивная ширина слайда




// function resizeSlideWidth() {
//   const pointsWrapWidth = document.querySelector('.roadmap__slider-wrapper').offsetWidth
//   const pointsSlideWidth = document.querySelectorAll('.roadmap__slide')

//   pointsSlideWidth.forEach((i) => {
//     i.style.minWidth = pointsWrapWidth + 'px'
//   })
// }
// resizeSlideWidth()
// window.addEventListener('resize', resizeSlideWidth)
     

// ============================SLIDER=================================

const images = document.querySelectorAll('.roadmap__slide')
const sliderLine = document.querySelector('.roadmap__slider-line')
let count = 0
let width
const sliderDots = document.querySelectorAll('.roadmap__slider-dot')

function init() {
    console.log('resize')
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
    console.log(i);
    sliderDots.forEach(item => item.classList.remove('roadmap__slider-dot_active'))
    sliderDots[i].classList.add('roadmap__slider-dot_active')

    if (count <= 0) {
        document.querySelector('#roadmap__slider-prev').disabled = true
    }
    
    if (count >= images.length - 1) {
        document.querySelector('#roadmap__slider-next').disabled = true
    }
    // if (count <= 0) {                                                                   //btn disabled 
    //     document.querySelector('#roadmap__slider-prev').style.opacity = 0.2
    // } else {
    //     document.querySelector('#roadmap__slider-prev').style.opacity = 1
    // } 

    // if (count >= 4) {
    //     document.querySelector('#roadmap__slider-next').style.opacity = 0.2
    // } else {
    //     document.querySelector('#roadmap__slider-next').style.opacity = 1
    // } 
}



// ============================CARUSEL=================================


