import React from 'react'

const Display = props => {
  return (
    <>
        {
          props.book.Title ? (
            <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '30px', marginBottom: '30px' }}>
              <img className="card-img-top" src={props.book.Poster} alt="movie" />
              <div className="card-body">
                <h5 className="card-title">{props.book.Title}</h5>
                <p className="card-text">{props.book.Plot}</p>
                <button className="btn btn-success" onClick={props.handleAddToFavs}>Add To Watchlist</button>
              </div>
            </div>
          ) : null
        }
    </>
  )
}

export default Display
