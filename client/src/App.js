import AddBook from './AddBook'
import './css/app.scss';
import './App.css';
import React, { useState, useEffect } from 'react'
import { getAllBooks } from './services/api-method'

function App() {

  // const [book, setBook] = useState(() => {
  //   const books = getAllBooks();
  //   books.then((data) => {
  //     return data
  //   }).catch((err)=> console.log(err))
  //   return books;
  // });

  const [books, setBooks] = useState([])

  useEffect(() => {
    getAllBooks().then((data) => {
      setBooks(data)
      // setBooks(prev => [...prev, data])
    })
  }, []);



  console.log(books)
  return (
    <div className="App">
      <AddBook />
      <div className="books-container">
        {books.length && books.map((book, index) => (
          <div key={index}>
            <h1>{book.title}</h1>
            <p>by {book.author}</p>
            <img src={book.image} />
            <p>{book.description}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
