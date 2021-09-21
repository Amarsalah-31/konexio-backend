const express = require('express');
const router = express.Router();
// Import data
const Authors = require('../data/authors.data');

router.route('/')
    .get(async (_req, res) => {
        const authors = await Authors.find();
        console.log(authors)

        res.json({
            status: 'OK',
            message: 'Authors API',
            data: authors,
        });
    })
    .post(async (req, res) => {
        const newAuthor = await Authors.create(req.body);

        res.json({
            status: 'OK',
            messahe: 'You added a new author',
            data: newAuthor,
        });
    });

router.route('/:id')
    .get(async (req, res) => {
        const author = await Authors.findById(req.params.id)
        console.log(id)

        res.json({
            status: 'OK',
            message: 'You  have this is authors',
            data: author,
        });
    });

router.route('/:id/books')
    .get(async (req, res) => {
        const id = await Authors.findById(req.params.id)

        res.json({
            status: 'OK',
            message: 'You asked this books',
            author: id.name,
            data: id.books,
        });
    });

module.exports = router;