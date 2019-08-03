import http from "k6/http";

const getUrl = listingId => `http://localhost:3002/api/listings/${listingId}`;
const postUrl = 'http://localhost:3002/api/listings';

// GET Listing
// export default function() {
//   for (var time = 1; time <= 1000; time++) {
//     const id = Math.floor(Math.random() * Math.floor(10000000))
//     var res = http.get(getUrl(id));
//     console.log("Response time was " + String(res.timings.duration) + " ms");
//   }
// };

// POST Listing
// const { title,location,rating,total_ratings,user_id } = req.body;

export default function() {
  for (var time = 1; time <= 1; time++) {
    const id = Math.floor(Math.random() * Math.floor(200000))
    var body = { 
      title: 'Nihil rerum voluptatem.',
      location: 'Connerbury - New Jersey',
      rating: 0.3,
      total_ratings: 100,
      user_id: 100
    }
    var res = http.post(postUrl, body);
    console.log("Response time was " + String(res.timings.duration) + " ms");
  }
};