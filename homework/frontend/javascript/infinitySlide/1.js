const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const dots = document.querySelectorAll('.dot')

let slides = document.querySelectorAll('.slide')
let index = 1
let intervalId;
let status = 'standing'
const interval = 3000
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);


firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slide.append(firstClone)
slide.prepend(lastClone)

slideWidth = slides[index].clientWidth

slide.style.transform = `translateX(${-slideWidth * index}px)`

const getSlide = () => {
    return slides = document.querySelectorAll('.slide')
}

const startSlide = () => {
    intervalId = setInterval(() => {
        moveToNextSlide()
    }, interval);
}

const moveToNextSlide = () => {
    getSlide()
    if (status == 'running') return
    status = 'running'
    let move = 0

    index++
    slide.style.transform = `translateX(${-slideWidth * index}px)`
    slide.style.transition = '.7s'

    slide.addEventListener('transitionend', () => {
        getSlide()
        move++
        if (move === 1) { status = 'standing' }
        dots.forEach(dot => {
            dot.classList.remove('active')
        })
        dots[index - 1].classList.add('active')
    })


}

const moveToPrevSlide = () => {
    getSlide()

    if (status == 'running') return
    status = 'running'
    let move = 0
    index--
    slide.style.transform = `translateX(${-slideWidth * index}px)`
    slide.style.transition = '.7s'

    slide.addEventListener('transitionend', () => {
        move--
        if (move === -1) { status = 'standing' }
        dots.forEach(dot => {
            dot.classList.remove('active')
        })
        dots[index - 1].classList.add('active')
    })


}

slide.addEventListener('transitionend', () => {
    getSlide()

    if (slides[index].id === firstClone.id) {

        slide.style.transition = 'none'
        index = 1;
        console.log(index);
        slide.style.transform = `translateX(${-slideWidth * index}px)`
        dots.forEach(dot => {
            dot.classList.remove('active')
        })
        dots[index - 1].classList.add('active')
    }
    if (slides[index].id === lastClone.id) {

        slide.style.transition = 'none'
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`
    }
})




nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPrevSlide)

dots.forEach(dot => {
    dot.onclick = function (e) {
        const dotIndex = e.target.dataset.dot
        index = dotIndex
        slide.style.transform = `translateX(${-slideWidth * index}px)`
        slide.style.transition = '.7s'
        slide.addEventListener('transitionend', () => {
            dots.forEach(dot => {
                dot.classList.remove('active')
            })
            this.classList.add('active')
        })
    }
})

// startSlide()

