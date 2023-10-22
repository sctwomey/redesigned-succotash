const { Purchase } = require('../models');

const purchasedata = [
    {
        user_id: 1,
        purchase_id: 2,
    }
];

const seedPurchaseBook = () => Purchase.bulkCreate(purchasedata, { fields: ['user_id', 'purchase_id'] });

module.exports = seedPurchaseBook;