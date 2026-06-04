import '../scss/style.scss';
import {openMenu} from "@/js/open-menu.js";
import {initSwiper} from "@/js/review-swiper.js";
import {openModal} from "@/js/open-modal.js";
import {showSuccessPopup} from "@/js/success-popup.js";
import {scrollReveal} from "@/js/scroll-reveal.js";

document.addEventListener('DOMContentLoaded', () => {
  openMenu()
  initSwiper();
  openModal("application-modal", "open-modal");
  showSuccessPopup()
  scrollReveal()
})