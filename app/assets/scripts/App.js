import css from '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".skill-image"), 80)
new MobileMenu();


if (module.hot) {
  module.hot.accept()
}
