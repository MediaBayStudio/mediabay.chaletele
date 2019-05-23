(function ($) {
  $(document).ready(function () {
    $(`.rooms__list`).slick({
      dots: true,
      arrows: false,
      mobileFirst: true,
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: true,
            arrows: true,
            centerMode: true,
            infinite: true,
            focusOnSelect: true,
            centerPadding: `0px`,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1023,
          settings: {
            dots: false,
            arrows: true,
            centerMode: true,
            infinite: true,
            focusOnSelect: true,
            centerPadding: `0px`,
            slidesToShow: 3,
          }
        }
      ]
    });
  });
})(jQuery);
