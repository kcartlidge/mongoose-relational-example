const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const handlers = require('./handlers')

// Should be moved to the environment, but these are throwaway values.
const port = 3000
const conn = 'mongodb://localhost/books'

const app = express()
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', (req, res) => { res.send('Okay') })
  .get('/authors', handlers.getAuthors)
  .get('/genres', handlers.getGenres)
  .get('/books', handlers.getBooks)

console.log('RE-SEEDING THE DATA')
db.init(conn)
db.seed().then(() => {
  console.log('STARTING THE SERVER')
  app.listen(port, () => {
    console.log(' - http://localhost:' + port)
    console.log(' - http://localhost:' + port + '/books')
    console.log(' - http://localhost:' + port + '/genres')
    console.log(' - http://localhost:' + port + '/authors')
    console.log('LISTENING ...')
  })
}).catch((err) => { console.log('ERROR\n', err.message) })
