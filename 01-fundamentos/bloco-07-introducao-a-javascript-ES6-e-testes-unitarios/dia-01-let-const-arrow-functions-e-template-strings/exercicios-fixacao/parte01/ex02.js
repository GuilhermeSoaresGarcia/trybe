const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// let correctedNumbers = oddsAndEvens.sort((a, b) => a - b);

//FONTE: https://en.wikipedia.org/wiki/Bubble_sort
function bubbleSort() {
  // let count = 1;
  // while (count >= 0) {
    let a;
    let b;
    let temp;
    let comprimento = oddsAndEvens.length;
    for (i = 1; i < comprimento; i += 1) {
      a = oddsAndEvens[i - 1];
      b = oddsAndEvens[i];
      if (oddsAndEvens[i - 1] > oddsAndEvens[i]) {
        temp = a;
        a = b;
        b = temp;
        oddsAndEvens[i - 1] = a;
        oddsAndEvens[i] = b;
        // count += 2;
      } else {
        oddsAndEvens[i - 1] = a;
        oddsAndEvens[i] = b;
        // count -= 1;
      }
    }
    comprimento -=1
  // }
  return oddsAndEvens;
}

console.log(`Os números ${bubbleSort()} se encontram ordenados de forma crescente!`);