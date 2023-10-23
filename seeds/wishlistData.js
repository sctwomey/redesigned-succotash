const { Wishlist } = require('../models');

const wishlistdata = [
    {
        user_id: 2,
        book_id: 4
    },
    {
        user_id: 2,
        book_id: 5
    },
];

const seedWishlistBook = () => Wishlist.bulkCreate(wishlistdata, { fields: ['user_id', 'book_id'] });

module.exports = seedWishlistBook;
