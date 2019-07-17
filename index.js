const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./server/db/index.js');

const app = express();
const port = 3002;

app.use(morgan('tiny'));
app.use(bodyParser());
app.use('/', express.static(path.resolve(__dirname, './public/dist')));
app.use('/photoCarousel/:listingID', express.static(path.resolve(__dirname, './public/dist')));


app.get('/api/listings/info/:listingID', (req, res) => {
  const { listingID } = req.params;

  db.Listing.findOne({
    where: {
      id: listingID,
    },
  }).then(result => res.send(result))
    .catch(err => res.send(err));
});

app.get('/photoCarousel/:listingID', (req, res) => {
  const { listingID } = req.params;

  db.Listing.findOne({
    where: {
      id: listingID,
    },
  }).then(result => res.send(result))
    .catch(err => res.send(err));
});


app.get('/api/listings/photos/:listingID', (req, res) => {
  const { listingID } = req.params;

  db.Photo.findAll({
    where: {
      listing_id: listingID,
    },
    order: [
      ['priority', 'ASC'],
    ],
  }).then(result => res.send(result))
    .catch(err => res.send(err));
});


app.get('/api/users/:userID', (req, res) => {
  const { userID } = req.params;

  db.User.findOne({
    where: {
      id: userID,
    },
  }).then(result => res.send(result))
    .catch(err => res.send(err));
});


app.get('/api/users/lists/:userID/:listTitle', (req, res) => {
  const { userID, listTitle } = req.params;

  db.List.findAll({
    where: {
      user_id: userID,
      title: listTitle,
    },
  }).then(result => res.send(result))
    .catch(err => res.send(err));
});


app.listen(port, () => console.log(`Listening on port ${port}!`));
