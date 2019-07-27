const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const users = [
  {id: '_id', title: '_id'},
  {id: 'username', title: 'username'},
  {id: 'facebook', title: 'facebook'},
  {id: 'twitter', title: 'twitter'},
  {id: 'messenger', title: 'messenger'},
  {id: 'email', title: 'email'},
  {id: 'favorites', title: 'favorites'},
  {id: 'listings', title: 'listings'}
];

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

const listings = [
  {id: '_id', title: '_id'},
  {id: 'title', title: 'title'},
  {id: 'location', title: 'location'},
  {id: 'rating', title: 'rating'},
  {id: 'total_ratings', title: 'total_ratings'},
  {id: 'user_id', title: 'user_id'},
  {id: 'photos', title: 'photos'},
  {id: 'favorites', title: 'favorites'},
];

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

const photos = [
  {id: '_id', title: '_id'},
  {id: 'listing_id', title: 'listing_id'},
  {id: 'photo_url', title: 'photo_url'},
  {id: 'priority', title: 'priority'},
  {id: 'caption', title: 'caption'}
];

const Photo = (photo_id, listing_id, priority) => ({
  _id: photo_id,
  listing_id,
  photo_url: faker.image.city(), // need to change url from S3 url
  priority,
  caption: faker.lorem.sentence(5)
});

const favorites = [
  {id: '_id', title: '_id'},
  {id: 'user_id', title: 'user_id'},
  {id: 'listing_id', title: 'listing_id'},
  {id: 'title', title: 'title'}
];

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

console.log(generateListings())



// let favorites_ids = 0;
// let listings_ids = 0;
// let photos_ids = 0;
// const numUsers = 5; // increase this number after testing

// let generateData = () => {
//   let data = [{
//     users: [],
//     listings: []
//   }];
  
//   for (let user_id = 1; i <= numUsers; i++){
//     // add favorites ids:
//     let users_favorites = [];
//     let numFavorites = Math.floor(Math.random() * Math.floor(50));
//     for (let j = favorites_ids; j <= numFavorites; j++){
//       users_favorites.push(j+1);
//     }
//     favorites_ids += numFavorites;

//     // add listings ids:
//     let users_listings = [];
//     let numListings = Math.floor(Math.random() * Math.floor(10));
//     for (let k = ids_listings; k <= numListings; k++){
//       users_listings.push(k+1);
//     }
//     listings_ids += numListings;

//     // USERS:
//     data.users.push(User(user_id, users_favorites, users_listings))

//     // add photos ids:
//     let listings_photos = [];
//     let numPhotos = Math.floor(Math.random() * Math.floor(40));
//     for (let l = photos_ids; l <= numPhotos; l++){
//       listings_photos.push(l+1);
//     }
//     photos_ids += numPhotos;

//     // LISTINGS:
//     listings.map(id => data.listings.push(Listing(listing_id, user_id, photos, favorites)))
//   }
//   return data;
// }



