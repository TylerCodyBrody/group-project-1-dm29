var express = require('express')
var bodyParser = require('body-parser')
var massive = require('massive')
var cors = require('cors')
require('dotenv').config()
var bc = require('./bin_controller')

var app = express()

app.use(bodyParser.json())
app.use(cors())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
})

const port = process.env.PORT || 3001


app.get('/api/shelf/:id', bc.getBin)

app.listen(port, () => console.log(`listening on port ${port}`))