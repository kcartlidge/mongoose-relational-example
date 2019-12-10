const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('server')

const db = require('./db')
const handlers = require('./handlers')
const compression = require('compression')
const helmet = require('helmet')

// Should be moved to the environment, but these are throwaway values.
const port = 3000
const conn = 'mongodb://books:ghsft5s67a6sfs6s76g@ds121716.mlab.com:21716/mongoose-relational-example'

// Apply the brakes in an emergency.
process.on('uncaughtException', e => {
  console.log(e)
  process.exit(1)
})
process.on('unhandledRejection', e => {
  console.log(e)
  process.exit(1)
})

const app = express()
app
  .use(compression()) // gzip
  .use(helmet()) // headers
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', (req, res) => { res.send('Okay') })
  .get('/authors', handlers.getAuthors)
  .get('/genres', handlers.getGenres)
  .get('/books', handlers.getBooks)

db.init(conn)
db.seed().then(() => {
  debug('STARTING THE SERVER')
  app.listen(port, () => {
    debug(' - http://localhost:' + port)
    debug(' - http://localhost:' + port + '/books')
    debug(' - http://localhost:' + port + '/genres')
    debug(' - http://localhost:' + port + '/authors')
    debug('LISTENING ...')
  })
}).catch((err) => { debug.log('ERROR\n', err.message) })
