var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js')
var app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( express.static(__dirname + '/../react-client/dist') );

// Server Log Middleware
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.url} ${new Date()}`);
  next();
});

//===============
// API GET ROUTES
//===============

app.get('/api/vendors', function(req, res) {

  db.Vendors.find( (err, vendors) => {

    res.send(vendors);

  });

});

app.get('/api/hosts', function(req, res) {

  db.Hosts.find( (err, hosts) => {

    res.send(hosts);

  });

});

app.get('/api/events', function(req, res) {

  db.Events.find( (err, events) => {

    res.send(events);

  });

});


app.get('/api/events/:id', function(req, res ) {

  db.Events.findOne({_id: req.params.id}, (err, event) => {

    res.send(event);

  });

});

//================
// API POST ROUTES
//================

app.post('/api/events', function(req, res) {
  // CREATE NEW EVENT
});

//================
// API PUT ROUTES
//================

app.put('/api/events/:id', function(req, res) {
  // UPDATE THE EVENT WITH BID?
  console.log('PUT request has been sent');
  console.log('Updating event with ID:', req.params.id);
  res.send('Updated event with ID: ', req.params.id);
});


app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});