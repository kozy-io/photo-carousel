const faker = require('faker');
const { idsUsers } = require('./generateUsers.js')

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

const listingsdata = [];

let generateListings = (() => {
  let listingId = 563957;
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


module.exports = {
  listingsdata,
  idsListings
}