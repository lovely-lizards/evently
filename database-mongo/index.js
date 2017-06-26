var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
// mongoose.connect('mongodb://localhost/test',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// });
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var designersSchema = mongoose.Schema({
  name: {type: String, unique: true},
  designType: String,
  bio: String,
  images: Array  
});

var Designer = mongoose.model('Designer', designersSchema);

