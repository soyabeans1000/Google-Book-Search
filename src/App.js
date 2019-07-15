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
    movie: {},
    movies: []
  }

  handleSearchMovie = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?t=${this.state.title}&apikey=trilogy`)
      .then(({ data: movie }) => {
        this.setState({ title: '', movie })
      })
      .catch(e => console.error(e))
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleAddMovie = event => {
    let movies = this.state.movies
    movies.push(this.state.movie)
    this.setState({ movies, movie: {} })
  }

  render() {
    return (
      <>
        <Router>
          <div>
        
            <Navbar />
            <Route exact path='/' render={_ => (
            <Main 
              handleInputChange={this.handleInputChange}
              handleSearchMovie={this.handleSearchMovie}
              handleAddMovie={this.handleAddMovie}
              title={this.state.title}
              movie={this.state.movie}
            />
            )} />
            <Route path='/favs' render={_ => (
            <Favorites
              movies={this.state.movies}
            />
            )} />
        
          </div>
        </Router>
        
      </>
    )
  }
}

export default App
