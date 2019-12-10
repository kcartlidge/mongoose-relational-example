const path = require('path')

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.js'
  },
  target: 'node'
}
