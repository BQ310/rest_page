import './styles/style.css';
import './styles/home.css';
import './styles/menu.css';

import first from './functions/first.js';
import home from './pages/home.js';
import menu from './pages/menu.js';

import clear from './functions/clear.js';

first();

const home_tab = document.querySelector('#ht');
const menu_tab = document.querySelector('#mt');

home_tab.addEventListener('click', (e) => {
    clear();
    home();
});

menu_tab.addEventListener('click', (e) => {
    clear();
    menu();
})