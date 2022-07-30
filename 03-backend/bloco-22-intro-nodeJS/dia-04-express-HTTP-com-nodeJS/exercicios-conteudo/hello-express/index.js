const express = require('express');
const app = express();

const { recipes } = require('./recipes');
const { drinks } = require('./drinks');

app.get('/recipes', function (_req, res) {
  res.json(recipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const singleItem = recipes.find(item => String(item.id) === id);
  if (!singleItem) return res.status(404).json({ message: 'Não encontrado!' });

  res.status(200).json(singleItem);
});

app.get('/recipes/name/:name', (req, res) => {
  const { name } = req.params;
  const singleItemByName = recipes
    .filter(item => String((item.name).toLowerCase())
      .includes(String(name).toLowerCase()));
  if (singleItemByName.length === 0) return res.status(404).json({ message: 'Não encontrado!' });

  res.status(200).json(singleItemByName);
});


app.get('/drinks', function (_req, res) {
  res.json(drinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const singleItem = drinks.find(item => String(item.id) === id);
  if (!singleItem) return res.status(404).json({ message: 'Não encontrado!' });

  res.status(200).json(singleItem);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});