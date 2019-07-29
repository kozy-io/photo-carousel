const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

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

const User = (user_id, favorites, listings) => ({
  _id: user_id,
  username: faker.name.findName(),
  facebook: faker.internet.url(),
  twitter: faker.internet.url(),
  messenger: faker.internet.url(),
  email: faker.internet.url(),
  favorites, // list of favorites_id
  listings // list of listings_id
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

const Listing = (listing_id, user_id, photos, favorites) => ({
  _id: listing_id,
  title: faker.lorem.sentence(3),
  location: `${faker.address.city()}, ${faker.address.state()}`,
  rating: faker.finance.amount(0, 4, 1),
  total_ratings: faker.random.number(1000),
  user_id,
  photos, // list of photos_id
  favorites // list of favorites_id
})

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

const Photo = (photo_id, listing_id, priority) => ({
  _id: photo_id,
  listing_id,
  photo_url: faker.image.city(), // need to change url from S3 url
  priority,
  caption: faker.lorem.sentence(5)
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

const Favorite = (favorite_id, user_id, listing_id) => ({
  _id: favorite_id,
  user_id,
  listing_id,
  title: faker.lorem.sentence(1)
})

let generateUsers = () => {
  let data = [];
  const numUsers = 5; // increase this number after testing
  for (let id = 1; id <= numUsers; id++){
    data.push(User(id, [], []))
  }
  return data;
}

let generateListings = () => {
  let data = [];
  let numListings = Math.floor(Math.random() * Math.floor(10));
  for (let id = 1; id <= numListings; id++){
    data.push(Listing(id, 1, [], []))
  }
  return data;
}

let generatePhotos = () => {
  let data = [];
  let listing_id = 1;
  let photo_id = 1

  while (listing_id <= 5) {
    let randomNumber =  Math.floor(Math.random() * Math.floor(30));
    if (randomNumber < 5) {
      randomNumber = 5;
    }
    for (let priority = 0; priority < randomNumber; priority++) {
      data.push(Photo(photo_id, listing_id, priority))
      photo_id++;
    }
    listing_id++;
  }
  return data;
}

let generateFavorites = () => {
  let data = [];
  let user_id = 1;
  let listing_id = 1
  let numFavorites = Math.floor(Math.random() * Math.floor(15));
  for (let id = 1; id <= numFavorites; id++){
    data.push(Favorite(id, user_id, listing_id))
  }
  return data;
}

// usersCsv
//   .writeRecords(generateUsers())
//   .then(()=> console.log('The CSV file was written successfully'));

// listingsCsv
//   .writeRecords(generateListings())
//   .then(()=> console.log('The CSV file was written successfully'));

// photosCsv
//   .writeRecords(generatePhotos())
//   .then(()=> console.log('The CSV file was written successfully'));

// favoritesCsv
//   .writeRecords(generateFavorites())
//   .then(()=> console.log('The CSV file was written successfully'));



let numUsers = 5;
let numListings = 0
let numPhotos = 0

let idsListings = 0;

let numListingsByUser = []
let numPhotosByListing = []

let listingsByUser = []

for (let user = 1; user <= numUsers; user++){
  let random = Math.floor(Math.random() * Math.floor(10))
  numListingsByUser.push({[user]: random})
  numListings += random;
}

for (let i = 0; i < numListingsByUser.length; i++){
  const value = Object.values(numListingsByUser[i])[0];
  for (let j = idsListings; j < value + idsListings; j++){
    let random = Math.floor(Math.random() * Math.floor(10))
    numPhotosByListing.push({[j+1]: random})
    numPhotos += random
  }
  idsListings += value
}

for (let i = 0; )

let generateUsers = () => {
  let data = [];
  
  for (let id = 1; id <= numUsers; id++){
    data.push(User(id, [], []))
  }
  return data;
}