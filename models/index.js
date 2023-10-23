const User = require('./User');
const Book = require('./Book');
const Favorite = require('./Favorite');
const Wishlist = require('./Wishlist');
const Purchase = require('./Purchase');

// User.hasMany(Book, {
//   foreignKey: 'user_id',
// });

// Book.belongsTo(User, {
//   foreignKey: 'user_id',
// });

Book.belongsToMany(User, {
  through: {
    model: Favorite,
    unique: false
  },
});

User.belongsToMany(Book, {
  through: {
    model: Favorite,
    unique: false
  },
});

// Book.belongsToMany(User, {
//   through: Wishlist,
//   foreignKey: 'wishlist_id'
// });

// User.belongsToMany(Book, {
//   through: Wishlist,
//   foreignKey: 'wishlist_id',
// });

// Book.belongsToMany(User, {
//   through: Purchase,
//   foreignKey: 'purchase_id'
// });

// User.belongsToMany(Book, {
//   through: Purchase,
//   foreignKey: 'purchase_id',
// });

module.exports = { User, Book, Favorite };