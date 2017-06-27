var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
// mongoose.connect('mongodb://localhost/test', function(){
//   mongoose.connection.db.dropDatabase();
// });

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
  rating: [5, 4, 4],
  events: []
});

Hosts.findOne({ name: 'Ryan Platon' }, function (err, host){
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
  rating: [5, 4, 5],
  events: []
});

Hosts.findOne({ name: 'Jasper Yu' }, function (err, host){
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
  rating: [4, 5, 5],
  events: []
});

Hosts.findOne({ name: 'Peter Tan' }, function (err, host){
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
      // console.log('FIND ONE FOR PETER', host);
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

var RyPizzle = new Vendors ({
  username: 'RyPizzle',
  name: 'RyPizzle',
  type: ['music', {
    country: true,
    house: true,
    edm: true
  }],
  locaiton: '944 Market St, San Francisco, CA',
  delvery: [true, {
    bernalheights: true,
    upperhaight: true,
    soma: true
  }],
  rating: [5, 3, 4, 5]
});

Vendors.findOne({ name: 'Ryan Platon' }, function (err, vendor){
  if (err) {
    console.log(err);
  } else {
    if (vendor === null) {
      RyPizzle.save(function(err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${user.name.toUpperCase()} INTO DATABASE`);
        }
      });
    } else {
      // console.log('FIND ONE FOR PETER', host);
      console.log(vendor.name + ' is already in the VENDORS DB');
    }
  }
});

var jasperComfortFood = new Vendors ({
  username: 'jasperComfortFood',
  name: `Jasper's Southern Comfort Food`,
  type: ['food', {
    comfort: true
  }],
  locaiton: '3415 California St, San Francisco, CA',
  delivery: [true, {
    haight: true,
    richmond: true,
    sunset: true
  }],
  rating: [4, 4, 5, 3]
});

Vendors.findOne({ username: 'jasperComfortFood' }, function (err, vendor){
  if (err) {
    console.log(err);
  } else {
    if (vendor === null) {
      jasperComfortFood.save(function(err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${user.name.toUpperCase()} INTO DATABASE`);
        }
      });
    } else {
      // console.log('FIND ONE FOR PETER', host);
      console.log(vendor.name + ' is already in the VENDORS DB');
    }
  }
});

var peteShots = new Vendors ({
  username: 'peteShots',
  name: `Peter's Photography Studio`,
  type: ['photography', {
    wedding: true,
    event: true,
    product: true
  }],
  locaiton: '139 Stillman St #7, San Francisco, CA',
  delivery: [true, {
    all: true
  }],
  rating: [5, 5, 2, 4]
});

Vendors.findOne({ username: 'peteShots' }, function (err, vendor){
  if (err) {
    console.log(err);
  } else {
    if (vendor === null) {
      peteShots.save(function(err, user) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${user.name.toUpperCase()} INTO DATABASE`);
        }
      });
    } else {
      // console.log('FIND ONE FOR PETER', host);
      console.log(vendor.name + ' is already in the VENDORS DB');
    }
  }
});

/* -----------------------Events----------------------- */
// whenever the host post a new event, the id should go to into the events []
var eventsSchema = mongoose.Schema({
  host: String,
  needs: Array,
  location: Array,
  date: String,
  vendors: Array
});

var Events = mongoose.model('Events', eventsSchema);
// new events should be the hostname and date

var ryanPlaton07012017 = new Events ({
  host: 'ryanPlaton',
  needs: [
    ['food', {comfort: true}, 200],
    ['music', {edm: true}, 300],
    ['photography', {events: true,}, 300]
  ],
  location: ['San Francisco', {
    richmond: true,
  }],
  date: '07/01/2017',
  vendors: []
});

Events.findOne({ host: 'ryanPlaton', date: '07/01/2017' }, function (err, event){
  if (err) {
    console.log(err);
  } else {
    if (event === null) {
      ryanPlaton07012017.save(function(err, event) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${event.host.toUpperCase() + event.date} INTO DATABASE`);
        }
      });
    } else {
      // console.log('FIND ONE FOR PETER', host);
      console.log(event.host + event.date + ' is already in the EVENTS DB');
    }
  }
});

var jasperYu07052017 = new Events ({
  host: 'jasperYu',
  needs: [
    ['food', {comfort: true}, 200],
    ['music', {edm: true}, 300],
    ['photography', {events: true,}, 300]
  ],
  location: ['San Francisco', {bernalheights: true}],
  date: '07/05/2017',
  vendors: []
});

Events.findOne({ host: 'jasperYu', date: '07/05/2017' }, function (err, event){
  if (err) {
    console.log(err);
  } else {
    if (event === null) {
      jasperYu07052017.save(function(err, event) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${event.host.toUpperCase() + event.date} INTO DATABASE`);
        }
      });
    } else {
      // console.log('FIND ONE FOR PETER', host);
      console.log(event.host + event.date + ' is already in the EVENTS DB');
    }
  }
});

var peterTan07082017 = new Events ({
  host: 'peterTan',
  needs: [
    ['food', {comfort: true}, 200],
    ['music', {edm: true}, 300],
    ['photography', {events: true,}, 300]
  ],
  location: ['San Francisco', {soma: true}],
  date: '07/08/2017',
  vendors: []
});

Events.findOne({ host: 'peterTan', date: '07/08/2017' }, function (err, event){
  if (err) {
    console.log(err);
  } else {
    if (event === null) {
      peterTan07082017.save(function(err, event) {
        if (err) {
          console.log(err);
        } else {
          console.log(`SAVED ${event.host.toUpperCase() + event.date} INTO DATABASE`);
        }
      });
    } else {
      // console.log('FIND ONE FOR PETER', host);
      console.log(event.host + event.date + ' is already in the EVENTS DB');
    }
  }
});

module.exports.Hosts = Hosts;
module.exports.Events = Events;
module.exports.Vendors = Vendors;

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