$(function () {
    $('.products__slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        prevArrow: '<button class="slider-btn slider-btn-left"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="slider-btn slider-btn-right"><img src="images/arrow-right.svg" alt="arrow-right"></button>'
    });
    $(".questions__item-title").on("click", function () {
        $(".questions__item").removeClass("questions__item--active");
        $(this).parent().addClass("questions__item--active");
    });
    $("#fullpage").fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.page__section'
    });
})