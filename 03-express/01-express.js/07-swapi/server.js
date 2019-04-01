const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const axios = require('axios');

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
app.use(bodyParser.json());

app.get('/', (request, response) => {
    
    response.render('index');
});

const peopleUrl = 'https://swapi.co/api/people';
const planetUrl = 'https://swapi.co/api/planets';


app.get('/people/:arg', (request, response) => {
    
    let apiCall;
    if (request.params.arg == 'next'){
        apiCall = axios.get(request.session.next);
    } else if (request.params.arg == 'prev'){
        apiCall = axios.get(request.session.previous);
    } else {
        apiCall = axios.get(peopleUrl);
        console.log('default apiCall returns: ', apiCall);
    }
   
    apiCall.then(data => {
        request.session.category = '/people';
        request.session.next = data.data.next;
        request.session.previous = data.data.previous;
        
        response.json(data.data);
    })
    .catch(error => {
        
        console.log('The following errors were generated: ', error);
        response.json(error);
    })
});


app.get('/planet/:arg', (request, response) =>{
   
    let apiCall;
    if (request.params.arg == 'next'){
        apiCall = axios.get(request.session.next);
    } else if (request.params.arg == 'prev'){
        apiCall = axios.get(request.session.previous);
    } else {
        apiCall = axios.get(planetUrl);
    }
    
    apiCall.then(data => {
       
        console.log("got the data: ", data.data);
        request.session.category = '/planet';
        request.session.next = data.data.next;
        request.session.previous = data.data.previous;
        response.json(data.data);
    })
    .catch(error => {
        console.log('The following errors were generated: ', error);
        response.json(error);
    })
});

app.get('/next', (request, response) => {
    response.redirect(request.session.category + '/next');
});

app.get('/prev', (request, response) => {
    response.redirect(request.session.category + '/prev');
});

app.get('/all', (request, response) => {
    response.redirect(request.session.category + '/0');
});



app.listen(port, () => console.log(`Express server listening on port ${port}`));    