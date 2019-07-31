const createStringifier = require('csv-writer').createArrayCsvStringifier;
const faker = require('faker');

const fs = require('fs');
const imagesFile = fs.createWriteStream('./photos.csv');
const metadataFile = fs.createWriteStream('./photosMetadata.csv');
const urlPhotos = require('./urlPhotos.js')

const NUM_LISTINGS = 10000482;
// const NUM_LISTINGS = 10; // TEST
const MIN_IMAGES = 2;
const MAX_IMAGES = 20;
// const PATH_TO_S3 = 'https://devopsi-munch.s3-us-west-2.amazonaws.com/image-';
const PATH_TO_S3 = 'https://kozy-images.s3-us-west-1.amazonaws.com/';
const S3_IMAGE_BEGIN_ID = 0; // TODO
const S3_IMAGE_END_ID = 999; // TODO
// const USERS = 10000000;

let listingIndex = 1;
let imageId = 0;
let image = undefined;
let record = undefined;
let id = 0;
let score = 0;


const imagesCSVify = createStringifier({
  // _id,listing_id,photo_url,priority,caption
  header: [
    {id: '_id', title: '_id'},
    {id: 'listing_id', title: 'listing_id'},
    {id: 'photo_url', title: 'photo_url'},
    {id: 'priority', title: 'priority'},
    {id: 'caption', title: 'caption'},
  ]
});

const metadataCSVify = createStringifier({
  header: [
    {id: '_id', title: '_id'},
    {id: 'helpfulScore', title: 'helpfulScore'},
  ]
});

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
      // _id,listing_id,photo_url,priority,caption
      image = [];

      image.push(imageId); // imageId

      image.push(listingIndex.valueOf()); // listingId

      id = faker.random.number({min: S3_IMAGE_BEGIN_ID, max: S3_IMAGE_END_ID});
      image.push(PATH_TO_S3 + urlPhotos[id]); // imageURL

      image.push(priority); // priority

      image.push(faker.lorem.sentence(5)); // caption

      score = 0;
      if ((listingIndex + j) % 5 === 0) {
        // score = faker.random.number({min: 1, max: 5});
        record = [];
        record.push(JSON.parse(JSON.stringify([imageId, score])));
        metadataFile.write(metadataCSVify.stringifyRecords(record));
      }

      record = [];
      record.push(JSON.parse(JSON.stringify(image)));
      ok = imagesFile.write(imagesCSVify.stringifyRecords(record));

      imageId += 1;
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
