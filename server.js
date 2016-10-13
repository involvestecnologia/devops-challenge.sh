const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://involves:challenge@ds027896.mlab.com:27896/guikolt-involves', function(err, database) {
  if (err) return console.log(err)
  db = database
  app.listen(3000, function(){
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', function(req, res) {
  db.collection('quotes').find().toArray(function(err, result) {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})

app.route('/quotes')
  .post(function(req, res){
    db.collection('quotes').save(req.body, function(err, result) {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/')
    })
  })
  .delete(function(req, res){
    db.collection('quotes').remove({}, function(err, result) {
      if (err) return console.log(err)
      console.log('removed from database')
      res.redirect('/')
    })
  })
  .put(function(req, res){
    replaceQuote(db);
  })

var replaceQuote = function(db) {
  var collection = db.collection('quotes');
  collection.find({quote: /Windows/}).forEach(function(e,i) {
    e.quote=e.quote.replace("Windows", "Linux is better");
    db.collection('quotes').save(e);
  },function(err, result) {
    if (err) return console.log(err)
    console.log('quote replaced to database')
  })
}
