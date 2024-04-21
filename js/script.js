$('.btn_menu').on('click', function () {
    $('.header-nav, .btn_menu, body').toggleClass('is_active');
})

$('.nav__link').on('click', function () {
    $('.header-nav, .btn_menu, body').removeClass('is_active');
})


$('.network-slider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    swipeToSlide: true,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 900,
    asNavFor: '.network-nav',
    // variableWidth: true,
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                centerPadding: '0px',
            }
        }
    ]
});

$('.network-nav').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    // centerMode: true,
    vertical: true,
    asNavFor: '.network-slider',
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                slidesToShow: 4,
                centerPadding: '0px',
            }
        }
    ]
});
