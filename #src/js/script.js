$(document).ready(function(){
  // Slider in section-interface
  if($('*').is('.slider')) {
    $('.slider').slick({
      arrows: false,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      variableWidth: true,
      draggable: false,
    });
  }
  // Slider in section-reviews
  if($('*').is('.slider-author')) {
    $('.slider-author').slick({
      arrows: true,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      asNavFor: ".slider-review"
    });
  }
  if($('*').is('.slider-review')) {
    $('.slider-review').slick({
      arrows: false,
      slidesToShow: 1,
      asNavFor: ".slider-author"
    });
  }
});