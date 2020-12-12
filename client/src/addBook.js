import React, { useState } from 'react'
import './css/addbook.scss'

export default function AddBook() {
  const [book, setBook] = useState({
    author: '',
    title: '',
    description: '',
    image: '',
    comments: [{
      moniker: '',
      body: ''
    }],
    price: ''
  })
  const author = book.author, title = book.title, description = book.description
  const image = book.image
  const moniker = book.comments[0].moniker, bodyComment = book.comments[0].body
  function handleBodyChange(e) {
    setBook(prevState => {
      return { ...prevState, comments: [{ body: e.target.value }] }
    })
  }
  function handleMonikerChange(e) {
    setBook(prevState => {
      return { ...prevState, comments: [{ moniker: e.target.value }] }
    })
  }
  function handleChange(e) {
    const target = e.target;
    const name = target.name
    const value = target.value;
    setBook(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>image</label>
          <input
            type="text"
            name="image"
            placeholder="image link"
            value={image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          {/* moniker and comment now working but getting an error*/}
          <label>username or moniker</label>
          <input
            type="text"
            name="image"
            value={moniker}
            onChange={handleMonikerChange}
          />
        </div>
        <div className="form-group">
          <label>comment</label>
          <input
            type="text"
            name="image"
            value={bodyComment}
            onChange={handleBodyChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}