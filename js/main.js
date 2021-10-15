// Testimonials
$(document).ready(function(){
  $('.testimonial__content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
  });
});
//  Video
$(document).ready(function () {
  $(".popup-with-zoom-anim").magnificPopup({
      type: "inline",
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: "auto",
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: "my-mfp-zoom-in"
  });
});