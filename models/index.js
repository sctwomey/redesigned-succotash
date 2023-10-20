const User = require('./User');
const Book = require('./Book');
const UserFavorite = require('./UserFavorite');
const UserWishlist = require('./UserWishlist');
const UserPurchase = require('./UserPurchase');

User.hasMany(Book, {
  foreignKey: 'user_id',
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
});

Book.belongsToMany(User, {
  through: UserFavorite,
  foreignKey: 'favorite_id',
});

// Book.belongsToMany(User, {
//   through: UserWishlist,
//   foreignKey: 'wishlist_id'
// });

// Book.belongsToMany(User, {
//   through: UserPurchase,
//   foreignKey: 'purchase_id'
// });

module.exports = { User, Book, UserFavorite, UserPurchase, UserWishlist };