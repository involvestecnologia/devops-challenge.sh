const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3000

var db

MongoClient.connect(MONGODB_URI, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(PORT, () => {
    console.log('listening on ' + PORT)
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').remove({}, function(err, result){
    if (err) return console.log(err)
    console.log('deleted')
    res.redirect('/')
  })
})

app.put('/quotes', (req, res) => {
  db.collection('quotes').findAndModify(
    {quote: 'Windows'},
    [['name', 'asc']],
    {$set: {quote: 'Linux is better'}},
    function(err, result){
      if (err) return console.log(err)
      console.log('Linux is better OK')
      res.redirect('/')
  })
})