import '../scss/style.scss';
import {openMenu} from "@/js/open-menu.js";
import {initSwiper} from "@/js/review-swiper.js";

document.addEventListener('DOMContentLoaded', () => {
  openMenu()
  initSwiper();
})