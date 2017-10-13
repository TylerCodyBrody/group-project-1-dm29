var express = require('express')
var bodyParser = require('body-parser')
var massive = require('massive')
var cors = require('cors')
require('dotenv').config()

var app = express()

app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3000

app.get('/api/shelf/:id')

app.listen(port, () => console.log(`listening on port ${port}`))