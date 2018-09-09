$(window).on('load', function() {
  $('#loader').fadeOut();
  $('#preloader').delay(400).fadeOut('slow');
  $('body').delay(400).css({ 'overflow': 'visible' });
})

$(function() {
  //initialize swiper when document ready
  mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    fadeEffect: {
      crossFade: true
    },
    speed: 1200,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
  mySwiper.init();

});