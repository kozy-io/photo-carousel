import http from "k6/http";

const host = 'localhost';

const getListingUrl = listingId => `http://${host}:3002/api/listings/${listingId}`;
const getPhotosUrl = listingId => `http://${host}:3002/api/photos/${listingId}`;

const getListing = (id) => {
  var res = http.get(getListingUrl(id));
  // console.log("GET LISTING response time was " + String(res.timings.duration) + " ms");
};

const getPhotos = (id) => {
  var res = http.get(getPhotosUrl(id));
  // console.log("GET PHOTOS response time was " + String(res.timings.duration) + " ms");
};

export default function() {
  const id = Math.floor(Math.random() * Math.floor(9995627)) | 1;
  getListing(id);
  getPhotos(id);
}; 