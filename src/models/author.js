var mongoose = require('mongoose')
var Schema = mongoose.Schema

var schema = new Schema({
  name: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, {
  timestamps: true
})

schema
  .virtual('book_count')
  .get(function () {
    return this.books.length
  })

module.exports = mongoose.model('Author', schema)
