const User = require('./User');
const Book = require('./Book');
const Favorite = require('./Favorite');
const Wishlist = require('./Wishlist');
const Purchase = require('./Purchase');

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

Favorite.belongsTo(Wishlist, {
  foreignKey: 'wishlist_id',
})

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

module.exports = { User, Book, Favorite, Wishlist, Purchase };