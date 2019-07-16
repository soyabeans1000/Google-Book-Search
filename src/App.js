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
    book: {},
    books: []
  }

  handleSearchBooks = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?t=${this.state.title}&apikey=trilogy`)
      .then(({ data: book }) => {
        this.setState({ title: '', book: book })
      })
      .catch(e => console.error(e))
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleAddToFavs = event => {
    let books = this.state.books
    books.push(this.state.book)
    this.setState({ books, book: {} })
  }

  render() {
    return (
      <>
        <Router>
          <div>
     
        {this.state.title}
        <h5 className="card-title">{this.state.book.Title}</h5>
                <p className="card-text">{this.state.book.Plot}</p>



            <Navbar />
            <Route exact path='/' render={_ => (
            <Main 
              handleInputChange={this.handleInputChange}
              handleSearchBooks={this.handleSearchBooks}
              handleAddToFavs={this.handleAddToFavs}
              title={this.state.title}
              book={this.state.book}
            />
            )} />

            <h1> {} </h1>
            { <Route path='/favs' render={_ => (
          <Favorites
               books={this.state.books}
             />
             )} />
          }
          </div>
        </Router>
        
      </>
    )
  }
}

export default App
