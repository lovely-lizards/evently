var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

/* -----------------------Hosts----------------------- */

var hostsSchema = mongoose.Schema({
  username: {type: String, unique: true},
  name: String,
  rating: Array,
  events: Array
});

var Hosts = mongoose.model('Hosts', hostsSchema);

var ryanPlaton = new Hosts ({
  username: 'ryanPlaton',
  name: 'Ryan Platon',
  rating: [],
  events: []
});

Hosts.findOne({ name: 'Ryan Platon'}, function (err, host){
  if (err) {
    console.log(err);
  } else {
    if (host === null) {
      ryanPlaton.save(function(err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${user.name.toUpperCase()} INTO DATABASE`);
        }
      });
    } else {
      console.log(host.name + ' is already in the HOSTS DB');
    }
  }
});

var jasperYu = new Hosts ({
  username: 'jasperYu',
  name: 'Jasper Yu',
  rating: [],
  events: []
});

Hosts.findOne({ name: 'Jasper Yu'}, function (err, host){
  if (err) {
    console.log(err);
  } else {
    if (host === null) {
      jasperYu.save(function(err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${user.name.toUpperCase()} INTO DATABASE`);
        }
      });
    } else {
      console.log(host.name + ' is already in the HOSTS DB');
    }
  }
});

var peterTan = new Hosts ({
  username: 'peterTan',
  name: 'Peter Tan',
  rating: [],
  events: []
});

Hosts.findOne({ name: 'Peter Tan'}, function (err, host){
  if (err) {
    console.log(err);
  } else {
    if (host === null) {
      peterTan.save(function(err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${user.name.toUpperCase()} INTO DATABASE`);
        }
      });
    } else {
      console.log(host.name + ' is already in the HOSTS DB');
    }
  }
});

/* -----------------------Vendors----------------------- */

var vendorsSchema = mongoose.Schema({
  username: {type: String, unique: true},
  name: String,
  type: Array,
  location: String,
  delivery: Array,
  rating: Array
});

var Vendors = mongoose.model('Vendors', vendorsSchema);

/* -----------------------Events----------------------- */

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