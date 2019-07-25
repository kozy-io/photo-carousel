// Endpoints
//  GET	/api/listings/photos/initial/:listingID
//    priority <= 4
//  GET	/api/listings/photos/:listingID
//    priority >= 5
//  POST	/api/listings/photos/:listingID
//  PUT	/api/listings/photos/:listingID/:photoID
//  DELETE	/api/listings/photos/:listingID/:photoID

const Listing = {
  id, //autoIncrement
  title,
  location,
  rating,
  totalRatings
}
  
const Photo = {
  id, //autoIncrement
  listing_id, 
    // references: {
    //   model: Listing,
    //   key: 'id',
    // }
  photoUrl,
  tinyPhotoUrl,
  priority,
  caption
}

// Maybe I don't need to create the models below.
// They're not been used in any CRUD operation.
const User = {
  id, //autoIncrement
  name,
  facebook,
  twitter,
  messenger,
  email
}

const List = {
  id, //autoIncrement
  user_id,
    // references: {
    //   model: User,
    //   key: 'id',
    // }
  listing_id,
    // references: {
    //   model: Listing,
    //   key: 'id',
    // }
  title
}