const express = require('express');
const { getAll, insertNewAuthor } = require('./models/Author');

const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', async (_req, res) => {
  const authors = await getAll();
  return res.status(200).json({ authors });
});

app.get('/new_author', async (req, res) => {
  const authors = await getAll();
  const { fname, mname, lname, bd, nat } = req.query;
  await insertNewAuthor(fname, mname, lname, bd, nat);
  return res.status(200).json({ authors });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});