const Author = require('../models/author')

const m = {
  // List all authors with their books.
  all: async () => {
    const data = await Author.find({})
      .populate(['books', 'genre'])
      .sort({ name: 1 })
      .lean()
    //   .explain('executionStats')
    return data
  }
}

module.exports = m
