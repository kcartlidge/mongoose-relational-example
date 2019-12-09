const express = require('express')
const bodyParser = require('body-parser')

const port = 3000

const app = express()
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', (req, res) => { res.send('Okay') })

app.listen(port, () => {
  console.log(' - http://localhost:' + port)
  console.log('LISTENING ...')
})
