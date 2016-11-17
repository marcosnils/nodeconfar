var express = require('express');
var app = express();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongo:27017/node_app')

db.then(() => {
}).catch((err) => {console.log('Error connecting to db, exiting.'); process.exit(1);})

app.use(function(req,res,next){
    req.db = db;
    next();
});


//var count = {total: 1}
app.get('/', function(req, res){
  var count = req.db.get('visits').findOneAndUpdate('582d506d67772bd5bc4e4292', {$inc: {total: 1}}, {upsert: true}).then((count) => {
    res.send("Hello NodeConfAR, visit: " + count.total++);
  });
});
app.listen(3000, function(){
  console.log('Example app listening on 3000');
});
