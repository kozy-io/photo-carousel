import http from "k6/http";

const host = 'ec2-3-15-162-51.us-east-2.compute.amazonaws.com';

const getListingUrl = listingId => `http://${host}:3002/api/listings/${listingId}`;
// const getPhotosUrl = listingId => `http://${host}:3002/api/photos/${listingId}`;
const id = () => Math.floor(Math.random() * Math.floor(10000000)) | 1;

const getListing = () => {
  var res = http.get(getListingUrl(id()));
  // console.log("GET LISTING response time was " + String(res.timings.duration) + " ms");
};

// SINCE IMAGES ARE NOT IN POSTGRES EC2, I'LL NOT MAKE TESTS WITH IT NOW

// const getPhotos = () => {
//   var res = http.get(getPhotosUrl(id()));
//   // console.log("GET PHOTOS response time was " + String(res.timings.duration) + " ms");
// };

export default function() {
  getListing();
}; 

// export default function() {
//   const request = Math.floor(Math.random() * Math.floor(2));
//   if (request === 0){
//     getListing();
//   }
//   else {
//     getPhotos();
//   }
// }; 