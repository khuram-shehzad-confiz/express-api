const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(express.static('public'))
app.use(cors())

const data=require('./Data.json')
app.get('/', (req, res) => {
  res.send(data)
})
app.get('/image/:img', (req, res) => {
    console.log('img route')
    console.log(req.params)
    const path=req.params.img
    console.log(path);

    res.sendFile(__dirname + '/public/images/'+path);
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})