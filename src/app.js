document.addEventListener('DOMContentLoaded', buttonClick);

function buttonClick() {
  document.getElementById('button-click').addEventListener('click', onCalculcateWordsButtonClick);
}

function primeNumbers(number, counter) {
  let checkNumber =0;
  let allNumbers='';
  let numberOfDigit=0;
  if (number>=3) {
    counter =0;
    for (let i = 3; i <= number; i++) {
      for (let j =2; j < i; j++ ) {
        if ( i % j == 0 ) {
          checkNumber = '';
          counter =0;
          break;
        } else {
          checkNumber= ' ' + i;
          counter=1;
        }
      }
      allNumbers = allNumbers + checkNumber+'';
      numberOfDigit = counter + numberOfDigit;
    }
    allNumbers = 'Простые числа в диапазоне [1..'+number+'] : 2' +allNumbers;
    numberOfDigit = 'Всего чисел: '+(numberOfDigit+1);
  }
  if (number == 2) {
    allNumbers= 'Простые числа в диапазоне [1..'+number+'] : ' + 2;
    numberOfDigit ='Всего чисел: ' + 1;
  }
  if (number == 1 || number == 0) {
    allNumbers ='Не простое число.';
    numberOfDigit = '';
  }
  if (number <0 ) {
    allNumbers='Введите положительное число.';
    numberOfDigit = '';
  }
  if (number.length == 0) {
    allNumbers='Пожалуйста, введите число.';
    numberOfDigit = '';
  }
  let resultArray = [allNumbers, numberOfDigit];
  return resultArray;
}

function onCalculcateWordsButtonClick() {
  let line = document.getElementById('input').value;
  let output = primeNumbers(line);
  document.getElementById('numbers').innerHTML = output[0];
  document.getElementById('count').innerHTML = output[1];
}
