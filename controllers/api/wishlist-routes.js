const router = require('express').Router();
const fs = require('fs');
const { Book, User, Wishlist } = require('../../models');
const withAuth = require("../../utils/auth");

router.get('/wishlistbooks', async (req, res) => {
    try {
        const dbWishlistData = await User.findAll({
            include: [{
                model: Book,
                through: Wishlist,
            }],
            where: {
                id: 2
            },
            attributes: ['username']
        });

        // console.log(allBooks);
        res.json(dbWishlistData);

        // res.render('book', allBooks);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/addwishlist', async (req, res) => {
    try {
        const wishlistData = await Wishlist.create({
            user_id: req.body.user_id,
            book_id: req.body.book_id
        });
        res.status(200).json(wishlistData)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/removewishlist/:id', async (req, res) => {
    try {
        const wishlistData = await Wishlist.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });

        if (!wishlistData) {
            res.status(404).json({ message: 'No Wishlist item found with this id!' });
            return;
        };

        res.status(200).json(wishlistData);
    } catch (err) {
        res.status(500).json(err);
    };
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


// router.get('/login', (req, res) => {

//     res.render('login');
// });


// router.get('/signup', (req, res) => {

//     res.render('book');
// });

module.exports = router;