const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const data=require('./Data.json')
app.get('/', (req, res) => {
  res.send(data)
})
app.get('/image', (req, res) => {
    res.sendFile(__dirname + '/public/burger12.jpg');
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})