import React from 'react'

const Form = props => {
  return (
    <form>
      <div className="form-group">
        <input type="text" className="form-control" id="title" aria-describedby="bookHelp" placeholder="Type name of book" onChange={props.handleInputChange} value={props.title} />
        <small id="bookHelp" className="form-text text-muted">Type a title in here to search Google for a book...</small>
      </div>
      <button type="submit" className="btn btn-primary" onClick={props.handleSearchBooks}>Search Books</button>
    </form>

  )
}

export default Form
