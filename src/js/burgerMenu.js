import { state } from './state.js';
import { removeElement } from './removeElement.js';

// Функция для обработки клика по бургер-меню
export const handleClickBurgerMenu = () => {
  const navigation = document.querySelector('.nav');
  const buttonBurger = document.querySelector('.burger-menu');

  buttonBurger.addEventListener('click', () => {
    return buttonBurger.classList.contains('open')
      ? closeBurgerMenu(buttonBurger, navigation)
      : openBurgerMenu(buttonBurger, navigation);
  });

  handleClickNavigationLink(buttonBurger, navigation);
  handleClickOutside(buttonBurger, navigation);
};

// Функция для открытия бургер-меню
const openBurgerMenu = (buttonBurger, navigation) => {
  navigation.classList.add('active');
  buttonBurger.classList.add('open');
  document.body.classList.add('no-scroll');
};

// Функция для закрытия бургер-меню
const closeBurgerMenu = (buttonBurger, navigation) => {
  navigation.classList.remove('active');
  buttonBurger.classList.remove('open');
  document.body.classList.remove('no-scroll');
};

// Функция для обработки кликов по ссылкам в навигации
const handleClickNavigationLink = (buttonBurger, navigation) => {
  const navigationLinks = document.querySelectorAll('.nav__link');

  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeBurgerMenu(buttonBurger, navigation);

      if (document.querySelector('.test__container')) {
        removeElement();
        state.reset();
      }
    });
  });
};

// Функция для обработки кликов за пределы бургер-меню
const handleClickOutside = (buttonBurger, navigation) => {
  document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    if (!navigation.contains(clickedElement) && !buttonBurger.contains(clickedElement)) {
      closeBurgerMenu(buttonBurger, navigation);
    }
  });
};