const router = require('express').Router();

const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');
const favoriteRoutes = require('./favorite-routes');
const wishlistRoutes = require('./wishlist-routes');
const purchaseRoutes = require('./purchase-routes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/favorite', favoriteRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/purchase', purchaseRoutes);

module.exports = router;
