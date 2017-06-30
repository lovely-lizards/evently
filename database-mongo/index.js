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

/* -----------------------Users----------------------- */

var userSchema = mongoose.Schema({
  id: {type: Number, unique: true, index: true},
  name: String,
  host: mongoose.Schema.Types.Mixed,
  vends: mongoose.Schema.Types.Mixed
});



var Users = mongoose.model('Users', userSchema);



/* -----------------------Events----------------------- */
// whenever the host post a new event, the id should go to into the events []
var eventsSchema = mongoose.Schema({
  title: String,
  userid: Number,
  needs: mongoose.Schema.Types.Mixed,
  location: String,
  date: String,
  vendors: Array
});

var Events = mongoose.model('Events', eventsSchema);

var jasperYu07052017 = new Events ({
  title: 'Jaspers dogs birthday',
  userid: 10158962670505581,
  needs: {
    food: {
      budget: 200,
      Japanese: true,
      Chinese: true
    },
    music: {
      budget: 300,
      Classical: true
    },
    photography: {
      budget: 300,  
      Events: true
    }
  },
  location: '944 Market St, San Francisco, CA',
  date: 07052017,
  vendors: []
});

Events.findOne({ location: '944 Market St, San Francisco, CA' }, function (err, event){
  if (err) {
  } else {
    if (event === null) {
      jasperYu07052017.save(function(err, event) {
        console.log(`SAVED ${event.id} INTO EVENTS DB`);
      });
    } else {
      console.log(event.userid + ' is already in the HOSTS DB');
    }
  }
});

var peterTan07082017 = new Events ({
  title: 'peters first child',
  userid: 10158962670505581,
  needs: {
    food: {
      budget: 200,
      chinese: true
    },
    music: {
      budget: 300,
      Rock: true
    },
    photography: {
      budget: 300,
      events: true
    }
  },
  location: '611 Mission St #2, San Francisco, CA 94105',
  date: 07082017,
  vendors: []
});

Events.findOne({ location: '611 Mission St #2, San Francisco, CA 94105' }, function (err, event){
  if (err) {
  } else {
    if (event === null) {
      peterTan07082017.save(function(err, event) {
        console.log(`SAVED ${event.id} INTO EVENTS DB`);
      });
    } else {
      console.log(event.userid + ' is already in the HOSTS DB');
    }
  }
});



var ryanPlaton07102017 = new Events ({
  title: 'ryan finds new meaning to life',
  userid: 100576853912922,
  needs: {
    food: {
      budget: 200,
      Chinese: true
    },
    music: {
      budget: 300,
      Country: true
    },
    photography: {
      budget: 300,
      events: true
    }
  },
  location: '611 Mission St #2, San Francisco, CA 94105',
  date: 07102017,
  vendors: []
});

Events.findOne({ location: '611 Mission St #2, San Francisco, CA 94105' }, function (err, event){
  if (err) {
  } else {
    if (event === null) {
      ryanPlaton07102017.save(function(err, event) {
        console.log(`SAVED ${event.id} INTO EVENTS DB`);
      });
    } else {
      console.log(event.userid + ' is already in the HOSTS DB');
    }
  }
});

var vendorSchema = mongoose.Schema({
  id: {type: Number, unique: true, index: true},
  organization: String,
  service: mongoose.Schema.Types.Mixed,
  location: String,
  description: String
});



var Vendors = mongoose.model('Vendors', vendorSchema);


module.exports.Users = Users;
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