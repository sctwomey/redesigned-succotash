const { UserFavorite } = require('../models');

const favoritedata = [
    {
        user_id: 1,
        favorite_id: 2,
    }
];

const seedFavoriteBook = () => UserFavorite.bulkCreate(favoritedata, { fields: ['user_id', 'favorite_id'] });

module.exports = seedFavoriteBook;