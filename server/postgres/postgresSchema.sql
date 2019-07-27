CREATE TABLE listings (
  id INTEGER NOT NULL PRIMARY_KEY,
  title CHARACTER varying(60) NOT NULL,
  location CHARACTER varying(60) NOT NULL,
  rating NUMERIC(2) NOT NULL,
  total_ratings INTEGER NOT NULL
  user_id INTEGER NOT NULL REFERENCES users(id)
)
-- To join with listings:
  -- photos: [
  --   ObjectId(PHOTO_ID) // all photos ID for each listing
  -- ],
  -- favorites: [
  --   ObjectId(FAVORITE_ID) // all favorites ID for each listing
  -- ]

CREATE TABLE photos (
  id INTEGER NOT NULL PRIMARY_KEY,
  listing_id INTEGER NOT NULL REFERENCES listings(id),
  photo_url VARCHAR NOT NULL,
  priority INTEGER NOT NULL,
  caption VARCHAR NOT NULL
)

CREATE TABLE users (
  id INTEGER NOT NULL PRIMARY_KEY,
  username CHARACTER varying(30) NOT NULL,
  facebook VARCHAR NOT NULL,
  twitter VARCHAR NOT NULL,
  messenger VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
)
-- To join with users:
  -- favorites: [
  --   ObjectId(FAVORITE_ID) // all favorites ID for this user
  -- ],
  -- listings: [
  --   ObjectId(LISTING_ID) // all listings ID for this user
  -- ]

CREATE TABLE favorites (
  id INTEGER NOT NULL PRIMARY_KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  listing_id INTEGER NOT NULL REFERENCES listings(id),
  title VARCHAR NOT NULL
)