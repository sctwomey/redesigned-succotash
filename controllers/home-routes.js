const router = require('express').Router();
const fs = require('fs');
const { Book, User, Favorite } = require('../models');
const withAuth = require("../utils/auth");


// GET default homepage
router.get('/', async (req, res) => {
  try {
    const dbBookDataHomePage = Book.findAll({


      attributes: ['id', 'author', 'publisher', 'genre', 'title', 'series', 'quantity', 'price', 'description', 'image']

    })

    const bookHomePage = (await dbBookDataHomePage).map((book) =>

      book.get({ plain: true })
    );
    console.log(bookHomePage)
    console.log(req.session.user_id)
    console.log(req.session.name)
    res.render('homepage', {
      bookHomePage,
      loggedIn: req.session.loggedIn,
      name:req.session.name
    });

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

    res.render('author', {
      loggedIn: req.session.user_id,
      name:req.session.name
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get('/cart', withAuth, async (req, res) => {
  try {
    res.render('cart', {
      loggedIn: req.session.user_id,
      name:req.session.name,
      cart: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




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
    name:req.session.name,
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
  res.render('search',{
    loggedIn: req.session.user_id,
    name:req.session.name,
    search: true
  })
})

module.exports = router;
