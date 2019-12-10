const debug = require('debug')('seeding')

const mongoose = require('mongoose')
const seed = require('./seed')

const m = {
  init: (conn) => {
    debug('STARTING THE DATABASE CONNECTION')
    mongoose.connect(conn, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  },
  seed: async () => {
    debug('SEED THE DATABASE')
    await seed.clear()
    await seed.populate()
  }
}

module.exports = m
