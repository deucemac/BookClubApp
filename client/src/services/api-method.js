import api from './apiHelper'

export const addBook = async (author, title, descr, img, comment) => {
  try {
    const resp = await api.post('/save', {
      author: author,
      title: title,
      description: descr,
      image: img,
      comments: [{
        moniker: comment.moniker,
        body:  comment.body
      }]
    })
    // console.log(resp)
    console.log('data has been sent')
  } catch {
    console.log('internal error')
  }
  
}