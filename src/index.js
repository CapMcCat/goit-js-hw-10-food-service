import './sass/main.scss';
import cards from './menu.json';
import tmplCards from './templates/template-cards.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('.js-menu'),
  switchBtn: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const cardsMarkup = createCardsMarkup(cards);

refs.menu.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(cards) {
  return tmplCards(cards);
}

//step2

refs.body.classList.add(Theme.LIGHT); //Theme by default
refs.switchBtn.addEventListener('change', onSwitchBtnClick);

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switchBtn.checked = true;
}

function onSwitchBtnClick(evt) {
  if (refs.switchBtn.checked) {
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
