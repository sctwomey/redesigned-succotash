const sequelize = require('../config/connection');
const seedBook = require('./bookData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBook();

  process.exit(0);
};

seedAll();
