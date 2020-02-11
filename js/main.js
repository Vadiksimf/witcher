/*new WOW().init();*/

var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 100,
    slidesPerView: 2,
    loop: true,
    navigation: {
      nextEl: '.btn-nav'
    },
});

/*
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })*/