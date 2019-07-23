    
const { Schema, model } = require('mongoose')
const Book = require('./Book.js')
const documents = {
  Book: Book(Schema, model)
}

module.exports = documents