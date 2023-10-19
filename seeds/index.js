const sequelize = require('../config/connection');
const seedBook = require('./BookData');
const seedInventory = require('./inventoryData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBook();

  process.exit(0);
};

seedAll();
