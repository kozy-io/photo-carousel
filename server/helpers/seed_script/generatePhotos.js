const faker = require('faker');
const { idsListings } = require('./generateListings.js')

const Photo = (photo_id, listing_id, priority) => ({
  _id: photo_id,
  listing_id,
  photo_url: faker.image.city(), // need to change url from S3 url
  priority,
  caption: faker.lorem.sentence(5)
});

const photosData = [];

let generatePhotos = (() => {
  let photoId = 8184846;
  idsListings.map(listingId => {
    const random = Math.floor(Math.random() * Math.floor(30));
    let priority = 0;
    for (let i = 0; i < random; i++){
      photoId++;
      photosData.push(Photo(photoId, listingId, priority));
      priority++;
    }
  })
})(); 

module.exports = {
  photosData
}