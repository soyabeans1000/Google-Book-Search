
module.exports = (Schema, model) => {
  const Book = new Schema({
  title: {
      type: String
    },
    link: {
      type: String
    }
  })

  return model('Book', Book)
}