import React from 'react'

const Form = props => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Movie Title</label>
        <input type="text" className="form-control" id="title" aria-describedby="movieHelp" placeholder="Goodfellas" onChange={props.handleInputChange} value={props.title} />
        <small id="movieHelp" className="form-text text-muted">Type a title in here to search our databases for a movie.</small>
      </div>
      <button type="submit" className="btn btn-primary" onClick={props.handleSearchMovie}>Search</button>
    </form>

  )
}

export default Form
