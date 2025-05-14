const express = require('express');
const router = express.Router();
const dbPromise = require('../db');
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
  const db = await dbPromise;
  res.json(db.data.books);
});

// Add a new book
router.post('/', async (req, res) => {
  const db = await dbPromise;
  const newBook = new Book({
    id: db.data.books.length ? db.data.books[db.data.books.length - 1].id + 1 : 1,
    ...req.body
  });
  db.data.books.push(newBook);
  await db.write();
  res.json(newBook);
});

// Get a book by ID
router.get('/:id', async (req, res) => {
  const db = await dbPromise;
  const book = db.data.books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// Update a book by ID
router.put('/:id', async (req, res) => {
  const db = await dbPromise;
  const idx = db.data.books.findIndex(b => b.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: 'Book not found' });
  db.data.books[idx] = { ...db.data.books[idx], ...req.body };
  await db.write();
  res.json(db.data.books[idx]);
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
  const db = await dbPromise;
  const idx = db.data.books.findIndex(b => b.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: 'Book not found' });
  db.data.books.splice(idx, 1);
  await db.write();
  res.json({ message: 'Book deleted' });
});

module.exports = router;