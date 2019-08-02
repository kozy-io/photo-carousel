require('newrelic');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const { Op } = require('sequelize');
// const db = require('./server/db/index.js');
const db = require('./server/postgres/index.js');

const app = express();
const port = 3002;

app.use(morgan('tiny'));
app.use(bodyParser());

// WHEN READY TO PRODUCTION, UNCOMMENT:
// app.use('/', expressStaticGzip(path.resolve(__dirname, './public/dist'), {
//   enableBrotli: true,
//   orderPreference: ['br', 'gz'],
//   setHeaders(res, path) {
//     res.setHeader('Cache-Control', 'public, max-age=31536000');
//   },
// }));

// app.use('/photoCarousel/:listingID', expressStaticGzip(path.resolve(__dirname, './public/dist'), {
//   enableBrotli: true,
//   orderPreference: ['br', 'gz'],
//   setHeaders(res, path) {
//     res.setHeader('Cache-Control', 'public, max-age=31536000');
//   },
// }));


app.use('/',express.static(path.resolve(__dirname, './public/dist')));

app.use('/photoCarousel/:listingID', express.static(path.resolve(__dirname, './public/dist')));


// app.get('/api/listings/info/:listingID', (req, res) => {
//   const { listingID } = req.params;

//   db.Listing.findOne({
//     where: {
//       id: listingID,
//     },
//   }).then(result => res.send(result))
//     .catch(err => res.send(err));
// });


// app.get('/api/listings/photos/initial/:listingID', (req, res) => {
//   const { listingID } = req.params;

//   db.Photo.findAll({
//     where: {
//       listing_id: listingID,
//       priority: {
//         [Op.lte]: 4,
//       },
//     },
//     order: [
//       ['priority', 'ASC'],
//     ],
//   }).then(result => res.send(result))
//     .catch(err => res.send(err));
// });

// app.get('/api/listings/photos/:listingID', (req, res) => {
//   const { listingID } = req.params;

//   db.Photo.findAll({
//     where: {
//       listing_id: listingID,
//       priority: {
//         [Op.gte]: 5,
//       },
//     },
//     order: [
//       ['priority', 'ASC'],
//     ],
//   }).then(result => res.send(result))
//     .catch(err => res.send(err));
// });


// app.get('/api/users/:userID', (req, res) => {
//   const { userID } = req.params;

//   db.User.findOne({
//     where: {
//       id: userID,
//     },
//   }).then(result => res.send(result))
//     .catch(err => res.send(err));
// });


// app.get('/api/users/lists/:userID/:listTitle', (req, res) => {
//   const { userID, listTitle } = req.params;

//   db.List.findAll({
//     where: {
//       user_id: userID,
//       title: listTitle,
//     },
//   }).then(result => res.send(result))
//     .catch(err => res.send(err));
// });


app.listen(port, () => console.log(`Listening on port ${port}!`));
