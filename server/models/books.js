const mongooose = require('mongoose');

const Schema = mongooose.Schema

const BookSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  image: String,
  comments: [{
    moniker: String,
    body: { type: String, required: true },
    date: {
      type: String,
      default: Date.now()
    }
  }],
  price: Number,
  likes: Number
})

// Model
const Book = mongooose.model('Book', BookSchema);

module.exports = Book;