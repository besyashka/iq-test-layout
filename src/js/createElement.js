// Функция для создание HTML-элементов
export const createElement = (tag, className, parent, textContent = null) => {
  const element = document.createElement(tag);
  element.className = className;

  if (textContent) {
    element.textContent = textContent;
  }

  parent.append(element);
  return element;
};