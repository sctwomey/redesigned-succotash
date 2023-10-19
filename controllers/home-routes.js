const router = require('express').Router();
const { Book } = require('../models');

// GET user homepage
router.get('/', async (req, res) => {
  try {
    const dbFavoriteData = await Favorite.findAll({
      include: [
        {
          model: Wishlist,
          attributes: ['title', 'publisher', 'genre', 'price'],
        },
      ],
    });

    const favoriteBooks = dbFavoriteData.map((favorite) =>
      favorite.get({ plain: true })
    );

    res.render('userHomepage', {
      favoriteBooks,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one book
// Use the custom middleware before allowing the user to access the book
router.get('/book/:id', withAuth, async (req, res) => {
  try {
    const dbBookData = await Book.findByPk(req.params.id);

    const book = dbBookData.get({ plain: true });
    res.render('book', { book, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all books by an author
// Use the custom middleware before allowing the user to access the book
router.get('/book/:author', withAuth, async (req, res) => {
  try {
    const dbAuthorData = await Book.findByPk(req.params.author);

    const bookAuthor = dbAuthorData.get({ plain: true });
    res.render('author', { bookAuthor, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all books by genre
// Use the custom middleware before allowing the user to access the book
router.get('/book/:genre', withAuth, async (req, res) => {
  try {
    const dbGenreData = await Book.findByPk(req.params.genre);

    const bookGenre = dbGenreData.get({ plain: true });
    res.render('genre', { bookGenre, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all books in a series
// Use the custom middleware before allowing the user to access the book
router.get('/books/:series', withAuth, async (req, res) => {
  try {
    const dbSeriesData = await Book.findByPk(req.params.series);

    const bookSeries = dbSeriesData.get({ plain: true });
    res.render('book', { bookSeries, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
