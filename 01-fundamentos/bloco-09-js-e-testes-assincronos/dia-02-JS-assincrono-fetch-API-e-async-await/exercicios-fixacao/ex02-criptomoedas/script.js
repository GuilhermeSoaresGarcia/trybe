// const criptoCoins = []

async function requestAPI() {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const data = await response.json();
    const criptoCoins = data.data.filter((criptoCoin) => Object.values(criptoCoin.rank) < 6);
    // console.log(criptoCoins);
    bla(criptoCoins);

  } catch (error) {
    console.log(`Eitcha, ferrou... ${error}`);
  }
}

requestAPI();

function bla(param) {
  const cripto = document.getElementById('criptomoedas');
  const p = document.createElement('p');
  cripto.appendChild(p)
    .innerHTML += `Nome da moeda: ${param.map((element) => element.name)}
    Rank: ${param.map((element) => element.rank)}
    Symbol: ${param.map((element) => element.symbol)}
    Value: ${Number(param.map((element) => element.vwap24Hr)).toFixed(2).replace('.',',')}`    
};

