let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let larger = 0;

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > numbers[i + 1] && numbers[i] > larger) {
    larger = numbers[i]
  } else if (numbers[i] < numbers[i + 1] && numbers[i + 1] > larger) {
    larger = numbers[i + 1]
  }
}

console.log(larger);
