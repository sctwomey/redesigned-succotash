const { Book } = require('../models');

const bookdata = [
  {
    book_name: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    publisher: 'Scholastic',
    description: 'On Harry’s eleventh birthday, an enormous wizard named Hagrid appears and explains to Harry that he is a wizard, too. Harry’s parents, Lily and James, were wizards who sacrificed themselves to save him from a supremely evil wizard named Voldemort.',
    book_isbn_10: '1338878921',
    book_genre: 'Fantasy',
  },
  {
    book_name: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    publisher: 'Scholastic',
    description: 'Harry is in his second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families.',
    book_isbn_10: '0747538492',
    book_genre: 'Fantasy',
  },
  {
    book_name: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    publisher: 'Scholastic',
    description: 'Harry is in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort\'s old allies.',
    book_isbn_10: '0747542155',
    book_genre: 'Fantasy',
  },
  {
    book_name: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    publisher: 'Scholastic',
    description: 'Harry is in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry\'s name into the Triwizard Tournament, in which he is forced to compete.',
    book_isbn_10: '	074754624X',
    book_genre: 'Fantasy',
  },
  {
    book_name: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K. Rowling',
    publisher: 'Scholastic',
    description: 'Harry struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L.exams, and an obstructive Ministry of Magic.',
    book_isbn_10: '0747551006',
    book_genre: 'Fantasy',
  },
];

const seedBook = () => Book.bulkCreate(bookdata);

module.exports = seedBook;
