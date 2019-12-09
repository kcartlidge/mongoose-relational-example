const mongoose = require('mongoose')
const seed = require('./seed')

const m = {
  init: (conn) => {
    mongoose.connect(conn, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  },
  seed: async () => {
    await seed.clear()
    await seed.populate()
  }
}

module.exports = m
