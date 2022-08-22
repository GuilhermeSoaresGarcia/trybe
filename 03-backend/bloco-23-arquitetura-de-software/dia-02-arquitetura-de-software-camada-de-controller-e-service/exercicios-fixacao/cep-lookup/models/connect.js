const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'gui2712',
  database: 'cep_lookup'
});

module.exports = connection;
