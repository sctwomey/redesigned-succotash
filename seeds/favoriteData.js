const { Favorite } = require('../models');

const favoritedata = [
    {
        user_id: 1,
        book_id: 2,
        favorite_id: 1
    },
];

const seedFavoriteBook = () => Favorite.bulkCreate(favoritedata, { fields: ['user_id', 'book_id', 'favorite_id'] });

module.exports = seedFavoriteBook;