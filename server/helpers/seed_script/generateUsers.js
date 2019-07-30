const faker = require('faker');

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

const usersData = [];

let generateUsers = (() => {
  const numUsers = 138000; 
  for (let id = 125001; id <= numUsers; id++){
    usersData.push(User(id, [], []))
  }
})();

const idsUsers = usersData.reduce((acc, cur) => {
  const id = cur._id
  return acc.concat(id)
}, []);

module.exports = {
  usersData,
  idsUsers
}