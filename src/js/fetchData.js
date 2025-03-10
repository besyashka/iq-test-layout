import { createElement } from './createElement.js';

//Функция для полученных данных из API
export const fetchData = () => {
  const url = 'https://swapi.dev/api/people/1/';

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        return null;
      } else {
        return response.json();
      }
    })
    .then((data) => outputReceivedData(JSON.stringify(data)));
};

// Функция для отображения полученных данных
const outputReceivedData = (jsonData) => {
  const divResult = document.querySelector('.result__data');
  const data = JSON.parse(jsonData);
  divResult.innerHTML = '';

  for (let key in data) {
    createElement('p', 'data', divResult, `${key}: ${data[key]}`);
  }

  document.querySelector('.result').classList.add('hight-auto');
};