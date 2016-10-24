const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

var MONGO_DB
var DOCKER_DB = process.env.MONGODB_PORT

if ( DOCKER_DB ) {
  MONGO_DB = DOCKER_DB.replace( 'tcp', 'mongodb' ) + '/devops-test'
} else {
  MONGO_DB = process.env.MONGODB
}

MongoClient.connect(MONGO_DB, (err, database) => {
  if (err) 
    return console.log(err)
  db = database
  app.listen(process.env.WEB_APP_PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => { 
  db.collection('quotes').find().toArray((err, result) => {
    if (err) 
      return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body,(err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').remove({}, (err, result) => {
    if (err){
      console.log(err)
      return res.send(500, err)
    }
    console.log('removed to database')
    res.redirect('/')
  })
})

app.put('/quotes',(req, res) => {
  var collection = db.collection('quotes');
  collection.find({quote: /WINDOWS/i }).forEach((e,i) => {
    console.log("OBJ = ", e);
    e.quote=e.quote.replace(/WINDOWS/ig, "Linux is better");
    db.collection('quotes').save(e);
    },(err, result) =>{
      if (err) return console.log(err)
      console.log("quote replaced to database")
      res.redirect('/')
      res.send(result)
    })
})