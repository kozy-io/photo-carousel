const faker = require('faker');
const fs = require('fs');
const urlPhotos = require('./urlPhotos.js');

const photo = (index) => `https://kozy-images.s3-us-west-1.amazonaws.com/${urlPhotos[index]}`

const Photo = (photo_id, listing_id, priority, index) => {
  let photo_url = photo(index);
  let caption = faker.lorem.sentence(5);
  return `${photo_id},${listing_id},${photo_url},${priority},${caption}\n`;
};

const numListingsIds = 587297;

const seeding = () => {
  const writeFile = fs.createWriteStream('photos.csv');
  writeFile.write('_id,listing_id,photo_url,priority,caption\n');
  let photoId = 2898882 ;
  const photosLen = urlPhotos.length;

  for (let listingId = 200001; listingId <= numListingsIds; listingId++){
    const random = Math.floor(Math.random() * Math.floor(30));
    let priority = 0;
    for (let id = photoId; id < photoId + random; id++){
      const photoIndex = Math.floor(Math.random() * Math.floor(photosLen-1));
      data = Photo(id, listingId, priority, photoIndex);
      writeFile.write(data);
      priority++;
    }
    photoId += random
  }
}
seeding();