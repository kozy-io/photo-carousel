const faker = require('faker');
const fs = require('fs');
const imagesFile = fs.createWriteStream('./photos.csv');
const urlPhotos = require('./urlPhotos.js')

const NUM_LISTINGS = 10000481;
// const NUM_LISTINGS = 10; // TEST
const MIN_IMAGES = 2;
const MAX_IMAGES = 20;
const PATH_TO_S3 = 'https://kozy-images.s3-us-west-1.amazonaws.com/';
const S3_IMAGE_BEGIN_ID = 0;
const S3_IMAGE_END_ID = 999;

let listingIndex = 1;
let imageId = 0;
let image;
let id = 0;

function printProgress(progress, count) {
  console.log(`Current progress: ${progress}%; Current image count: ${count}`);
}

function write() {
  let ok = true;
  imagesFile.write('_id,listing_id,photo_url,priority,caption\n');

  while (ok && listingIndex <= NUM_LISTINGS) {
    if (listingIndex % 100000 === 0) {
      printProgress((listingIndex * 100) / NUM_LISTINGS, imageId + 1);
    }

    let numImages = faker.random.number({min: MIN_IMAGES, max: MAX_IMAGES});
    let priority = 0;
    for (let j = 0; j < numImages; j += 1) {
      id = faker.random.number({min: S3_IMAGE_BEGIN_ID, max: S3_IMAGE_END_ID});

      image = `${imageId},${listingIndex.valueOf()},${PATH_TO_S3 + urlPhotos[id]},${priority},${faker.lorem.sentence(5)}\n`;

      ok = imagesFile.write(image);

      imageId++;
      priority++;
    }
    listingIndex += 1;
  }
  if (listingIndex < (NUM_LISTINGS + 1)) {
    // had to stop early!
    // write some more once it drains
    imagesFile.once('drain', write);

  }
  // imagesFile.end();
}

write();
