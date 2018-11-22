const Genre = require('../models/genre')

const m = {
  // List all genres with their books.
  all: async () => {
    const data = await Genre.find({}).populate('books').sort({ title: 1 }).lean()
    return data
  }
}

module.exports = m
