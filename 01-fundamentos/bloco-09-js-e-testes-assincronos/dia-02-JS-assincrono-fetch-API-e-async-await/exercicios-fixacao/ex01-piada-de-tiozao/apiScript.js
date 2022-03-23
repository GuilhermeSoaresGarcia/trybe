// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(itemDoGeisaum => (itemDoGeisaum.joke));
};

function append(piadaDeTiozao) {
  const h2 = document.getElementById('jokeContainer');
  h2.innerText = piadaDeTiozao;
}

window.onload = () => {
  fetchJoke()
  append(fetchJoke())
};