import React from 'react'

const Display = props => {
  return (
    <>
        {
          props.movie.Title ? (
            <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '30px', marginBottom: '30px' }}>
              <img className="card-img-top" src={props.movie.Poster} alt="movie" />
              <div className="card-body">
                <h5 className="card-title">{props.movie.Title}</h5>
                <p className="card-text">{props.movie.Plot}</p>
                <button className="btn btn-success" onClick={props.handleAddMovie}>Add To Watchlist</button>
              </div>
            </div>
          ) : null
        }
    </>
  )
}

export default Display
