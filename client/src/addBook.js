import React, { useState } from 'react'
import './css/addbook.scss'
// import axios from 'axios';
import {addBook} from './services/api-method'

export default function AddBook() {
  const [book, setBook] = useState({
    author: '',
    title: '',
    description: '',
    image: '',
    comments: [{
      moniker: '',
      body: ''
    }]
  })
  console.log(book);
  

  function handleChange({ target }) {
    const { name, value } = target;

    setBook(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  async function submitForm(event) {
    event.preventDefault();
    const payload = {
      author: book.author,
      title: book.title,
      description: book.description,
      image: book.image,
      comments: [{
        moniker: book.comments[0].moniker,
        body: book.comments[0].body
      }]
    }
    await addBook(
      payload.author,
      payload.title,
      payload.description,
      payload.image,
      payload.comments[0],
    )
    
    };

    

  

  return (
    <div className="form-container">
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>image</label>
          <input
            type="text"
            name="image"
            placeholder="image link"
            value={book.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          {/* moniker and comment now working but getting an error*/}
          <label>username or moniker</label>
          <input
            type="text"
            name="moniker"
            value={book.comments[0].moniker}
            onChange={(event) => {
              setBook(prevState => ({
                ...book,
                comments: [{
                  moniker: event.target.value,
                  body: prevState.comments[0].body
                }]
              }))
            }}
          />
        </div>
        <div className="form-group">
          <label>comment</label>
          <input
            type="text"
            name="body"
            value={book.comments[0].body}
            onChange={(event) => {
              setBook(prevState=> ({
                ...book,
                comments: [{
                  moniker: prevState.comments[0].moniker,
                  body: event.target.value
                }]
              }))
            }}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}