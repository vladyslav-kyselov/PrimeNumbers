document.addEventListener('DOMContentLoaded', buttonClick);

function buttonClick() {
  document.getElementById('button-click').addEventListener('click', onCalculcateWordsButtonClick);
}

function primeNumbers(number) {
  let isPrime;
  let arrayNumbers = new Array('2');
  let count = 1;
  if (number >= 3) {
    for (let i = 3; i <= number; i++) {
      for (let j = 2; j < i; j++ ) {
        if (i % j == 0) {
          isPrime = '';
          break;
        } else {
          isPrime = i;
        }
      }
      count += (isPrime ? 1 : 0);
      arrayNumbers.push(isPrime);
    }
    arrayNumbers = arrayNumbers.join(' ');
  } else if (number.length == 0) {
    arrayNumbers.splice(0);
    arrayNumbers.push(' поле пустое');
    count=0;
  } else if (number < 2) {
    arrayNumbers.splice(0);
    arrayNumbers.push('Вы ввели не простое число.');
    count=0;
  }
  return [arrayNumbers, count];
}

function onCalculcateWordsButtonClick() {
  let line = document.getElementById('input').value;
  let output = primeNumbers(line);
  document.getElementById('numbers').innerHTML = 'Простые числа: ' + output[0];
  document.getElementById('count').innerHTML = 'Количество простых чисел: ' + output[1];
}
