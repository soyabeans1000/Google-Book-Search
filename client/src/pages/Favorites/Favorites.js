import React, {Component} from 'react'
import axios from 'axios'


class Favorites extends Component  {


  state = {
    books: []
  }

  componentDidMount = _ => {
    axios.get(`/favs`)
      .then(({ data: books }) => this.setState({
        books: books
      }))
      .catch(e => console.error(e))
  }

  
render(){


  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">My Favorites</h1>
      </div>    
{
  this.state.books.map((book, index) => (
    <div>
    <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '30px', marginBottom: '30px' }}> Books </div>
       <img className="card-img-top" src={book.link} alt="movie" />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.title}</p>        
        </div>
        </div>
        ))
  }
    </>
  )

}
 
}

export default Favorites