const { Wishlist } = require('../models');

const wishlistdata = [
    {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        publisher: 'Scholastic',
        description: 'Harry is in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort\'s old allies.',
        isbn_10: '0747542155',
        genre: 'Fantasy',
        series: 'Harry Potter',
        price: '7.99',
        quantity: '32',
        condition_new: true
    },
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        publisher: 'Scholastic',
        description: 'Harry is in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry\'s name into the Triwizard Tournament, in which he is forced to compete.',
        isbn_10: '	074754624X',
        genre: 'Fantasy',
        series: 'Harry Potter',
        price: '7.99',
        quantity: '28',
        condition_new: true
    },
    {
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        publisher: 'Scholastic',
        description: 'Harry struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L.exams, and an obstructive Ministry of Magic.',
        isbn_10: '0747551006',
        genre: 'Fantasy',
        series: 'Harry Potter',
        price: '7.99',
        quantity: '11',
        condition_new: true
    },
];

const seedBook = () => Wishlist.bulkCreate(wishlistdata);

module.exports = seedBook;