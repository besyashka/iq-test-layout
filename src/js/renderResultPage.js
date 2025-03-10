import { createElement } from './createElement.js';
import { toggleHidden } from './toggleVisibility.js';
import { handleClickButtonCall } from './eventHandlers.js';

// Функция для рендеринга страницы Result
export const renderResultPage = () => {
  const testContainer = document.querySelector('.test__container');
  testContainer.classList.add('result');

  const footer = document.querySelector('.footer');
  footer.classList.add('footer__result');

  updateHeaderTitle();
  clearContainers(testContainer, footer);
  toggleHidden(['.footer']);

  createElement('h4', 'result__title', testContainer, 'Ваш результат рассчитан:');
  createElement(
    'p',
    'result__description',
    testContainer,
    'вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону!'
  );
  createElement('h5', 'result__subtitle', testContainer, 'Скорее получите свой результат!');
  createElement(
    'p',
    'result__info',
    testContainer,
    'В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона'
  );

  renderTimer(testContainer);
  renderButtonLinkCall(testContainer);

  createElement('div', 'result__data', testContainer);
  createElement(
    'span',
    'text_xs',
    footer,
    'TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, '
  );

  addAdditionalBackgrounds();
};

// Функция чтоб обновить заголовок в header
const updateHeaderTitle = () => {
  const title = document.querySelector('.header__title');
  title.className = 'result__header__title';
  title.textContent = 'ГОТОВО!';
};

// Функция для очистки testContainer, footer перед рендериндгом страницы Result
const clearContainers = (testContainer, footer) => {
  testContainer.innerHTML = '';
  footer.innerHTML = '';
};

// Функция для рендеринга timer
const renderTimer = (testContainer) => {
  const timerContainer = createElement('div', 'timer__container', testContainer);
  createElement('span', 'timer__title', timerContainer, 'Звоните скорее, запись доступна всего');

  const timer = createElement('div', 'timer', timerContainer);
  createElement('span', 'timer__value', timer, '10:00 ');
  createElement('span', 'timer__text', timer, 'минут');
};

// Функция для рендеринга кнопки-ссылки звонка
const renderButtonLinkCall = (testContainer) => {
  const link = createElement('a', 'result__button-link', testContainer, '');
  link.href = 'tel:+00000000000';

  const img = createElement('img', 'button-link__img', link);
  img.src = './img/svg/telephone.svg';

  createElement('span', 'button-link__text', link, 'Позвонить и прослушать результат');

  handleClickButtonCall(link);
};

// Функция для добавления молний на общий фон
const addAdditionalBackgrounds = () => {
  const imgR = createElement('img', 'right', document.body);
  imgR.src = './img/png/thunderstorm-right-result.png';
  const imgL = createElement('img', 'left', document.body);
  imgL.src = './img/png/thunderstorm-left.png';
};