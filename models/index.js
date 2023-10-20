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
  through: UserFavorite
});

User.belongsToMany(Book, {
  through: UserFavorite
});

Book.belongsToMany(User, {
  through: UserWishlist
});

User.belongsToMany(Book, {
  through: UserWishlist
});

Book.belongsToMany(User, {
  through: UserPurchase
});

User.belongsToMany(Book, {
  through: UserPurchase
});

module.exports = { User, Book, UserFavorite, UserPurchase, UserWishlist };