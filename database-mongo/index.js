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
  id: {type: Number, unique: true},
  name: String,
  host: mongoose.Schema.Types.Mixed,
  vends: mongoose.Schema.Types.Mixed
});



var Users = mongoose.model('Users', userSchema);

var peterTan = new Users({
  id: 10158962670505581,
  name: 'Peter X. Tan',
  host: {
    ratings: [],
    events: [{
      inProgress: [],
      pass: []
    }]
  },
  vends: {
    type: {
      photography: {
        wedding: true,
        studio: true,
        event: true,
        product: true,
        landscape: true
      }

    },
    name: {
      photography: `Pete's Studio`,
    },
    locations: {
      photography: '139 Stillman St #7, San Francisco, CA',
    },
    delivery: {
      photography: true
    },
    rating: {
      photography: []
    }
  }
});

var jasperYu = new Users({
  id: 10213264539386033,
  name: 'Jasper Yu',
  host: {
    ratings: [],
    events: [{
      inProgress: [],
      pass: []
    }]
  },
  vends: {
    type: {
      food: {
        chinese: true,
        japanese: true,
        vegan: true
      }
    },
    name: {
      food: `Jasper's Wok`
    },
    locations: {
      food: '3415 California St, San Francisco, CA'
    },
    delivery: {
      food: true
    },
    rating: {
      food: []
    }
  }
});

var ryanPlaton = new Users({
  id: 100576853912922,
  name: 'Ryan Platon',
  host: {
    ratings: [],
    events: [{
      inProgress: [],
      pass: []
    }]
  },
  vends: {
    type: {
      music: {
        hiphop: true,
        house: true,
        classical: true
      }
    },
    name: {
      music: 'RyPizzle'
    },
    locations: {
      music: '944 Market St, San Francisco, CA'
    },
    delivery: {
      music: true
    },
    rating: {
      music: []
    }
  }
});

jasperYu.save(function(err, user) {
  console.log(`SAVED ${user.name} INTO USER DB`);
})

peterTan.save(function(err, user) {
  console.log(`SAVED ${user.name} INTO USER DB`);

})

ryanPlaton.save(function(err, user) {
  console.log(`SAVED ${user.name} INTO USER DB`);
})


// Hosts.findOne({ name: 'Ryan Platon' }, function (err, host){
//   if (err) {
//     console.log(err);
//   } else {
//     if (host === null) {
//       ryanPlaton.save(function(err, user) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(`SAVED ${user.name.toUpperCase()} INTO DATABASE`);
//         }
//       });
//     } else {
//       console.log(host.name + ' is already in the HOSTS DB');
//     }
//   }
// });



/* -----------------------Events----------------------- */
// whenever the host post a new event, the id should go to into the events []
var eventsSchema = mongoose.Schema({
  userid: Number,
  needs: mongoose.Schema.Types.Mixed,
  location: String,
  date: Number,
  vendors: Array
});

var Events = mongoose.model('Events', eventsSchema);

var jasperYu07052017 = new Events ({
  userid: '10158962670505581',
  needs: {
    food: {
      budget: 200,
      comfort: true,
      japanse: true,
      chinese: true
    },
    music: {
      budget: 300,
      edm: true
    },
    photography: {
      budget: 300,
      events: true
    }    
  },
  location: '944 Market St, San Francisco, CA',
  date: 07052017,
  vendors: []
});

jasperYu07052017.save(function(err, event) {
  console.log(`SAVED ${event.id} INTO EVENTS DB`);
});

var peterTan07082017 = new Events ({
  userid: 10158962670505581,
  needs: {
    food: {
      budget: 200,
      chinese: true
    },
    music: {
      budget: 300,
      edm: true
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

peterTan07082017.save(function(err, event) {
  console.log(`SAVED ${event.id} INTO EVENTS DB`);
});

var ryanPlaton07102017 = new Events ({
  userid: 100576853912922,
  needs: {
    food: {
      budget: 200,
      chinese: true
    },
    music: {
      budget: 300,
      edm: true
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
ryanPlaton07102017.save(function(err, event) {
  console.log(`SAVED ${event.id} INTO EVENTS DB`);
});

module.exports.Users = Users;
module.exports.Events = Events;


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