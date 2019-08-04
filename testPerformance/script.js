  import http from "k6/http";

  const getListingUrl = listingId => `http://localhost:3002/api/listings/${listingId}`;
  const getPhotosUrl = listingId => `http://localhost:3002/api/photos/${listingId}`;
  const id = () => Math.floor(Math.random() * Math.floor(10000000)) | 1;

  const getListing = () => {
    var res = http.get(getListingUrl(id()));
    // console.log("GET LISTING response time was " + String(res.timings.duration) + " ms");
  };

  const getPhotos = () => {
    var res = http.get(getPhotosUrl(id()));
    // console.log("GET PHOTOS response time was " + String(res.timings.duration) + " ms");
  };

  export default function() {
    const request = Math.floor(Math.random() * Math.floor(2));
    if (request === 0){
      getListing();
    }
    else {
      getPhotos();
    }
  };