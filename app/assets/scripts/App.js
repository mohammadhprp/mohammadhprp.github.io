import css from '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll';


new RevealOnScroll(document.querySelectorAll(".skill-image"), 80)
new RevealOnScroll(document.querySelectorAll(".python"), 60)
new MobileMenu();


if (module.hot) {
  module.hot.accept()
}
