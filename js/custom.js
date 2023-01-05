$(document).ready(function () {
  // nav menu
  $(".navBtn").click(function () {
    $(this).toggleClass("active");
    $(".navMenu").toggleClass("active");
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header").addClass("headerAnimate");
    } else {
      $("header").removeClass("headerAnimate");
    }
  });
  // support Btn
  $(".supportBtn").click(function () {
    $(".links").slideToggle(300);
  });
  // 3D Card
  const myAtropos = Atropos({
    el: ".atropos",
    activeOffset: 40,
    shadowScale: 1.05,
    rotateXMax: 25,
    rotateYMax: 25,
    shadow: true,
    shadowOffset: 50,
    shadowScale: 0.9,
    highlight: true,
    onEnter() {},
    onLeave() {},
    onRotate(x, y) {},
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".spinner").fadeOut("slow");
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // aos
  AOS.init({
    offset: 60,
    delay: 50,
    duration: 500,
    // easing: "linear",
    once: true,
  });
  //aos Delay
  function aosDelay() {
    var class_ = "mainSection";
    $("section").each(function (i) {
      class_ = $(this).attr("class");
      if (class_) {
        $("." + class_ + " div[data-aos]").each(function (i) {
          var d = 0;
          d = i * 100;
          $(this).attr("data-aos-delay", d);
          d = 0;
        });
      }
    });
  }
  aosDelay();
  // tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
