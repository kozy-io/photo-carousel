
const axios = require('axios');

module.exports = {
  getImages: (query, cb) => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=30&orientation=landscape`;
    axios.get(url, { headers: { Authorization: 'Client-ID 4de99600d30065702b25808b8683fafb68e49fabf892e51076028ecbe8ff87be' } })
      .then((response) => {
        cb(null, response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};