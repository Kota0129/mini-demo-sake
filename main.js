$(function () {
  var $header = $(".header");
  var headerHeight = $header.outerHeight();

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > headerHeight) {
      $header.addClass("is-fixed");
    } else {
      $header.removeClass("is-fixed");
    }
  });

  $(".hamburger").on("click", function () {
    $(this).toggleClass("active");
    $(".header").toggleClass("active");
  });

  $(".mask").on("click", function () {
    $(".header").removeClass("active");
    $(".hamburger").removeClass("active");
  });

  $(".nav-list a").on("click", function () {
    $(".header").removeClass("active");
    $(".hamburger").removeClass("active");
  });

  $(window).on("scroll", function () {
    $(".fadein").each(function () {
      const elemPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  });

  $(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
  });

  $('a[href*="#"]').on("click", function (event) {
    const href = $(this).attr("href");
    const url = new URL(href, location.href);
    const hash = url.hash;

    if (url.pathname === location.pathname && hash) {
      const target = $(hash);
      if (target.length) {
        event.preventDefault();
        const position = target.offset().top - 100;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
      }
    }
  });

  const hash = window.location.hash;
  if (hash) {
    const target = $(hash);
    if (target.length) {
      const position = target.offset().top - 100;
      $("html, body").animate({ scrollTop: position }, 600, "swing");
    }
  }
});
