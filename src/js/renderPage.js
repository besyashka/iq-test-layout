import { questions } from './questions.js';
import { state } from './state.js';
import { createElement } from './createElement.js';
import { updateAnswerSelection, handleClickButtonNext } from './eventHandlers.js';
import { renderResultPage } from './renderResultPage.js';

// Функция для рендеринга страницы Test
export const renderPage = () => {
  const main = document.querySelector('.main');
  const testContainer = createElement('div', 'test__container', main);

  renderHeaderTitle();
  renderProgressBar(testContainer);
  renderQuestion(testContainer);

  const imgQuestion = createElement('img', 'test__question__img', testContainer);
  const form = createElement('form', 'form', testContainer);

  renderAnswers(form);
  renderButtonNext(testContainer, imgQuestion, form);

  return testContainer;
};

// Функция для рендеринга заголовка в header
const renderHeaderTitle = () => {
  const headerLogoTitle = document.querySelector('.header__logo-title');
  headerLogoTitle.classList.remove('hidden');
  createElement('h1', 'header__title', headerLogoTitle, 'тест на определение IQ');
};

// Функция для рендеринга прогресс-бара
const renderProgressBar = (testContainer) => {
  const progressBar = createElement('progress', 'test__progress-bar', testContainer);
  progressBar.id = 'progress-bar';
  progressBar.value = 8.33;
  progressBar.max = 100;
};

// Функция для рендеринга вопроса
const renderQuestion = (testContainer) => {
  createElement('h2', 'test__question', testContainer, questions[state.index].question);
};

// Функция для рендеринга картинки-вопроса, если она есть
export const renderImageQuestion = (imgQuestion) => {
  if (questions[state.index].image) {
    imgQuestion.src = questions[state.index].image;
    imgQuestion.classList.remove('hidden');
  } else {
    imgQuestion.classList.add('hidden');
    return;
  }
};

// Функция для рендеринга вариантов ответа
export const renderAnswers = (form) => {
  questions[state.index].answers.forEach((answer, i) => {
    const option = createElement('div', 'option', form);
    const input = createElement('input', 'input', option);
    input.type = 'radio';
    input.name = 'answer';
    input.id = `answer-${i}`;
    input.value = answer;

    const label = createElement('label', 'label', option, answer);
    label.setAttribute('for', `answer-${i}`);

    updateAnswerSelection(form);
  });
};

// Функция для рендеринга кнопки Next
const renderButtonNext = (testContainer, imgQuestion, form) => {
  const nextButton = createElement('button', 'button-next', testContainer, 'ДАЛЕЕ');
  nextButton.disabled = true;

  handleClickButtonNext(nextButton, imgQuestion, form, questions);
};

// Функция для рендеринга процесса обработки результата
export const renderProcessingOfResult = () => {
  const testContainer = document.querySelector('.test__container');
  testContainer.style.justifyContent = 'start';

  createElement('h3', 'processing-result__title', testContainer, 'Обработка результатов');
  renderPreloader(testContainer);
};

// Функция для рендеринга preloader
const renderPreloader = (testContainer) => {
  const preloader = createElement('div', 'preloader', testContainer);
  const preloaderImg = createElement('img', 'preloader__image', preloader);
  preloaderImg.src = './img/svg/preloader.svg';

  createElement(
    'p',
    'processing-result__text',
    testContainer,
    'Определение стиля мышления........... .... ...................................................'
  );

  setTimeout(() => {
    renderResultPage();
  }, 2000);
};