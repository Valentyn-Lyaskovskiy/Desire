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
    autoplay: true
  });
});

var mixer = mixitup('.gallery__inner', {
  load: {
    filter: '.office'
  }
});
