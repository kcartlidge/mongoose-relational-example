// Data access.
const bookData = require('./data-access/books')
const genreData = require('./data-access/genres')
const authorData = require('./data-access/authors')

const m = {
  getAuthors: async (req, res) => res.json(await authorData.all()),
  getBooks: async (req, res) => res.json(await bookData.all()),
  getGenres: async (req, res) => res.json(await genreData.all())
}

module.exports = m
