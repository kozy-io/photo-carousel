const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./server/postgres/index.js');

const app = express();
const port = 3002;

app.use(morgan('tiny'));
app.use(bodyParser());
app.use('/',express.static(path.resolve(__dirname, './public/dist')));
app.use('/:listingId', express.static(path.resolve(__dirname, './public/dist')));

// Get a specific listingId
app.get('/api/listings/:listingId', (req, res) => {
  const { listingId } = req.params;
  const QUERY = 'SELECT * FROM listings WHERE _id = $1';
  db.query(QUERY, [listingId], (error, results) => {
    if (error) {
      throw error
    }
    res.send(results.rows)
  })
})

// Add new listing
app.post('/api/listings', (req, res) => {
  const { title,location,rating,total_ratings,user_id } = req.body;
  const QUERY = 'INSERT INTO listings(title,location,rating,total_ratings,user_id) VALUES ($1,$2,$3,$4,$5)';
  db.query(
    QUERY, 
    [title, location, rating, total_ratings, user_id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.send(results.rows)
    }
  )
})

// CONTINUE FROM HERE:
// | PUT | /api/listings/:listingId | Edit listing | _listingId_ |
// | DELETE | /api/listings/:listingId | Delete listing | _listingId_ |

app.listen(port, () => console.log(`Listening on port ${port}!`));
