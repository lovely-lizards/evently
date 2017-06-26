var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}))

// app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', function (req, res) {
  res.end('Welcome to Evently')
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});