import menuTpl from '../templates/menu.hbs';
import menu from '../menu.json';

const ulEl = document.querySelector('.js-menu');
ulEl.innerHTML = menuTpl(menu);

