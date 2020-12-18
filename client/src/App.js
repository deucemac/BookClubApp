import AddBook from './AddBook'
import './css/app.scss';
import './App.css';
import React, { useState, useEffect } from 'react'
import { getAllBooks } from './services/api-method'

function App() {

  const [books, setBooks] = useState([])
  // count and setCount are only used to be passed down so that useEffect can run again after you submit the form data, it's like toggling in order to trigger the useEffect 
  const [count, setCount] = useState(0)

  useEffect(() => {
    getAllBooks().then((data) => {
      setBooks(data)
      // setBooks(prev => [...prev, data])
    })
  }, [count]);



  return (
    <div className="App">
      <AddBook setCount={setCount} count={count} />
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
