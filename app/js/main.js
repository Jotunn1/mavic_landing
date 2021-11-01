$(function () {
    $('.products__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<button class="slider-btn slider-btn-left"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="slider-btn slider-btn-right"><img src="images/arrow-right.svg" alt="arrow-right"></button>'
    });
})