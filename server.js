const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')

app.use(morgan('dev'))

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(4040, () => console.log('app is listening on port 4040'))
