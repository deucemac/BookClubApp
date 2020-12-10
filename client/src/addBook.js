import React, { useState } from 'react'
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
    price: '',
    likes: 0
    })
  // console.log(book.author)
  // console.log(book.title)
  const author = book.author, title = book.title, description = book.description
  const image = book.image
  const moniker = book.comments[0].moniker, bodyComment = book.comments[0].body
  const price = book.price
  console.log(book.comments[0])
  function incrementCount() {
    setBook(prevState => {
      return {...prevState, likes: prevState.likes + 1}
    })
  }
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
    <>
      <form>
        <label>Author: </label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={e => setBook(prevState => {
            return { ...prevState, author: e.target.value }
          }) }
        /><br></br>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setBook(prevState => {
            return { ...prevState, title: e.target.value }
          }) }
        /><br></br>
        <label>Description: </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={e => setBook(prevState => {
            return { ...prevState, description: e.target.value }
          }) }
        /><br></br>
        <label>image: </label>
        <input
          type="text"
          name="image"
          placeholder="image link"
          value={image}
          onChange={e => setBook(prevState => {
            return { ...prevState, image: e.target.value }
          }) }
        /><br></br>
        <div>
           {/* moniker and comment now working but getting an error*/}
          <label>username or moniker: </label>
            <input
              type="text"
              name="image"
              value={moniker}
              onChange={handleMonikerChange}
            />
          <label>comment: </label>
            <input
              type="text"
              name="image"
              value={bodyComment}
              onChange={handleBodyChange}
            />
        </div>
        <label>Price: </label>
          <input
            type="text"
            name="image"
            placeholder="Integer only USD"
            value={price}
            onChange={e => setBook(prevState => {
              return { ...prevState, price: e.target.value }
            }) }
        /><br></br>
      </form>
        <button onClick={ incrementCount }>+</button>
        {/* <span>{likes }</span> */}
        <span>{book.likes }</span>
    </>
  )
}