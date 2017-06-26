var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var hostsSchema = mongoose.Schema({
  name: {type: String, unique: true},
  rating: Array,
  events: Array
});

var Hosts = mongoose.model('Hosts', hostsSchema);


var vendorsSchema = mongoose.Schema({
  name: {type: String, unique: true},
  type: Array,
  location: String,
  delivery: Array,
  rating: Array
});

var Vendors = mongoose.model('Vendors', vendorsSchema);

var eventsSchema = mongoose.Schema({
  host: String,
  needs: Array,
  location: Array,
  date: Date,
  vendors: Array
});

var Events = mongoose.model('Events', eventsSchema);

/*
String
Number
Date
Buffer
Boolean
Mixed
Objectid
Array

 */