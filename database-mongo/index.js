var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/evently');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

/* -----------------------Schemas----------------------- */

var userSchema = mongoose.Schema({
  id: {type: Number, unique: true, index: true},
  name: String,
});

var eventsSchema = mongoose.Schema({
  title: String,
  userid: Number,
  needs: mongoose.Schema.Types.Mixed,
  location: String,
  date: String,
  vendors: Array
});

var vendorSchema = mongoose.Schema({
  id: {type: Number, unique: true, index: true},
  organization: String,
  service: mongoose.Schema.Types.Mixed,
  location: String,
  description: String
});

/* -----------------------Models----------------------- */

var Users = mongoose.model('Users', userSchema);
var Events = mongoose.model('Events', eventsSchema);
var Vendors = mongoose.model('Vendors', vendorSchema);


module.exports.Users = Users;
module.exports.Events = Events;
module.exports.Vendors = Vendors;
