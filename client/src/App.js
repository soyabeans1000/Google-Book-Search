import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import Books from './utils/Books.js'



class App extends Component {
  state = {
    title: '',
    books: [],
   favBooks: []
  }

  handleSearchBooks = event => {
    event.preventDefault()
     axios.get(`https://www.googleapis.com/books/v1/volumes?q=morning+miracle&maxResults=5&key=AIzaSyBZCnhDSaxZyM3DwLc_Tt-0NLZq_YaK_Ws`)
      .then(({ data: books }) => {
        this.setState({ title: '', books:books.items})
      })
      .catch(e => console.error(e))
  }

  handleInputChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleAddToFavs = event => {
    // let newValues = {
    
    //   title:'Title1',
    //   link: 'Link'
    // }

    
    // fetch(`/favs`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newValues)
    // })
    //   .then(_ => {
    //     console.log('Added New Favorite')
    //   })
    //   .catch(e => console.error(e))
    console.log('Hnadle')
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
