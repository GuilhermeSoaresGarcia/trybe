const express = require('express');
const app = express();
const { recipes } = require('./recipes');
const { drinks } = require('./drinks');


app.use(express.json());

// TODAS AS RECEITAS
app.get('/recipes', function (_req, res) {
  res.json(recipes);
});

// RECEITA POR ID
app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const singleItem = recipes.find(item => String(item.id) === id);
  if (!singleItem) return res.status(404).json({ message: 'Não encontrado!' });

  res.status(200).json(singleItem);
});

//RECEITAS POR NOME
app.get('/recipes/name/:name', (req, res) => {
  const { name } = req.params;
  const itemsByName = recipes
    .filter(item => String((item.name).toLowerCase())
      .includes(String(name).toLowerCase()));
  if (itemsByName.length === 0) return res.status(404).json({ message: 'Não encontrado!' });

  res.status(200).json(itemsByName);
});

// TODOS OS DRINKS
app.get('/drinks', function (_req, res) {
  res.json(drinks);
});

// CADASTRANDO VIA POST NOVA BEBIDA
app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.send(`Bebida ${name} adicionada com sucesso!`);
});

// DRINKS POR PREÇO, MAIOR OU IGUAL (usando query)
app.get('/drinks/search', (req, res) => {
  const { price } = req.query;
  const itemsByPrice = drinks.filter((item) => item.price >= Number(price));

  if (!itemsByPrice) return res.status(404).json({ message: 'Não encontrado' });

  res.status(200).json(itemsByPrice);
});

// DRINKS POR ID
app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const singleItem = drinks.find(item => String(item.id) === id);
  if (!singleItem) return res.status(404).json({ message: 'Não encontrado!' });

  res.status(200).json(singleItem);
});

// DRINKS POR NOME USANDO PARAMS
app.get('/drinks/name/:name', (req, res) => {
  const { name } = req.params;
  const itemsByName = drinks
    .filter(item => String((item.name).toLowerCase())
      .includes(String(name).toLowerCase()));
  if (itemsByName.length === 0) return res.status(404).json({ message: 'Não encontrado!' });

  res.status(200).json(itemsByName);
});


// CONEXÃO DO EXPRESS NA PORTA INDICADA
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});