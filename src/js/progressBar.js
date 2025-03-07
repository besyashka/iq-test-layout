// Функция для обновления прогресс-бара
export const updateProgressBar = () => {
  const progressBar = document.querySelector('.test__progress-bar');
  progressBar.value += 8.33;
};