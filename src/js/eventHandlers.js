import { renderPage, renderAnswers, renderProcessingOfResult } from './renderPage.js';
import { state } from './state.js';
import { addHidden, toggleHidden } from './toggleVisibility.js';

// Функция для обработки событий для кнопок 'проийти тест'
export const handleClickButtonTest = () => {
  document.querySelectorAll('.button-test').forEach((button) => {
    button.addEventListener('click', () => {
      renderPage();
      toggleHidden(['.main', '.footer']);
    });
  });
};

// Обновить выбор ответа в форме
export const updateAnswerSelection = (form) => {
  form.addEventListener('change', (e) => {
    state.answers[state.index] = e.target.value;
    const buttonNext = document.querySelector('.button-next');
    buttonNext.disabled = false;
  });
};

// Функция для обработки событий по кнопке 'далее'
export const handleClickButtonNext = (nextButton, form, questions) => {
  nextButton.addEventListener('click', () => {
    const question = document.querySelector('.test__question');
    state.index++;

    if (state.index < questions.length) {
      question.textContent = questions[state.index].question;
      form.innerHTML = '';

      renderAnswers(form);
    } else {
      addHidden([question, form, nextButton]);
      renderProcessingOfResult();
    }
  });
};