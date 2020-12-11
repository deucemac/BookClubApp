import React, { useState } from 'react'
import './css/addbook.scss'
import likebutton from './imgs/likebutton.png'

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
  // console.log(book.author)
  // console.log(book.title)
  const author = book.author, title = book.title, description = book.description
  const image = book.image
  const moniker = book.comments[0].moniker, bodyComment = book.comments[0].body
  console.log(book.comments[0])
  function handleBodyChange(e) {
    setBook(prevState => {
      return { ...prevState, comments:[{body: e.target.value}]}
    })
  }
  function handleMonikerChange(e) {
    setBook(prevState => {
      return { ...prevState, comments:[{moniker: e.target.value}]}
    })
  }
  return (
    <div class="form-container">
      <form>
        <div class="form-group">
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={e => setBook(prevState => {
            return { ...prevState, author: e.target.value }
          }) }
          />
        </div>
        <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setBook(prevState => {
            return { ...prevState, title: e.target.value }
          }) }
          />
        </div>
        <div class="form-group">
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={e => setBook(prevState => {
            return { ...prevState, description: e.target.value }
          }) }
          />
        </div>
        <div class="form-group">
        <label>image</label>
        <input
          type="text"
          name="image"
          placeholder="image link"
          value={image}
          onChange={e => setBook(prevState => {
            return { ...prevState, image: e.target.value }
          }) }
          />
          </div>
        <div class="form-group">
           {/* moniker and comment now working but getting an error*/}
          <label>username or moniker</label>
            <input
              type="text"
              name="image"
              value={moniker}
              onChange={handleMonikerChange}
          />
          </div>
          <div class="form-group">
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