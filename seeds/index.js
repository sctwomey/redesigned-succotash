const sequelize = require('../config/connection');
const seedBook = require('../seeds/bookData');
const seedUser = require('../seeds/userData');
const seedFavoriteBook = require('../seeds/favoriteData');
const seedPurchaseBook = require('../seeds/purchaseData');
const seedWishlistBook = require('../seeds/wishlistData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBook();

  await seedFavoriteBook();

  // await seedWishlistBook();

  // await seedPurchaseBook();

  process.exit(0);
};

seedAll();
