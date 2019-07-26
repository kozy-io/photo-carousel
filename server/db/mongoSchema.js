db.createCollection("listings", {
  autoIndexId: true,
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "title", "location", "rating", "totalRatings", "photos" ],
      properties: {
        title: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        location: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        rating: {
          bsonType: "decimal",
          description: "must be a decimal and is required"
        },
        totalRatings: {
          bsonType: "int",
          description: "must be an integer and is required"
        },
        // this field was inserted to optimize queries: https://docs.mongodb.com/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/
        photos: {
          bsonType: "array", // photos ID
          description: "must be an array and is required"
        }
      }
    }
  }
})

db.createCollection("photos", {
  autoIndexId: true,
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "listing_id", "photoUrl", "tinyPhotoUrl", "priority", "caption" ],
      properties: {
        listing_id: {
          // ObjectId(listing_id) 
          bsonType: "int",
          description: "must be an integer and is required"
        },
        photoUrl: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        tinyPhotoUrl: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        priority: {
          bsonType: "int",
          description: "must be an integer and is required"
        },
        caption: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})