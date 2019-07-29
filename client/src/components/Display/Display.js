import React from 'react';


const Display = props => {
  return (
    <>  
 {
  props.books.map((book, index) => (
    <div className="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-2">
      {book.volumeInfo.imageLinks !== undefined ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} width="150" height="150" alt=" " />
        ) : null}
      </div>
      <div className="col-md-10">
        <div className="card-body">
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">{
            
       
        book.searchInfo.textSnippet.replace("&nbsp;", " ").replace("&quot;", "\" ").replace("&#39;", "\'")
            
            
            
            }</p>
          <p className="card-text"><small class="text-muted"><a href={book.volumeInfo.previewLink}>Preview Link</a></small>
        <p> <button className="btn btn-primary" onClick={props.handleAddToFavs} id={index} >Add to Favorites</button></p>
          </p>
        </div> 
      </div>
    </div>
  </div>
  ))
} 
    </>
  )
}

export default Display

