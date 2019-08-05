DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS listings;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS favorites;

CREATE TABLE users (
_id SERIAL NOT NULL PRIMARY KEY,
username CHAR varying(30) NOT NULL,
facebook VARCHAR,
twitter VARCHAR,
messenger VARCHAR,
email VARCHAR
);

CREATE TABLE listings (
_id SERIAL NOT NULL PRIMARY KEY,
title CHAR varying(60) NOT NULL,
location CHAR varying(60) NOT NULL,
rating NUMERIC(2) NOT NULL,
total_ratings INT NOT NULL,
user_id INT NOT NULL REFERENCES users(_id)
);

CREATE TABLE photos (
_id SERIAL NOT NULL PRIMARY KEY,
listing_id INT NOT NULL REFERENCES listings(_id),
photo_url VARCHAR NOT NULL,
priority INT NOT NULL,
caption VARCHAR
);

CREATE TABLE favorites (
_id SERIAL NOT NULL PRIMARY KEY,
user_id INT NOT NULL REFERENCES users(_id),
listing_id INT NOT NULL REFERENCES listings(_id),
title VARCHAR
);

\COPY users(_id,username,facebook,twitter,messenger,email) FROM '/Users/eline/Desktop/photo-carousel-service/server/csvFiles/users.csv' DELIMITER ',' CSV HEADER;
\COPY listings(_id,title,location,rating,total_ratings,user_id) FROM '/Users/eline/Desktop/photo-carousel-service/server/csvFiles/listings.csv' DELIMITER ',' CSV HEADER;
\COPY photos(_id,listing_id,photo_url,priority,caption) FROM '/Users/eline/Desktop/photo-carousel-service/server/csvFiles/photos.csv' DELIMITER ',' CSV HEADER;
\COPY favorites(_id,user_id,listing_id,title) FROM '/Users/eline/Desktop/photo-carousel-service/server/csvFiles/favorites.csv' DELIMITER ',' CSV HEADER;

ALTER SEQUENCE users__id_seq RESTART WITH <'count+1'>; --TODO
ALTER SEQUENCE listings__id_seq RESTART WITH <'count+1'>; --TODO
ALTER SEQUENCE photos__id_seq RESTART WITH <'count+1'>; --TODO
ALTER SEQUENCE favorites__id_seq RESTART WITH <'count+1'>; --TODO