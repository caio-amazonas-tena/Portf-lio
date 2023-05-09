const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const cardSroll = document.querySelector('.about-me-scroll');
let pxls = 0;

btnRight.addEventListener('click', function() {
    pxls = pxls + 100;
    cardSroll.style = `transform: translateX(${pxls}px)`;
})

btnLeft.addEventListener('click', function() {
    pxls = pxls - 100;
    cardSroll.style = `transform: translateX(${pxls}px)`;
})