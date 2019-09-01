const faker = require('faker');
const fs = require('fs');

const Favorite = (favorite_id, user_id, listing_id) => {
  let title = faker.lorem.sentence(1);
  return `${favorite_id},${user_id},${listing_id},${title}\n`;
};

const seeding = () => {
  let idFavorite = 1;
  let idsUsers = 2000001;
  let idsListings = 9995628;
  let data;

  const writeFile = fs.createWriteStream('favorites.csv');
  writeFile.write('_id,user_id,listing_id,title\n');

  const write = () => {
    let ok = true;
    do {
      idsUsers--;
      const numFavorites = Math.floor(Math.random() * Math.floor(5));
      const idsListingsUsed = []
      for (let id = idFavorite; id < idFavorite + numFavorites; id++){
        const idListing = Math.floor(Math.random() * (idsListings - 1) + 1);
        if(!idsListingsUsed.includes(idListing)){
          data = Favorite(id, idsUsers, idListing)
          if (idsUsers === 1) {
            // Last time!
            writeFile.write(data);
          } else {
            // See if we should continue, or wait.
            // Don't pass the callback, because we're not done yet.
            ok = writeFile.write(data);
          }
        }
      }
      idFavorite += numFavorites
    } while (idsUsers > 1 && ok);
    if (idsUsers > 1) {
      // Had to stop early!
      // Write some more once it drains.
      writeFile.once('drain', write);
    }
  }
  write();
}
seeding();