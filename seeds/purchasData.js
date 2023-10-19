const { Purchase } = require('../models');

const purchasedata = [
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        publisher: 'Scholastic',
        description: 'On Harry’s eleventh birthday, an enormous wizard named Hagrid appears and explains to Harry that he is a wizard, too. Harry’s parents, Lily and James, were wizards who sacrificed themselves to save him from a supremely evil wizard named Voldemort.',
        isbn_10: '1338878921',
        genre: 'Fantasy',
        series: 'Harry Potter',
        price: '7.99',
        quantity: '25',
        condition_new: true
    },
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        publisher: 'Scholastic',
        description: 'Harry is in his second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families.',
        isbn_10: '0747538492',
        genre: 'Fantasy',
        series: 'Harry Potter',
        price: '7.99',
        quantity: '18',
        condition_new: true
    },
];

const seedBook = () => Purchase.bulkCreate(purchasedata);

module.exports = seedBook;