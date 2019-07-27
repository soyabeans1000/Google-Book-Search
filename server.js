const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client', 'public')))



app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'public', 'index.html'));
});
require('./routes')(app)


// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/articles_db";
// .connect('MONGODB_URI', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/books_db";


require('mongoose')
  .connect(MONGODB_URI, { useNewUrlParser: true})
  .then(_ => {app.listen(process.env.PORT || 3001)
  console.log('Listening')})
  .catch(e => console.log(e))