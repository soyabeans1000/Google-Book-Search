import React from 'react'

const Favorites = props => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">My Movie Watchlist</h1>
        <p className="lead">Here you can see all the movies you added to your watchlist!</p>
      </div>
      {
        props.books.map(book => (
          <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '30px', marginBottom: '30px' }}>
            <img className="card-img-top" src={book.Poster} alt="movie" />
            <div className="card-body">
              <h5 className="card-title">{book.Title}</h5>
              <p className="card-text">{book.Plot}</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Favorites