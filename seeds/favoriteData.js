const { Favorite } = require('../models');

const favoritedata = [
    {
        user_id: 1,
        favorite_id: 2,
    }
];

const seedFavoriteBook = () => Favorite.bulkCreate(favoritedata, { fields: ['user_id', 'favorite_id'] });

module.exports = seedFavoriteBook;