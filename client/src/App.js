import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    title: '',
    books: [],
   favBooks: []
  }

  handleSearchBooks = event => {
    event.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=morning+miracle&maxResults=10&key=${process.ENV.BOOKS_API}`)
      .then(({ data: books }) => {
        this.setState({ title: '', books:books.items})

        console.log(books.items)

      })
      .catch(e => console.error(e))
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleAddToFavs = event => {
    // let favBooks = this.state.booksfavBooks
    // favBooks.push(this.state.books)
    // this.setState({ favBooks, books: {} })

    console.log('Inside add to favorites')
  }

  render() {
    return (
      <>
        <Router>
          <div>
     
        {this.state.books.title}
       


            <Navbar />
            <Route exact path='/' render={_ => (
            <Main 
              handleInputChange={this.handleInputChange}
              handleSearchBooks={this.handleSearchBooks}
              handleAddToFavs={this.handleAddToFavs}
              title={this.state.title}
              books={this.state.books}
            />
            )} />

           <Route path='/favs' render={_ => 
          <Favorites />} />
          
          </div>
        </Router>
        
      </>
    )
  }
}

export default App
