const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'kozy',
  host: 'localhost',
  database: 'kozy',
  password: 'kozy',
  port: 5432,
});

// const pool = new Pool({
//   user: 'power_user',
//   host: 'ec2-18-224-94-100.us-east-2.compute.amazonaws.com',
//   database: 'kozy',
//   password: 'power_user',
//   port: 5432,
// });

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
});

module.exports = pool;