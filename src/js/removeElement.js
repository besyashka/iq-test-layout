import { toggleHidden } from './toggleVisibility.js';

// Функция для удаления элементов
export const removeElement = () => {
  const elements = [
    '.header__title',
    '.header__title',
    '.result__header__title',
    '.test__container',
    '.result__data',
    '.footer__result',
    '.test__question',
  ];

  elements.forEach((name) => {
    const element = document.querySelector(name);
    if (element) {
      element.remove();
    }
  });

  toggleHidden(['.header__logo-title', '.main__container', '.footer']);
};