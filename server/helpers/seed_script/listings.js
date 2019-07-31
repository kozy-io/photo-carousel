const faker = require('faker');
const fs = require('fs');

const Listing = (listing_id, user_id) => {
  let _id = listing_id;
  let title = faker.lorem.sentence(3);
  let location = `${faker.address.city()}, ${faker.address.state()}`;
  let rating = faker.finance.amount(0, 4, 1);
  let total_ratings = faker.random.number(1000);

  return `${_id},${title},${location},${rating},${total_ratings},${user_id}\n`;
};

const numUsersIds = 130000;

const seeding = () => {
  const writeFile = fs.createWriteStream('listings.csv');
  writeFile.write('_id,title,location,rating,total_ratings,user_id\n'); //TODO
  let listingId = 1;

  for (let userId = 1; userId <= numUsersIds; userId++){
    const random = Math.floor(Math.random() * Math.floor(10))
    for (let id = listingId; id < listingId+random; id++){
      data = Listing(id, userId);
      writeFile.write(data);
    }
    listingId += random
  }
}
seeding();