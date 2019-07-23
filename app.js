const express = require('express');
const app = express();
const rp = require('request-promise');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const campgrounds = [
  {name:"Salmon creek", image: "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Saltwater", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Lake Long", image: "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Salmon creek", image: "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Saltwater", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Lake Long", image: "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Salmon creek", image: "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Saltwater", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Lake Long", image: "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  {name:"Mirror Lake", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
];

//landing
app.get('/', function(req,res){
  res.render('landing');
});

//shows all campgrounds
app.get('/campgrounds', function(req,res){
                                 //Name : Data
  res.render('campgrounds', {campgrounds: campgrounds});
});

//logic of making a new campground and redirect to '/campgrounds'
app.post('/campgrounds', function(req,res){
  //get data from form and add to campground array
  const name = req.body.name
  const image = req.body.image
  const newCampground = { name: name, image: image}
  campgrounds.push(newCampground);
  //redirect from campground arrya back to this route
res.redirect('/campgrounds');
});

//form which submitts a post request to '/campgrounds' which redirects us to '/campgrounds'
app.get('/campgrounds/new', function(req,res){
  res.render('new');
});

app.listen(3001, function(){
  console.log("YelpCamp server has started");
});
