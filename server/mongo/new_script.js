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
});

const usersData = [];
const listingsdata = [];
const photosData = [];
const favoritesData = [];

let generateUsers = (() => {
  const numUsers = 5; // increase this number after testing
  for (let id = 1; id <= numUsers; id++){
    usersData.push(User(id, [], []))
  }
})();

const idsUsers = usersData.reduce((acc, cur) => {
  const id = cur._id
  return acc.concat(id)
}, []);

let generateListings = (() => {
  let listingId = 0;
  idsUsers.map(userId => {
    const random = Math.floor(Math.random() * Math.floor(10))
    for (let i = 0; i < random; i++){
      listingId++;
      listingsdata.push(Listing(listingId, userId, [], []));
    }
  });
})();

const idsListings = listingsdata.reduce((acc, cur) => {
  const id = cur._id;
  return acc.concat(id);
}, []);

let generatePhotos = (() => {
  let photoId = 0;
  idsListings.map(listingId => {
    const random = Math.floor(Math.random() * Math.floor(30));
    let priority = 0;
    for (let i = 0; i < random; i++){
      photoId++;
      photosData.push(Photo(photoId, listingId, priority));
      priority++;
    }
  })
})(); 

let generateFavorites = (() => {
  let favoriteId = 0;
  const length = idsListings.length;
  idsUsers.map(userId => {
    const random = Math.floor(Math.random() * Math.floor(15));
    const usedIds = []
    for (let i = 0; i < random; i++){
      const listingId = Math.floor(Math.random() * Math.floor(length - 1));
      if (!usedIds.includes(listingId)){
        usedIds.push(listingId);
        favoriteId++;
        favoritesData.push(Favorite(favoriteId, userId, listingId));
      }
    }
  })
})();

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