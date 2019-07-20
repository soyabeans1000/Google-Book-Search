    
const { Schema, model } = require('mongoose')
const Article = require('./Article.js')
const documents = {
  Article: Article(Schema, model)
}

module.exports = documents