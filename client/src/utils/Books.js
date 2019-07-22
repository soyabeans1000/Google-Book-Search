import axios from 'axios'

const Books = {
  getBooks: _ => axios.get('/stacks'),
  getFavorites: _ => axios.get('/favorites'),
  addFavorite: id => axios.put(`/book/${id}`),
  deleteStack: id => axios.delete(`/book/${id}`)
}

export default Books
