import React from 'react'

const Display = props => {


  // function ShowImage(src) {
  //   return <img src={src} className="card-img"  />;
  // }
  


  return (
    <>

 {
//   props.books.map(book => (
//     <div className="card mb-3">
//     <div className="row no-gutters">
//       <div className="col-md-4">
//         <img src="https://t4.ftcdn.net/jpg/01/22/94/29/240_F_122942934_AUgKj7X9N8vH1AFgYZUXu1JIsoQLRsIR.jpg" width="0"   class="card-img" alt="..."/>
//       </div>
//       <div className="col-md-8">
//         <div className="card-body">
//           <h5 className="card-title">{book.volumeInfo.title}</h5>
//           <p className="card-text">{book.searchInfo.textSnippet}</p>
//           <p className="card-text"><small class="text-muted"><a href={book.volumeInfo.previewLink} target="_blank">Preview Link</a></small></p>
//         </div>
//       </div>
//     </div>
//   </div>
//   ))
// }

 
 props.books.map(book => (

   <div className="card mb-3" style={{maxWidth: '75%'}}>  
    <div className="row no-gutters">
   <div className="col-md-4">



   {book.volumeInfo.imageLinks !== undefined ? (
        <img src={book.volumeInfo.imageLinks.thumbnail} width="150" height="150" alt=" " />
  
      ) : null}

  
  </div>
   <div className="col-md-12">
       <div className="card-body">
         <h5 className="card-title">{book.volumeInfo.title}</h5>
    <p className="card-text"><a href={book.volumeInfo.previewLink} target="_blank">Preview Link</a></p>         <p className="card-text"><small className="text-muted">{book.volumeInfo.authors.map(x=> x + " ")}</small></p>
     </div>
    </div> </div>
 </div>
   )) } 
    </>
  )
}

export default Display

