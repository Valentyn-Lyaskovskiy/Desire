$(function () {
  $(".header__btn").on("click", function () {
    $(".right-side-menu").removeClass("right-side-menu_close");
  });
  $(".right-side-menu__btn").on("click", function () {
    $(".right-side-menu").addClass("right-side-menu_close");
  });

  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $(".contact__slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
  });

  $(".blog__article-slider-box").slick({
    prevArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="./images/slider-left-arrow.svg" alt="arrow icon"></button>',
    nextArrow:
      '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="./images/slider-arrow-right.png" alt="arrow icon"></button>',
  });
});

var mixer = mixitup(".gallery__inner", {
  load: {
    filter: ".office",
  },
});
