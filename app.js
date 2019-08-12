const express     = require('express'),
      app         = express(),
      rp          = require('request-promise'),
      bodyParser  = require('body-parser'),
      mongoose    = require('mongoose')
//connect to the mongodb DB
mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//Schema Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

//compile schema into a model
var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
//   {
//     name: "Granite Hill",
//     image:"https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg",
//     description: "nice place to take your family, no bathroom, no water, no anything!"
//   },
//   function(err, campground){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("newly added campground");
//     console.log(campground);
//   }
// });
//landing
app.get('/', function(req,res){
  res.render('landing');
});

//INDEX - shows all campgrounds
app.get('/campgrounds', function(req,res){
  // Get all campgrounds  form DB
  Campground.find({},function(err,allCampgrounds){
    if (err) {
      console.log("THERE HAS BEEN AN ERROR");
      console.log(err);
    } else {
      //renders campgrounds.ejs
      res.render('index', {campgrounds: allCampgrounds});
    }
  });
});

//CREATE - Add ned campground to DB 
app.post('/campgrounds', function(req,res){
  //grabbing name and image from the form
  const name = req.body.name;
  const image = req.body.image;
  const desc = req.body.description;
  const newCampground = { name: name, image: image, description: desc};
  //create new campground and save it to the DB
  Campground.create(newCampground, function(err,newlyCreated){
    if (err) {
      console.log(err);
    }else {
      //redirect us back to the campground page
      res.redirect('/campgrounds');
    }
  });
});

// NEW Show form to create new campground
app.get('/campgrounds/new', function(req,res){
  res.render('new');
});

// SHOW - Get more information on the campground
app.get('/campgrounds/:id', function(req,res){
  Campground.findById(req.params.id, function(err,foundCampground){
    if (err) {
      console.log(err);
    } else {
      res.render('show', {campground: foundCampground})
    }
  });
  //find the campground with provided id
  //then render show template with that campground
});

app.listen(3002, function(){
  console.log("YelpCamp server has started");
});
