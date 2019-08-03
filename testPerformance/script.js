import http from "k6/http";

const getUrl = listingId => `http://localhost:3002/api/listings/${listingId}`;
const postUrl = 'http://localhost:3002/api/listings';

const getListing = () => {
  const id = Math.floor(Math.random() * Math.floor(10000000)) | 1;
  var res = http.get(getUrl(id));
  console.log("GET response time was " + String(res.timings.duration) + " ms");
};

const postListing = () => {
  const id = Math.floor(Math.random() * Math.floor(200000)) | 1;
  var body = { 
    title: 'Nihil rerum voluptatem.',
    location: 'Connerbury - New Jersey',
    rating: 0.3,
    total_ratings: 100,
    user_id: id
  };
  var res = http.post(postUrl, body);
  console.log("POST response time was " + String(res.timings.duration) + " ms");
};

export default function() {
  const request = Math.floor(Math.random() * Math.floor(2));
  if (request === 0){
    getListing();
  }
  else {
    postListing();
  }
};