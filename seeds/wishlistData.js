const { Wishlist } = require('../models');

const wishlistdata = [
    {
        user_id: 2,
        book_id: 4,
        wishlist_id: 2,
    }
];

const seedWishlistBook = () => Wishlist.bulkCreate(wishlistdata, { fields: ['user_id', 'book_id', 'wishlist_id'] });

module.exports = seedWishlistBook;
