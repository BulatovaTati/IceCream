import 'swiper/swiper-bundle.css';
new Swiper('.mySwiper', {
  centeredSlides: true,
  speed: 500,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  preloadImages: false,
});
