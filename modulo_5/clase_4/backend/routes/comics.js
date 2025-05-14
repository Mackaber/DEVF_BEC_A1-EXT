const express = require('express');
const router = express.Router();
const dbPromise = require('../db');
const Comic = require('../models/Comic');

// Get all comics
router.get('/', async (req, res) => {
  const db = await dbPromise;
  res.json(db.data.comics);
});

// Add a new comic
router.post('/', async (req, res) => {
  const db = await dbPromise;
  const newComic = new Comic({
    id: db.data.comics.length ? db.data.comics[db.data.comics.length - 1].id + 1 : 1,
    ...req.body
  });
  db.data.comics.push(newComic);
  await db.write();
  res.json(newComic);
});

// Get a comic by ID
router.get('/:id', async (req, res) => {
  const db = await dbPromise;
  const comic = db.data.comics.find(c => c.id === parseInt(req.params.id));
  if (!comic) return res.status(404).json({ message: 'Comic not found' });
  res.json(comic);
});

// Update a comic by ID
router.put('/:id', async (req, res) => {
  const db = await dbPromise;
  const idx = db.data.comics.findIndex(c => c.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: 'Comic not found' });
  db.data.comics[idx] = { ...db.data.comics[idx], ...req.body };
  await db.write();
  res.json(db.data.comics[idx]);
});

// Delete a comic by ID
router.delete('/:id', async (req, res) => {
  const db = await dbPromise;
  const idx = db.data.comics.findIndex(c => c.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ message: 'Comic not found' });
  db.data.comics.splice(idx, 1);
  await db.write();
  res.json({ message: 'Comic deleted' });
});

module.exports = router;