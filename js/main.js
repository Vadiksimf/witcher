/*new WOW().init();*/

var mySwiper = new Swiper('.swiper-container', {
    //spaceBetween: 100,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.btn-nav'
    },
    breakpoints: {
      540: {
        slidesPerView: 2
      }
  }
});

var menuButton = document.querySelector('.burger');
var menu = document.querySelector('nav');
menuButton.addEventListener('click', function () {
console.log('Click')
menuButton.classList.toggle('burger-active');
menu.classList.toggle('nav-active');
});


/*.addEventListener('click', function () {
  console.log('Click!')
  menuButton.classList.toggle('burger-active');
  menuButton.classList.toggle('nav-active');
})*/

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