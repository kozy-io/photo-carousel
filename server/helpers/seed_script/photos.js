const faker = require('faker');
const fs = require('fs');
const urlPhotos = require('./urlPhotos.js');

const photo = (index) => `https://kozy-images.s3-us-west-1.amazonaws.com/${urlPhotos[index]}`

const Photo = (photo_id, listing_id, priority, index) => {
  let photo_url = photo(index);
  let caption = faker.lorem.sentence(5);
  return `${photo_id},${listing_id},${photo_url},${priority},${caption}\n`;
};

const seeding = () => {
  let idPhoto = 1;
  let idsListing = 10000482;
  let data;

  const writeFile = fs.createWriteStream('photos.csv');
  writeFile.write('_id,listing_id,photo_url,priority,caption\n');

  const write = () => {
    let ok = true;
    do {
      idsListing--;
      const numPhotos = Math.floor(Math.random() * Math.floor(15));
      let priority = 0;
      for (let id = idPhoto; id < idPhoto + numPhotos; id++){
        const photoIndex = Math.floor(Math.random() * Math.floor(urlPhotos.length-1));
        data = Photo(id, idsListing, priority, photoIndex);
        priority++;
        if (idsListing === 1) {
          // Last time!
          writeFile.write(data);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          ok = writeFile.write(data);
        }
      }
      idPhoto += numPhotos
    } while (idsListing > 1 && ok);
    if (idsListing > 1) {
      // Had to stop early!
      // Write some more once it drains.
      writeFile.once('drain', write);
    }
  }
  write();
}
seeding();