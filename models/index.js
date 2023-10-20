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
  as: 'user-favorite'
});

Book.belongsToMany(User, {
  through: UserWishlist,
  as: 'user-wishlist'
});

Book.belongsToMany(User, {
  through: UserPurchase,
  as: 'user-purchase'
});

module.exports = { User, Book, UserFavorite, UserPurchase, UserWishlist };