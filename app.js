const express = require('express');
const app = express();
const rp = require('request-promise');


app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render('landing');
});

app.get('/campgrounds', function(req,res){
  const campgrounds = [
    {name:"Salmon creek", image: "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    {name:"Saltwater", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    {name:"Lake Long", image: "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    {name:"Mirror Lake", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
  ];                             //Name : Data
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(3001, function(){
  console.log("YelpCamp server has started");
});
