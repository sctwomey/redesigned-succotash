const User = require('./User');
const Book = require('./Book');
const Favorite = require('./Favorite');
const Wishlist = require('./Wishlist');
const Purchase = require('./Purchase');
const UserFavorite = require('./UserFavorite');
const UserWishlist = require('./UserWishlist');
const UserPurchase = require('./UserPurchase');



User.hasMany(Book, {
  foreignKey: 'user_id',
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Favorite, {
  foreignKey: 'user_id',
});

Favorite.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Wishlist, {
  foreignKey: 'user_id',
});

Wishlist.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Purchase, {
  foreignKey: 'user_id',
});

Purchase.belongsTo(User, {
  foreignKey: 'user_id',
});

Favorite.belongsToMany(User, {
  through: UserFavorite
});

User.belongsToMany(Favorite, {
  through: UserFavorite
});

Wishlist.belongsToMany(User, {
  through: UserWishlist
});

User.belongsToMany(Wishlist, {
  through: UserWishlist
});

Purchase.belongsToMany(User, {
  through: UserPurchase
});

User.belongsToMany(Purchase, {
  through: UserPurchase
});

module.exports = { User, Book, Favorite, Wishlist, Purchase, UserFavorite, UserPurchase, UserWishlist };