const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){

    response.render('index')
});

app.post('/result', function(request, response) {
    const userInfo = {
        name: request.body.name,
        location: request.body.location,
        language: request.body.language,
        comment: request.body.comment
    };

    response.render("results", { data: userInfo });
});


app.listen(port, () => console.log(`express is listening to port ${port}`));