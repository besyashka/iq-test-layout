import { questions } from './questions.js';
import { state } from './state.js';
import { updateAnswerSelection, handleClickButtonNext } from './eventHandlers.js';

// Функция для создание HTML-элементов
const createElement = (tag, className, parent, textContent = null) => {
  const element = document.createElement(tag);
  element.className = className;

  if (textContent) {
    element.textContent = textContent;
  }

  parent.append(element);
  return element;
};

// Функция для рендеринга страницы Test
export const renderPage = () => {
  const body = document.body;
  const testContainer = createElement('div', 'test__container', body);

  renderHeaderTitle();
  renderProgressBar(testContainer);
  renderQuestion(testContainer);

  const form = createElement('form', 'form', testContainer);

  renderAnswers(form);
  renderButtonNext(testContainer, form);

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
const renderButtonNext = (testContainer, form) => {
  const nextButton = createElement('button', 'button-next', testContainer, 'ДАЛЕЕ');
  nextButton.disabled = true;

  handleClickButtonNext(nextButton, form, questions);
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
};