const axios = require('axios');

async function fetchCEPResponse(cep) {
  const data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  return data;
};

module.exports = { fetchCEPResponse };
