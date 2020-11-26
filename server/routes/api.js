const express = require('express');
const Book = require('../models/books');
const router = express.Router();

router.get('/', async (req, res) => {
  try { 
    const books = await Book.find()
    console.log(books)
    res.json(books)
  } catch {
    console.log('error')
  }
})
router.get('/name', (req, res) => {
  const data = {
    username: 'sam jones',
    age: 67
  }
  res.json(data);
})

module.exports = router;