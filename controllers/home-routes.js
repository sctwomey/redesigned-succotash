const router = require('express').Router();
const { Book, UserFavorite, UserWishlist } = require('../models');
const withAuth = require("../utils/auth")

// GET user homepage
router.get('/', async (req, res) => {
  try {
    const dbFavoriteData = await UserFavorite.findAll({
      include: [
        {
          model: UserWishlist,
          attributes: ['title', 'publisher', 'genre', 'price'],
        },
      ],
    });

    const favoriteBooks = dbFavoriteData.map((favorite) =>
      favorite.get({ plain: true })
    );

    // res.render('userHomepage', {
    //   favoriteBooks,
    //   loggedIn: req.session.loggedIn,
    // });

    res.render('login')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// router.get('/user', withauth, async (req, res) => {
//   try {
//     // const dbFavoriteData = await Favorite.findAll({
//     //   include: [
//     //     {
//     //       model: Wishlist,
//     //       attributes: ['title', 'publisher', 'genre', 'price'],
//     //     },
//     //   ],
//     // });
//     const dbBookData = await Book.findByPk(req.params.id);

//     const book = dbBookData.get({ plain: true });

//     // const favoriteBooks = dbFavoriteData.map((favorite) =>
//     //   favorite.get({ plain: true })
//     // );

//     // res.render('userHomepage', {
//     //   favoriteBooks,
//     //   loggedIn: req.session.loggedIn,
//     // });

//     res.render('userhomepage')
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


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


router.get('/author/:id', async (req, res) => {
  try {
    // const dbAuthorData = await Author.findByPk(req.params.id);

    // const author = dbAuthorData.get({ plain: true });
    res.render('author', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// GET all books by an author
// Use the custom middleware before allowing the user to access the book
router.get('/book/:author', withAuth, async (req, res) => {
  try {
    const dbAuthorData = await Book.findAll(req.params.author);

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
    const dbGenreData = await Book.findAll(req.params.genre);

    const bookGenre = dbGenreData.get({ plain: true });
    res.render('genre', { bookGenre, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all books in a series
// Use the custom middleware before allowing the user to access the book
router.get('/book/:series', withAuth, async (req, res) => {
  try {
    const dbSeriesData = await Book.findAll(req.params.series);

    const bookSeries = dbSeriesData.get({ plain: true });
    res.render('series', { bookSeries, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  res.render('login');
});


router.get('/signup', (req, res) => {

  res.render('signup');
});


module.exports = router;
