 const  { Article } = require('../models/index.js')
const axios = require('axios')


module.exports = app => {
  app.get('/books', function (req, res) {  

    
  })

  app.get('/favs', function (req, res) {
    // Get()
     Book.find({}, (e, articles) => {
       if (e) throw e
       res.send(articles)
 
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





