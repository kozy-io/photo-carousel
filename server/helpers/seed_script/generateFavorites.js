const faker = require('faker');
const { idsUsers } = require('./generateUsers.js');
const { idsListings } = require('./generateListings.js');

const Favorite = (favorite_id, user_id, listing_id) => ({
  _id: favorite_id,
  user_id,
  listing_id,
  title: faker.lorem.sentence(1)
});

const favoritesData = [];

let generateFavorites = (() => {
  let favoriteId = 249038;
  const length = idsListings.length;
  idsUsers.map(userId => {
    const random = Math.floor(Math.random() * Math.floor(5));
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

module.exports = {
  favoritesData
}