var mongoose = require('mongoose')
var Schema = mongoose.Schema

var schema = new Schema({
  title: String,
  blurb: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  started: { type: Date, required: true, default: Date.now },
  deadline: Date,
  published: Date,
  isbn: String,
  word_target: { type: Number, required: true, default: 80000 },
  word_count: { type: Number, required: true, default: 0 },
  genre: { type: Schema.Types.ObjectId, ref: 'Genre', required: true },
  status: { type: String,
    required: true,
    enum: ['1st Draft', '2nd Draft', 'Beta Readers', 'Line Edits', 'Proof', 'Final', 'Errata'],
    default: '1st Draft' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', schema)
