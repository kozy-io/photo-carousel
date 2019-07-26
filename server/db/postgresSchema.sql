CREATE TABLE listings (
  id INTEGER NOT NULL PRIMARY_KEY,
  title CHARACTER varying(60) NOT NULL,
  location CHARACTER varying(60) NOT NULL,
  rating NUMERIC(2) NOT NULL,
  totalRatings INTEGER NOT NULL
)

CREATE TABLE photos (
  id INTEGER NOT NULL PRIMARY_KEY,
  listing_id INTEGER NOT NULL REFERENCES listings(id),
  photoUrl VARCHAR NOT NULL,
  tinyPhotoUrl VARCHAR NOT NULL,
  priority INTEGER NOT NULL,
  caption CHARACTER varying(60)
)