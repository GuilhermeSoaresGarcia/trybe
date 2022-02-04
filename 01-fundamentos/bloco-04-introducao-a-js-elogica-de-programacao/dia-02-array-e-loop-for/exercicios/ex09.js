let arrayOfNumbers = [];
let number = 0;
let half;
let arrayOfNumbersDividedByTwo = [];


for (i = 0; i < 25; i += 1) {
  number = number + 1;
  arrayOfNumbers.push(number);
}

for (i = 0; i < arrayOfNumbers.length; i += 1) {
  half = arrayOfNumbers[i] / 2;
  arrayOfNumbersDividedByTwo.push(half);
}

console.log(arrayOfNumbersDividedByTwo);





