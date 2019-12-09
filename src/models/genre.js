var mongoose = require('mongoose')
var Schema = mongoose.Schema

var schema = new Schema({
  title: String,
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
}, {
  timestamps: true
})

schema
  .index({ title: 1 }, { unique: true })

module.exports = mongoose.model('Genre', schema)
