const mongoose = require('mongoose')
const seed = require('./seed')

const m = {
  init: (conn) => {
    mongoose.connect(conn, { useNewUrlParser: true })
  },
  seed: async () => {
    await seed.clear()
    await seed.populate()
  }
}

module.exports = m
