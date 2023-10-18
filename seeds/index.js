const sequelize = require('../config/connection');
const seedBook = require('./bookData');
const seedInventory = require('./inventoryData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBook();

  await seedInventory();

  process.exit(0);
};

seedAll();
