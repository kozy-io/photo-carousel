const faker = require('faker');
const db = require('./index.js');
const unsplash = require('./unsplashHelper.js');

const generateUser = () => {
  for (let i = 0; i < 100; i++) {
    const name = faker.name.findName();
    const facebook = faker.internet.url();
    const twitter = faker.internet.url();
    const messenger = faker.internet.url();
    const email = faker.internet.email();

    db.User.create({
      name, facebook, twitter, messenger, email,
    });
  }
};

const generateListing = () => {
  for (let i = 0; i < 100; i++) {
    const title = faker.lorem.sentence(3);
    const location = `${faker.address.city()}, ${faker.address.state()}`;
    const rating = faker.finance.amount(0, 4, 1);
    const totalRatings = faker.random.number(1000);

    db.Listing.create({
      title, location, rating, totalRatings,
    });
  }
};

const generatePhoto = () => {
  let listing_id = 1;

  unsplash.getImages('house', (err, houseData) => {
    if (err) {
      console.log(err);
    } else {
      while (listing_id <= 100) {
        let randomNumber =  Math.floor(Math.random() * Math.floor(29));
        if (randomNumber < 5) {
          randomNumber = 5;
        }

        for (let priority = 0; priority < randomNumber; priority++) {
          let randomImage =  Math.floor(Math.random() * Math.floor(29));
          // const photoUrl = faker.image.city();
          // const tinyPhotoUrl = faker.image.city();
          const photoUrl = houseData.results[randomImage].urls.regular;
          const tinyPhotoUrl = houseData.results[randomImage].urls.thumb;
          const caption = faker.lorem.sentence(5);
          db.Photo.create({
            listing_id, photoUrl, tinyPhotoUrl, priority, caption,
          });
        }
        listing_id += 1;
      }
    }
  });
};

const generateList = () => {
  let title = faker.lorem.sentence(1);
  for (let i = 0; i < 100; i++) {
    if (i % 10 === 0) {
      title = faker.lorem.sentence(1);
    }

    db.List.create({
      user_id: i,
      listing_id: i,
      title,
    });
  }
};

generateUser();
generateListing();
generatePhoto();
generateList();
