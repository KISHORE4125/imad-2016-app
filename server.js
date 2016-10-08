var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/conter',function(req,res){
    counter =counter+1;
    res.send(counter.toString());
});

app.get('/articleone',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'articleone.html'));

});
app.get('/articletwo',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get('/articlethree',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'articlethree.html')); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/IMG-20160728-WA0000.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'IMG-20160728-WA0000.jpg'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
