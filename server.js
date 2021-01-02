const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})