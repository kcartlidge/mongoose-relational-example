var mongoose = require('mongoose')
var Schema = mongoose.Schema

var schema = new Schema({
  title: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Genre', schema)
