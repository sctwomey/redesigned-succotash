const sequelize = require('../config/connection');
const seedBook = require('./bookData');
const seedUser = require('./userData');
const seedFavoriteBook = require('./userFavoriteData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBook();

  await seedUser();

  await seedFavoriteBook();

  process.exit(0);
};

seedAll();
