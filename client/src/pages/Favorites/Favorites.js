import React, {Component} from 'react'

class Favorites extends Component  {

  state = {
    books: []
  }

  getFavs()
  {
    fetch('/favs')
    .then(r => r.json())
    .then(articles => {

      this.setState({
        books: articles
      })
      console.log(this.state.books)

    })
    .catch(e => console.error(e))      
  }


  deleteFav = event => {
    let newValues = {}
    fetch(`/favs/${event.target.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newValues)
    })
      .then(_ => {
        console.log('Item deleted')
      })
      .catch(e => console.error(e))

      this.getFavs()

  }

  componentDidMount = _ => {
      this.getFavs()
  }

  
render(){


  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">My Favorites</h1>
      </div>    
      
 
{   this.state.books.map((book, index) => (
    <div className="card mb-3">
    <div className="row no-gutters">
      {/* <div className="col-md-2">
      {book.volumeInfo.imageLinks !== undefined ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} width="150" height="150" alt=" " />
        ) : null}
      </div> */}
      <div className="col-md-10">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.textSnippet}</p>
          {/* <p className="card-text"><small class="text-muted"><a href={book.volumeInfo.previewLink}>Preview Link</a></small> */}
        <p> <button className="btn btn-primary" id={book._id} onClick={this.deleteFav}>Delete From Favorites</button></p>
          {/* </p> */}
         
        </div> 
      </div>
    </div>
  </div>
        ))
  }
    </>
  )

}
 


}

export default Favorites