const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.use(bodyParser.urlencoded({extended: true}));

const data = [
    {name: "Rambo", img: "/images/cat1.jpg",  favorite_food: "sweet food", age: 1, sleeping_spots: "sofa"}, 
    {name: "James", img: "/images/cat2.jpg", favorite_food: "not sweet food", age: 2, sleeping_spots: "bed"}, 
    {name: "Captain", img: "/images/cat3.jpg", favorite_food: "fresh pet food", age:3, sleeping_spots:"desk"}, 

];

app.get('/cats', function(request, response){
    response.render('index');
});

app.get('/cats/rambo', function(request, response){
    response.render('details', {cat:data[0]});
});

app.get('/cats/james', function(request, response){
    response.render('details', {cat:data[1]});
});

app.get('/cats/captain', function(request, response){
    response.render('details', {cat:data[2]});
});


app.listen(port, () => console.log(`express is listening to port ${port}`));
