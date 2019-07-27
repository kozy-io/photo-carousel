const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { insertDocuments, findDocuments } = require('./controllers.js');

// Connection URL
const url = 'mongodb://localhost:27018';

// Database Name
const dbName = 'kozy-photo-carousel';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
    });
  });

});
