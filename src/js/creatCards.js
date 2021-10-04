import cardsTemplate from '../templates/menuCard.hbs';
import menuData from '../json/menu.json';

const menu = cardsTemplate(menuData);
const menuItem = document.querySelector('.js-menu');

menuItem.insertAdjacentHTML('beforeend', menu);
