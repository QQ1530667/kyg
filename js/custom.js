$(document).ready(function () {
// nav menu
$(".navBtn").click(function () {
  $(this).toggleClass("active");
  $(".navMenu").toggleClass("active");
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
  $(".loader ").fadeOut("slow");
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
