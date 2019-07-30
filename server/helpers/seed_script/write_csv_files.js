const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const chalk = require('chalk');
const moment = require('moment');

console.time('calculationTime');
console.log(chalk.green(moment().format('LLLL')));

const { usersData } = require('./generateUsers.js')
const { listingsdata } = require('./generateListings.js')
const { photosData } = require('./generatePhotos.js')
const { favoritesData } = require('./generateFavorites.js')

const usersCsv = createCsvWriter({
  path: 'users.csv',
  header: [
    {id: '_id', title: '_id'},
    {id: 'username', title: 'username'},
    {id: 'facebook', title: 'facebook'},
    {id: 'twitter', title: 'twitter'},
    {id: 'messenger', title: 'messenger'},
    {id: 'email', title: 'email'},
    {id: 'favorites', title: 'favorites'},
    {id: 'listings', title: 'listings'}
  ]
});

const listingsCsv = createCsvWriter({
  path: 'listings.csv',
  header: [
    {id: '_id', title: '_id'},
    {id: 'title', title: 'title'},
    {id: 'location', title: 'location'},
    {id: 'rating', title: 'rating'},
    {id: 'total_ratings', title: 'total_ratings'},
    {id: 'user_id', title: 'user_id'},
    {id: 'photos', title: 'photos'},
    {id: 'favorites', title: 'favorites'},
  ]
});

const photosCsv = createCsvWriter({
  path: 'photos.csv',
    header: [
    {id: '_id', title: '_id'},
    {id: 'listing_id', title: 'listing_id'},
    {id: 'photo_url', title: 'photo_url'},
    {id: 'priority', title: 'priority'},
    {id: 'caption', title: 'caption'}
  ]
});

const favoritesCsv = createCsvWriter({
  path: 'favorites.csv',
  header: [
    {id: '_id', title: '_id'},
    {id: 'user_id', title: 'user_id'},
    {id: 'listing_id', title: 'listing_id'},
    {id: 'title', title: 'title'}
  ]
});

const createFiles = () => {
  usersCsv
    .writeRecords(usersData)
    .then(()=> console.log('The CSV file was written successfully'));

  listingsCsv
    .writeRecords(listingsdata)
    .then(()=> console.log('The CSV file was written successfully'));

  photosCsv
    .writeRecords(photosData)
    .then(()=> console.log('The CSV file was written successfully'));

  favoritesCsv
    .writeRecords(favoritesData)
    .then(()=> console.log('The CSV file was written successfully'));
}


createFiles();
console.timeEnd('calculationTime');
console.log(chalk.green(moment().format('LLLL')));