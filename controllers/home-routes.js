const router = require('express').Router();
const { Book, User, UserFavorite, UserWishlist } = require('../models');
const withAuth = require("../utils/auth")


// GET user homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book/search', async (req, res) => {
  try {
    res.render('search');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book/author', async (req, res) => {
  try {
    res.render('author');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book', async (req, res) => {
  try {
    res.render('book');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book/cart', async (req, res) => {
  try {
    res.render('cart');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book/genre', async (req, res) => {
  try {
    res.render('genre');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book/series', async (req, res) => {
  try {
    res.render('series');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book/userHome', async (req, res) => {
  try {
    res.render('userHome');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id);

    // const dbFavorite = await Book.findAll({
    //   include: [{
    //     model: User,
    //     through: UserFavorite
    //   }]
    // });

    // console.log(dbFavorite);

    const books = dbBookData.get({ plain: true });

    res.render('book', {
      books
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

router.get('/login', (req, res) => {

  res.render('homepage');
});


router.get('/signup', (req, res) => {

  res.render('book');
});

module.exports = router;
