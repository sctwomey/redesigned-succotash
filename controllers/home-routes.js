const router = require('express').Router();
const fs = require('fs');
const { Book, User, Favorite } = require('../models');
const withAuth = require("../utils/auth");


// GET default homepage
router.get('/', async (req, res) => {
  try {
    const dbBookDataHomePage = Book.findAll({
      
       
        attributes: ['id','author','publisher', 'genre','title','series','quantity', 'price', 'description','image']
        
    })

    const bookHomePage = (await dbBookDataHomePage).map((book) =>
     book.get({plain: true})
       );
console.log(bookHomePage)
    res.render('homepage', {bookHomePage});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all authors in the database with the titles of each of their books.
router.get('/author', async (req, res) => {
  try {
    const dbAuthorData = await Book.findAll({
      attributes: ['title', 'author']
    });
    const authors = dbAuthorData.map((author) =>
      author.get({ plain: true })
    );

    console.log(authors);

    res.render('author');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all books.
router.get('/book', withAuth, async (req, res) => {
  try {
    const dbBooksData = await Book.findAll();
    const allBooks = dbBooksData.map((genre) =>
      genre.get({ plain: true })
    );

    console.log(allBooks);

    res.render('book', {
      allBooks,
      loggedIn: req.session.user_id
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/cart', withAuth, async (req, res) => {
  try {
    res.render('cart', {
      loggedIn: req.session.user_id
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all books by genre.
router.get('/genre', async (req, res) => {
  try {
    const dbGenreData = await Book.findAll({
      attributes: ['title', 'genre']
    });
    const genres = dbGenreData.map((genre) =>
      genre.get({ plain: true })
    );

    console.log(genres);

    res.render('genre');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all books by series.
router.get('/series', async (req, res) => {
  try {
    const dbSeriesData = await Book.findAll({
      attributes: ['title', 'series']
    });
    const bookSeries = dbSeriesData.map((series) =>
      series.get({ plain: true })
    );

    console.log(bookSeries);

    res.render('series');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/userHome', async (req, res) => {
  try {
    res.render('userHome');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a specific book by id.
router.get('/book/:id',  async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id, {
      
       
      attributes: ['id','author','publisher', 'genre','title','series','quantity', 'price', 'description','image']
      
  })
    const book = dbBookData.get({ plain: true });

    res.render('book', {
      book,
      loggedIn: req.session.user_id
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one book
// Use the custom middleware before allowing the user to access the book
// router.get('/book/:id', withAuth, async (req, res) => {
//   try {
//     const dbBookData = await Book.findByPk(req.params.id);

//     const book = dbBookData.get({ plain: true });
//     res.render('book', { book, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// router.get('/author/:id', async (req, res) => {
//   try {
//     // const dbAuthorData = await Author.findByPk(req.params.id);

//     // const author = dbAuthorData.get({ plain: true });
//     res.render('author', { loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// })

// GET all books by an author
// Use the custom middleware before allowing the user to access the book
// router.get('/book/:author', withAuth, async (req, res) => {
//   try {
//     const dbAuthorData = await Book.findAll(req.params.author);

//     const bookAuthor = dbAuthorData.get({ plain: true });
//     res.render('author', { bookAuthor, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET all books by genre
// Use the custom middleware before allowing the user to access the book
// router.get('/book/:genre', withAuth, async (req, res) => {
//   try {
//     const dbGenreData = await Book.findAll(req.params.genre);

//     const bookGenre = dbGenreData.get({ plain: true });
//     res.render('genre', { bookGenre, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET all books in a series
// Use the custom middleware before allowing the user to access the book
// router.get('/book/:series', withAuth, async (req, res) => {
//   try {
//     const dbSeriesData = await Book.findAll(req.params.series);

//     const bookSeries = dbSeriesData.get({ plain: true });
//     res.render('series', { bookSeries, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


router.get('/author/:author', async (req, res) => {
  let author = decodeURI(req.params.author);
  let books = await Book.findAll({
    where: {
      author: author
    },
    raw: true
  })

  console.log("books", books)

  res.render("author", {
    author: author,
    bookList: books
  })



});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/cart');
    return;
  }
  res.render('login');
});


router.get('/signup', (req, res) => {

  res.render('login');
});

router.get('/search', (req, res) => {
  res.render('search')
})

module.exports = router;
