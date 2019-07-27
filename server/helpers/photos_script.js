const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');
const unsplash = require('../db/unsplashHelper.js');

const csvPhotos = createCsvWriter({
  path: 'photos.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'listing_id', title: 'listing_id'},
    {id: 'photoUrl', title: 'photoUrl'},
    {id: 'tinyPhotoUrl', title: 'tinyPhotoUrl'},
    {id: 'priority', title: 'priority'},
    {id: 'caption', title: 'caption'}
  ]
});

const generatePhoto = () => {
  unsplash.getImages('house', (err, houseData) => {
    if (err){
      console.log(err)
    }
    else {
      let data = [];
      let countId = 1;
      let listing_id = 1;
      while (listing_id <= 100) {
        let randomNumber =  Math.floor(Math.random() * Math.floor(29));
        if (randomNumber < 5) {
          randomNumber = 5;
        }
        for (let priority = 0; priority < randomNumber; priority++) {
          let randomImage =  Math.floor(Math.random() * Math.floor(29));
          data.push({
            id: countId,
            listing_id: listing_id,
            photoUrl: houseData.results[randomImage].urls.regular,
            tinyPhotoUrl: houseData.results[randomImage].urls.thumb,
            priority: priority,
            caption: faker.lorem.sentence(5)
          })
          countId++;
        }
        listing_id++;
      }

      csvPhotos
        .writeRecords(data)
        .then(()=> console.log('The CSV file was written successfully'));
    }
  })
}

generatePhoto();