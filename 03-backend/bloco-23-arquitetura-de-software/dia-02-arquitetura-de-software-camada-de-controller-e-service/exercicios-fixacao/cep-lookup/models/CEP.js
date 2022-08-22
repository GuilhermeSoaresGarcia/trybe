const connection = require('./connect');

async function findCEP(cep) {
  const result = await connection.execute(
    `SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps 
    WHERE cep = ?`, [cep]
  )
  return result[0];
}

// findCEP().then(response => console.log(response));

async function insertNewCEP(cep, logradouro, bairro, localidade, uf) {
  const result = await connection.execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?)`, [cep, logradouro, bairro, localidade, uf]
  )
  return result;
}

module.exports = {
  findCEP,
  insertNewCEP
}
