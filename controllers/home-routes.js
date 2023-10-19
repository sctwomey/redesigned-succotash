const router = require('express').Router();
const { Book } = require('../models');
const withAuth = require("../utils/auth")

// GET all books for homepage
router.get('/', async (req, res) => {
  try {
    const dbBooksData = await Book.findAll();

    const books = dbBooksData.map((book) =>
      book.get({ plain: true })
    );

    res.render('homepage', {
      books,
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

router.get('/author/:id', withAuth, async (req, res) => {
  try {
    const dbAuthorData = await Author.findByPk(req.params.id);

    const author = dbAuthorData.get({ plain: true });
    res.render('author', { author, loggedIn: req.session.loggedIn });
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
