const assert = require('assert');
const listings = require('../newDB/listings.csv')

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('listings');
  // Insert some documents
  collection.insertMany(listings, function(err, result) {
    assert.equal(err, null);
    // assert.equal(3, result.result.n);
    // assert.equal(3, result.ops.length);
    console.log("Inserted documents into the collection");
    console.log(result)
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

module.exports = {
  insertDocuments,
  findDocuments
};