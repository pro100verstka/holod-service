import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initSwiper() {
  new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    }
  })
}