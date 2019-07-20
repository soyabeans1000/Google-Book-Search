import React from 'react'

const Display = props => {
  return (
    <>

{
  // props.books.map(book => (
  //   <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '30px', marginBottom: '30px' }}>
  //     {/* <img className="card-img-top" src={book.Poster} alt="movie" /> */}
  //     <div className="card-body">
  //       <h5 className="card-title">{book.volumeInfo.title}</h5>
  //        <p className="card-text">{book.volumeInfo.description}</p> 
  //     </div>
  //   </div>
  // ))


props.books.map(book => (
  <div className="card mb-3" style={{maxWidth: '540px'}}>
  <div className="row no-gutters">
    {/* <div className="col-md-4">
      <img src={book.volumeInfo.imageLinks.thumbnail} className="card-img" alt="..." />
      {book.volumeInfo.imageLinks.thumbnail}
    </div> */}
    <div className="col-md-12">
      <div className="card-body">
        <h5 className="card-title">{book.volumeInfo.title}</h5>
        <p className="card-text">{book.searchInfo.textSnippet}</p>
        <p className="card-text"><small className="text-muted">{book.volumeInfo.authors.map(x=> x + " ")}</small></p>
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

