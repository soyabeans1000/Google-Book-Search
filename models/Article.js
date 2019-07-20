
module.exports = (Schema, model) => {
  const Article = new Schema({
  title: {
      type: String
    },
    link: {
      type: String
    }, 
    text: {
      type: String
    }, 
    saved:{
      type: Boolean
    }
  })

  return model('Article', Article)
}