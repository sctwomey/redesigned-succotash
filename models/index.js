const User = require('./User');
const Book = require('./Book');


Book.hasMany(User, {
  foreignKey: 'book_id',
});

User.belongsTo(Book, {
  foreignKey: 'book_id',
});

module.exports = { User, Book };
