const express = require("express");
const book = require('../models/book.model');
const bookSchema = require('../models/book.model');

const bookController = require('../controllers/books.controller');

const router = express.Router();


// get all books
router.get('/books', (req, res) => {
    bookSchema    
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a book
router.get("/books/:id", (req, res) => {
    const { id } = req.params;
    bookSchema    
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// create book
router.post('/books', (req, res) => {
    const book = bookSchema(req.body);
    book
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// udatep a book
router.put("/books/:id", (req, res) => {
    const { id } = req.params;
    const { author, age, title, preci } = req.body;
    bookSchema    
    .updateOne({ _id: id}, {$set: { author, age, title, preci }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a book
router.delete("/books/:id", (req, res) => {
    const { id } = req.params;    
    bookSchema    
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;