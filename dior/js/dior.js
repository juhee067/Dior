AOS.init({
  duration: 1200,
});

$(function () {
  $(".header_slick").slick({
    arrows: false,
    autoplay: true,
  });

  $("#utb").YTPlayer({
    videoURL: "./img/special.mp4",
    containment: ".player",
  });
  $(".perfum_play").on("click", function (e) {
    e.preventDefault();
    $("#utb").YTPFullscreen();
  });
  $(".footer_menu i").on("click", function () {
    $(".footer_menu").toggleClass("active");
  });

  $(".perfum_array .perfum_img i").on("click", function () {
    //e.preventDefault();
    //console.log($(this).parent().index());
    var idx = $(this).index();
    $(".perfum_array .perfum_img i").removeClass("on");
    $(".perfum_array .perfum_img i").eq(idx).addClass("on");
    $(".perfum_array .perfum_img i").removeClass("on");
    $(this).addClass("on");
  });

  $(".slick_slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
  });

  $(".rip_color figure").on("click", function () {
    //e.preventDefault();
    //console.log($(this).parent().index());
    var idx = $(this).index();
    $(".best .container .content").removeClass("on");
    $(".best .container .content").eq(idx).addClass("on");
    $(".rip_color figure").removeClass("on");
    $(this).addClass("on");
  });

  $(".content_img figure").on("mouseenter", function () {
    var idx = $(this).index();
    $(".gift .content ul>li").eq(idx).addClass("on");
  });

  $(".content_img figure").on("mouseleave", function () {
    $(".gift .content ul>li").removeClass("on");
  });
});
