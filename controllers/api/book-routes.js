const router = require('express').Router();
const { or, Op } = require('sequelize');
const { Book } = require('../../models');

/** @type {import('express').RequestHandler} */
const searchBooks = async (req, res) => {
    const authorOrTitle = req.query['q'];

    console.log(authorOrTitle);

    // find the book by author/title where title matches our query or author matches our query
    const booksFound = await Book.findAll({
        where: or(
            { title: { [Op.like]: '%' + authorOrTitle + '%' } },
            { author: { [Op.like]: '%' + authorOrTitle + '%' } })
    });

    console.log({ booksFound })
    // return the results
    res.json(booksFound);

};

router.get('/search', searchBooks);

module.exports = router