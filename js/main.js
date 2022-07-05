
// Элементы формы
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

// Находим все input на странице
const inputs = document.querySelectorAll('input');

// Находим радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');



// Базовая цена
const basePrice = 6000;

// Присваиваем в переменную span в который мы будем выводить итоговую сумму
const totalPriceElement = document.querySelector('#total-price');

// Создаем функцию, которая умножает базовою сумму с числом введенным в input
// input принимает строки и что бы строки перевести в числа(number), есть функция parseInt(возвращает челое число 1.5 не считает, а считает 1)
function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value);

for (const radio of radioType) {
  if (radio.checked === true) {
  // parseFloat - вернет не целое число, а 1,5; 1,3
       totalPrice = totalPrice * parseFloat(radio.value);
  }
}

  // Создаем переменную которая отформатирует цифры поставив пробелы
  const formatter = new Intl.NumberFormat('ru');
  formatter.format(totalPrice);

  // Записываем в span сумму которая у нас получилась
  totalPriceElement.innerText = formatter.format(totalPrice);
}

// Вызываем функцию
calculate();


// Связка range c текстовым полем
// Слушаем событие input
squareRange.addEventListener('input', () => {
  squareInput.value = squareRange.value;
});

//Связка текстового поля с range
squareInput.addEventListener('input', () => {
  squareRange.value = squareInput.value;
});

//Обходим всю колекцию input и вызов функции рассчета
for (const input of inputs) {
  input.addEventListener('input', () => {
    calculate();
  });
}
