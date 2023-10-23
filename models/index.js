const User = require('./User');
const Book = require('./Book');
const Favorite = require('./Favorite');
// const Wishlist = require('./Wishlist');
// const Purchase = require('./Purchase');


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
//   through: {
//     model: Wishlist,
//     unique: false
//   },
// });

// User.belongsToMany(Book, {
//   through: {
//     model: Wishlist,
//     unique: false
//   },
// });

// Book.belongsToMany(User, {
//   through: {
//     model: Purchase,
//     unique: false
//   },
// });

// User.belongsToMany(Book, {
//   through: {
//     model: Purchase,
//     unique: false
//   },
// });

module.exports = { User, Book, Favorite };