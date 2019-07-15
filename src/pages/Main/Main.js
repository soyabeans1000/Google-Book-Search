import React from 'react'
import Form from '../../components/Form'
import Display from '../../components/Display'

const Main = props => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">My Movie App</h1>
        <p className="lead">This is an app where you can look up a movie and see all kinds of information about it!</p>
      </div>
      <Form
        handleInputChange={props.handleInputChange}
        title={props.title}
        handleSearchMovie={props.handleSearchMovie}
      />
      <Display
        movie={props.movie}
        handleAddMovie={props.handleAddMovie}
      />
    </>
  )
}

export default Main
