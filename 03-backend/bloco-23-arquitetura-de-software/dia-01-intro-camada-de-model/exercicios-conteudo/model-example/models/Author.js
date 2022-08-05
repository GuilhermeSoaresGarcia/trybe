const connection = require('./connection');

async function getAll() {
  const [authors] = await connection.execute(
    `SELECT
      id,
      first_name,
      middle_name,
      last_name
    FROM model_example.authors;`
  );
  return authors;
};

async function insertNewAuthor(fname, mname, lname, bd, nat) {
  await connection.execute(
    `INSERT INTO model_example.authors 
    (first_name, middle_name, last_name, birthday, nationality)
    VALUES 
    ('${fname}', '${mname}', '${lname}', '${bd}', '${nat}}')` // SQL INJECTION!!
  )
};

module.exports = {
  getAll,
  insertNewAuthor
}