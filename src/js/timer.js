let timer;

// Функция для старта таймера
export const startTimer = (timerValue) => {
  let minutes = 10;
  let seconds = 0;

  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        stopTimer();
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    const filledMinutes = String(minutes).padStart(2, '0');
    const filledSeconds = String(seconds).padStart(2, '0');

    timerValue.textContent = `${filledMinutes}:${filledSeconds}`;
  }, 1000);
};

// Функция для остановки таймера
export const stopTimer = () => {
  const buttonLink = document.querySelector('.result__button-link');
  buttonLink.classList.add('disabled');
  clearInterval(timer);
};
