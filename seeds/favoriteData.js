const { Favorite } = require('../models');

const favoritedata = [
    {
        user_id: 1,
        book_id: 2,
        favorite_id: 1,
    },
    {
        user_id: 1,
        book_id: 3,
        favorite_id: 2,
    }
];

const seedFavoriteBook = () => Favorite.bulkCreate(favoritedata, { fields: ['user_id', 'book_id', 'favorite_id'] });

module.exports = seedFavoriteBook;