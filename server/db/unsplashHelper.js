const axios = require('axios');
const { UnsplashAPI_KEY } = require('../../config.js');

module.exports = {
  getImages: (query, cb) => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=30&orientation=landscape`;
    axios.get(url, { headers: { Authorization: `Client-ID ${UnsplashAPI_KEY}` } })
      .then((response) => {
        cb(null, response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};