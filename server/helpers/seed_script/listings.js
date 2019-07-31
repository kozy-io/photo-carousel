const faker = require('faker');
const fs = require('fs');

const Listing = (listing_id, user_id) => {
  let _id = listing_id;
  let title = faker.lorem.sentence(3);
  let location = `${faker.address.city()} - ${faker.address.state()}`;
  let rating = faker.finance.amount(0, 4, 1);
  let total_ratings = faker.random.number(1000);

  return `${_id},${title},${location},${rating},${total_ratings},${user_id}\n`;
};

const seeding = () => {
  let idListing = 1;
  let idsUsers = 2000001;
  let data;

  const writeFile = fs.createWriteStream('listings.csv');
  writeFile.write('_id,title,location,rating,total_ratings,user_id\n');

  const write = () => {
    let ok = true;
    do {
      idsUsers--;
      const numListings = Math.floor(Math.random() * Math.floor(11));
      for (let id = idListing; id < idListing + numListings; id++){
        data = Listing(id, idsUsers);
        if (idsUsers === 1) {
          // Last time!
          writeFile.write(data);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          ok = writeFile.write(data);
        }
      }
      idListing += numListings
    } while (idsUsers > 1 && ok);
    if (idsUsers > 1) {
      // Had to stop early!
      // Write some more once it drains.
      writeFile.once('drain', write);
    }
  }
  write();
}
seeding();