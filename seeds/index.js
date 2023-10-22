const sequelize = require('../config/connection');
const seedBook = require('./bookData');
const seedUser = require('./userData');
const seedFavoriteBook = require('./favoriteData');
const seedPurchaseBook = require('./purchaseData');
const seedWishlistBook = require('./wishlistData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBook();

  await seedFavoriteBook();

  // await seedPurchaseBook();

  // await seedWishlistBook();

  process.exit(0);
};

seedAll();
