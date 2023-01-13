const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/costanzachic')
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to db'))
app.get('/', (req, res) => {
  res.status(200).send({
    outfit: 'Gore tex',
    img: 'https://pbs.twimg.com/media/C24u9TsWEAIc4O9.jpg'
  })
})

app.listen(3000, () => {
  console.log('were live mang')
})
