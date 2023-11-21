/* View Components */
import FooterView from '../views/components/footer-view.js';
import HeaderView from '../views/components/header-view.js';

/* Component Logic */
import FooterController from './components/footer-controller.js';
import HeaderController from './components/header-controller.js';

/* Main Logic */
import MainController from './main/main-controller.js';

const modules = [
  FooterView,
  FooterController,
  HeaderView,
  HeaderController,
  MainController
];

document.addEventListener('DOMContentLoaded', () => {
  modules.forEach(module => module.init());
});
