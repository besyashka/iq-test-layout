// Функция для переключения класса 'hidden'
export const toggleHidden = (elements) => {
  elements.forEach((element) => {
    const elementToToggle = document.querySelector(element);
    elementToToggle.classList.toggle('hidden');
  });
};

// Функция для добавления класса 'hidden'
export const addHidden = (elements) => {
  elements.forEach((element) => {
    element.classList.add('hidden');
  });
};