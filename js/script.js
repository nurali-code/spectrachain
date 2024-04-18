$('.btn__menu').on('click', function () {
    $('.header-nav, .btn__menu, body').toggleClass('is_active');
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
    asNavFor: '.network-nav',
    variableWidth: true,
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
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.network-slider',
    focusOnSelect: true,
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
