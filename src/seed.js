const debug = require('debug')('seeding')

// Schemas.
const Genre = require('./models/genre')
const Book = require('./models/book')
const Author = require('./models/author')

const m = {
  clear: async () => {
    debug(' - Deleting books, authors, and genres')
    await Book.deleteMany({})
    await Author.deleteMany({})
    await Genre.deleteMany({})
  },

  // Note that this could be simplified using batch insertions
  // etcetera but the aim here is for clarity not conciseness.
  populate: async () => {
    debug(' - Adding genres and authors')
    const gen = await Genre.create({ title: 'Fantasy' })
    const aut = await Author.create({ name: 'Tolkien, JRR' })

    debug(' - Adding books')
    const bk1 = await Book.create({ title: 'Hobbit, the', author: aut._id, genre: gen._id })
    const bk2 = await Book.create({ title: 'Silmarillion, the', author: aut._id, genre: gen._id })

    debug(' - Linking the books to the author')
    aut.books = [bk1._id, bk2._id]
    await aut.save()

    debug(' - Linking the books to the genre')
    gen.books = [bk1._id, bk2._id]
    await gen.save()
  }
}

module.exports = m
