import Axios from 'axios';



const api = Axios.create({
  baseURL: '/api',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default api;