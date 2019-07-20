import React from 'react'
import Form from '../../components/Form'
import Display from '../../components/Display'

const Main = props => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Google Book Search</h1>
        <Form
        handleInputChange={props.handleInputChange}
        title={props.title}
        handleSearchBooks={props.handleSearchBooks}
      />
      </div>
     
      { <Display
        books={props.books}
        handleAddToFavs={props.handleAddToFavs}
      />}
    </>
  )
}

export default Main
