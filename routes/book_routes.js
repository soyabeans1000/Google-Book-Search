 const  { Book } = require('../models/index.js')
const axios = require('axios')
const { join } = require('path')

var path = require('path')


module.exports = app => {


  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/public/index.html'))
  })

  // If no matching route is found default to home
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/public/index.html'))
  })


  app.get('/favs', function (req, res) {
        Book.find({}, (e, books) => {
       if (e) throw e
       res.send(books)
     })}
   )

   app.post('/favs', (req, res) => {
    console.log(req.body)
    Book.create(req.body, (e, doc) => {
      console.log('here is the doc::::: ', doc)
      if (e) throw e
      res.sendStatus(200)
    })
  })

   app.delete('/favs/:id', function (req, res) {
    // Just Change State to False
   Book.findByIdAndDelete(req.params.id, e => {
      if (e) throw e
      res.sendStatus(200)
    })       
    }
   )
 

}





