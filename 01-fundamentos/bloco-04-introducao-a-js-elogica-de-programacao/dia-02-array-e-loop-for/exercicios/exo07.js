let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = numbers[0] + 1;

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < numbers[i + 1] && numbers[i] < smaller) {
    smaller = numbers[i];
  } else if (numbers[i] > numbers[i + 1] && numbers[i + 1] < smaller) {
    smaller = numbers[i + 1];
  }
}

console.log(smaller);
