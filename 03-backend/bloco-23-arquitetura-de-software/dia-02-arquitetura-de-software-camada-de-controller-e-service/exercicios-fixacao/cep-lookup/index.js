const express = require('express');

const cepModule = require('./models/CEP');
const { fetchCEPResponse } = require('./services/fetchApi')

const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: "pong!" });
});

app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;
  const regex = /^\d{5}-?\d{3}$/;
  const cepValidation = regex.test(cep);
  if (!cepValidation) return (res.status(400).json({ error: { code: "invalidData", message: "CEP inválido" } }));
  const getCEP = await cepModule.findCEP(cep);
  if (getCEP.length === 0) return (res.status(404).json({ error: { code: "invalidData", message: "CEP inexistente no banco de dados" } }));
  res.status(200).json({ message: getCEP });
});

app.post('/cep/:cep', async (req, res) => {
  try {
    const regex = /^\d{5}-?\d{3}$/;
    const cepValidation = regex.test(req.params.cep);
    if (!cepValidation) return (res.status(400).json({ error: { code: "invalidData", message: "CEP inválido" } }));
    const { data: { cep, logradouro, bairro, localidade, uf } } = await fetchCEPResponse(req.params.cep);
    cepModule.insertNewCEP(cep.replace('-', ''), logradouro, bairro, localidade, uf);
    res.status(200).json({ message: { cep, logradouro, bairro, localidade, uf } });
  }
  catch (err) {
    console.log(`Erro na requisição: ${err}`)
  }
}
);

app.listen(3000, () => {
  console.log('Rodando na porta 3000');
});