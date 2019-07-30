// LISTINGS
{
  _id: LISTING_ID,
  title: TITLE, 
  location: LOCATION,
  rating: RATING,
  total_ratings: TOTAL_RATINGS,
  user_id: ObjectId(USER_ID),
  photos: [
    ObjectId(PHOTO_ID) // all photos ID for each listing
  ],
  favorites: [
    ObjectId(FAVORITE_ID) // all favorites ID for this listing
  ]
}

// PHOTOS
{
  _id: PHOTO_ID,
  listing_id:  ObjectId(LISTING_ID),
  photo_url: PHOTO_URL,
  priority: PRIORITY,
  caption: CAPTION
}

// USERS
{
  _id: USER_ID,
  username: USERNAME,
  facebook: FACEBOOK_URL,
  twitter: TWITTER_URL,
  messenger: MESSENGER_URL,
  email: EMAIL_URL,
  favorites: [
    ObjectId(FAVORITE_ID) // all favorites ID for this user
  ],
  listings: [
    ObjectId(LISTING_ID) // all listings ID for this user
  ]
}

// FAVORITES
{
  _id: LIST_ID,
  user_id: ObjectId(USER_ID),
  listing_id: ObjectId(LISTING_ID),
  title: TITLE
}






  