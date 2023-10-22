const { UserWishlist } = require('../models');

const wishlistdata = [
    {
        user_id: 1,
        wishlist_id: 2,
    }
];

const seedWishlistBook = () => UserWishlist.bulkCreate(wishlistdata, { fields: ['user_id', 'wishlist_id'] });

module.exports = seedWishlistBook;