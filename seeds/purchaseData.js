const { Purchase } = require('../models');

const purchasedata = [
    {
        user_id: 3,
        book_id: 3,
    },
    {
        user_id: 3,
        book_id: 1,
    }
];

const seedPurchaseBook = () => Purchase.bulkCreate(purchasedata, { fields: ['user_id', 'book_id'] });

module.exports = seedPurchaseBook;