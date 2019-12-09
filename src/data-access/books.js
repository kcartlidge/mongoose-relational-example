const Book = require('../models/book')

const m = {
  // List all books with their authors.
  all: async () => {
    const data = await Book.find({})
      .populate(['author', 'genre'])
      .sort({ title: 1 })
      .lean()
    //   .explain('executionStats')
    return data
  }
}

module.exports = m
