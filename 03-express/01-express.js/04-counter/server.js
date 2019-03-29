const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: true,
    // cookie: { maxAge: 60000 }
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){

    if(!request.session.count){
        request.session.count = 1;

    } else{
        request.session.count++;
    }
    response.render('index', {count: request.session.count})
});

app.post('/add', function(request, response){

    if(!request.session.count){
        request.session.count = 1;
        
    } else{
        request.session.count++;
    }
    response.redirect('/');
    
});

app.post('/reset', function(request, response){

    request.session.destroy();

    response.redirect('/');
    
});


app.listen(port, () => console.log(`express is listening to port ${port}`));