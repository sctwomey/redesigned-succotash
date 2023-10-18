const User = require('./User');
const Book = require('./Book');
const Inventory = require('./Inventory');

Book.hasMany(User, {
  foreignKey: 'book_id',
});

User.belongsTo(Book, {
  foreignKey: 'book_id',
});

Book.hasMany(Inventory, {
  foreignKey: 'book_id',
});

Inventory.belongsTo(Book, {
  foreignKey: 'book_id',
});

module.exports = { User, Book, Inventory };
