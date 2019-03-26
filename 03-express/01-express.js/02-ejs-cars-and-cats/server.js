const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function(request, response){
    
    response.render('index');
});

app.get('/cars', function(request, response){
    
    response.render('cars');
});

app.get('/cats', function(request, response){
    
    response.render('cats');
});

app.get('/cars/new', function(request, response){
    
    response.render('form');
});



app.listen(port, () => console.log(`express listening on server ${port}`));
