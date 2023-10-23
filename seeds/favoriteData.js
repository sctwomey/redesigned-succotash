const { Favorite } = require('../models');

const favoritedata = [
    {
        user_id: 1,
        book_id: 2
    },
    {
        user_id: 1,
        book_id: 3
    },
];

const seedFavoriteBook = () => Favorite.bulkCreate(favoritedata, { fields: ['user_id', 'book_id'] });

module.exports = seedFavoriteBook;