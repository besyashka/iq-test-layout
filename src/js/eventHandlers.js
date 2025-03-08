import { renderPage, renderImageQuestion, renderAnswers, renderProcessingOfResult } from './renderPage.js';
import { state } from './state.js';
import { addHidden, toggleHidden } from './toggleVisibility.js';
import { updateProgressBar } from './progressBar.js';

// Функция для обработки событий для кнопок 'проийти тест'
export const handleClickButtonTest = () => {
  document.querySelectorAll('.button-test').forEach((button) => {
    button.addEventListener('click', () => {
      renderPage();
      toggleHidden(['.main__container', '.footer']);
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
export const handleClickButtonNext = (nextButton, imgQuestion, form, questions) => {
  nextButton.addEventListener('click', () => {
    const question = document.querySelector('.test__question');
    state.index++;

    if (state.index < questions.length) {
      question.textContent = questions[state.index].question;
      form.innerHTML = '';

      renderImageQuestion(imgQuestion);
      renderAnswers(form);
      updateProgressBar();
    } else {
      addHidden([question, imgQuestion, form, nextButton]);
      renderProcessingOfResult();
    }
  });
};