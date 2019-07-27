const AWS = require('aws-sdk');
const request = require('request');
const { AWSAccessKeyId, AWSSecretKey } = require('../../config.js');
const { getImages } = require('./pexel.js');

AWS.config.update({
  accessKeyId: `${AWSAccessKeyId}`,
  secretAccessKey: `${AWSSecretKey}`,
});

s3 = new AWS.S3({
  apiVersion: '2006-03-01',
});

function put_from_url(id, callback) {
  request({
    url: `https://unsplash.com/photos/${id}/download`,
    encoding: null,
  }, (err, res, body) => {
    if (err) return callback(err, res);
    s3.putObject({
      Bucket: 'kozy-images',
      Key: `${id}.jpg`,
      ContentType: res.headers['content-type'],
      Body: body,
    }, callback);
  });
}

getImages('house', (err, houseData) => {
  if (err) {
    console.log(err);
  } else {
    houseData.results.forEach((photo) => {
      put_from_url(photo.id, (err, info) => {
        if (err) console.log(err);
        console.log('successful in uploading');
      })
    })
  }
});