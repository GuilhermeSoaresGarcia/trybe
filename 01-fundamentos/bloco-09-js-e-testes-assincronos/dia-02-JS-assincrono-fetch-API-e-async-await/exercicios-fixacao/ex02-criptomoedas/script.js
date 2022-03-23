async function requestAPI() {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const data = await response.json();
    const criptoCoins = data.data.filter((criptoCoin) => Object.values(criptoCoin.rank) < 6);
    console.log(criptoCoins);

  } catch (error) {
    console.log(`Eitcha, ferrou... ${error}`);
  }
}

requestAPI();

