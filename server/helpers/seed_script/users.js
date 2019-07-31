const faker = require('faker');
const fs = require('fs');

const User = (user_id) => {
  let _id = user_id;
  let username = faker.name.findName();
  let facebook = faker.internet.url();
  let twitter = faker.internet.url();
  let messenger = faker.internet.url();
  let email = faker.internet.url();

  return `${_id},${username},${facebook},${twitter},${messenger},${email}\n`;
};

const seeding = () => {
  let i = 2000001;
  let data;

  const writeFile = fs.createWriteStream('users.csv');
  writeFile.write('_id,username,facebook,twitter,messenger,email\n');

  const write = () => {
    let ok = true;
    do {
      i--;
      data = User(i);
      if (i === 1) {
        // Last time!
        writeFile.write(data);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writeFile.write(data);
      }
    } while (i > 1 && ok);
    if (i > 1) {
      // Had to stop early!
      // Write some more once it drains.
      writeFile.once('drain', write);
    }
  }
  write();
}
seeding();