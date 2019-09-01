const postgres_data = require('../../config.js');

const Pool = require('pg').Pool;

const pool = new Pool(postgres_data);

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
  })
});

module.exports = pool;