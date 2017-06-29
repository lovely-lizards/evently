var path = require('path');
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var fbConfig = require('./config/fb.js');
var db = require('../database-mongo/index.js');
var FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: fbConfig.appID,
    clientSecret: fbConfig.appSecret,
    callbackURL: fbConfig.callbackUrl
  },
  function(accessToken, refreshToken, profile, cb) {

    db.Users.find({ id: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user[0].id);
});

passport.deserializeUser(function(id, cb) {

  db.Users.find({id : id}, function(err, user){
     if(err) cb(err);
        console.log('FOUND USER ==>', user);
        cb(null, user[0]);
     });
});

var app = express();
app.use( express.static(__dirname + '/../react-client/dist') );
app.use(require('cookie-parser')());
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Server Log Middleware
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.url} ${new Date()}`);
  next();
});

//Test Routes for FB Auth

app.get('/main', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../react-client/dist/index.html'));
});

app.get('/failed', function(req, res) {
  console.log('FB AUTH FAILED');
  res.send('FB AUTH FAILED')
});

app.get('/user', function(req, res, next) {

    res.send(req.user);
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

app.get('/api/events/user', function(req, res) {

  console.log(req.user.id);

  db.Events.find({userid: req.user.id}, (err, events) => {

    res.send(events)

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

  var event = req.body;

  event.userid = req.user.id;

  db.Events.create(event, function(err, event) {
    if(err) {
      console.log(err);
    }


  });
  res.end();
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


//=====================
// FACEBOOK AUTH ROUTES
//=====================

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/failed' }),
  function(req, res) {
    console.log('INSIDE APP.GET PASSPORT');
    // Successful authentication, redirect home.
    res.redirect('/main');
  });


app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});