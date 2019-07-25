const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const csvListings = createCsvWriter({
  path: 'listings.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'title', title: 'title'},
    {id: 'location', title: 'location'},
    {id: 'rating', title: 'rating'},
    {id: 'totalRatings', title: 'totalRatings'}
  ]
});

const generateListing = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      id: i,
      title: faker.lorem.sentence(3),
      location: `${faker.address.city()}, ${faker.address.state()}`,
      rating: faker.finance.amount(0, 4, 1),
      totalRatings: faker.random.number(1000)
    })
  }
  return data
};

csvListings
  .writeRecords(generateListing())
  .then(()=> console.log('The CSV file was written successfully'));