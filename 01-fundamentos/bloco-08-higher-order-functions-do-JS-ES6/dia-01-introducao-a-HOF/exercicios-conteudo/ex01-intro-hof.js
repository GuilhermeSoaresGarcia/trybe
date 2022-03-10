const wakeUp = () => 'Acordando!!';

const drinkCoffee = () => 'Bora tomar café!!';

const letsSleep = () => 'Partiu dormir!!';

function doingThings (callback) {
  return callback();
}

console.log(doingThings(letsSleep))