var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js')

var app = express();
// app.use(bodyParser.urlencoded({extended: true}))
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use( express.static(__dirname + '/../react-client/dist') );

app.get('/', function (req, res) {
  res.end('Welcome to Evently')
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});


/*

var charlesNRayEames = new Designer ({
  name: 'Charles and Ray Eames',
  designType: 'Mid-Century Modern',
  bio: `Charles Eames was born in 1907 in St. Louis, Missouri.  He attended school there and developed an interest in engineering and architecture.  After attending Washington University in St. Louis on scholarship for two years and being thrown out for his advocacy of Frank Lloyd Wright, he began working in an architectural office.  In 1929, he married his first wife, Catherine Woermann (they divorced in 1941), and a year later Charles’s only child, Lucia was born.  In 1930, Charles started his own architectural office.  He began extending his design ideas beyond architecture and received a fellowship to Cranbrook Academy of Art in Michigan, where he eventually became head of the design department.

Ray Kaiser Eames was born in 1912 in Sacramento, California.  She studied painting with Hans Hofmann in New York before moving on to Cranbrook Academy where she met and assisted Charles and Eero Saarinen in preparing designs for the Museum of Modern Art’s Organic Furniture Competition.  Charles and Eero’s designs, created by molding plywood into complex curves, won them the two first prizes.`,
  images: ['http://www.eamesoffice.com/wp-content/uploads/2015/02/S-Eames-Plastic-Armchair-DAR_78511_preview.jpg', 'http://www.eamesoffice.com/wp-content/uploads/2015/02/S-LI_EAG_P_20120915_151_P-1024x819.jpg']
});

Designer.findOne({ name: 'Charles and Ray Eames'}, function (err, designer){
  if (err) {
    console.log(err);
  } else {
    if (designer === null) {
      charlesNRayEames.save(function(err, charlesNRayEames) {
        if (err) {
          console.log(err);
        } else {
          console.log('SAVED CHARLES N RAY INTO DESIGNER DB');
        }
      });
    } else {
      console.log(designer.name + ' is already in the DesignerDB');
    }
  }
});

 */