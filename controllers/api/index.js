const router = require('express').Router();

const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');

router.use('/books', bookRoutes);
router.use('/users', userRoutes);

module.exports = router;
