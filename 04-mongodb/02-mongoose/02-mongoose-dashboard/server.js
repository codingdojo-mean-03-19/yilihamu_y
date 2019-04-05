const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const {PORT: port = 8000 } = process.env;
const {Schema} = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/mongoose_dashboard', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const CatSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String
});

const Cat = mongoose.model('Cat', CatSchema);

app.get('/', function(request, response){
    Cat.find({})
    .then(cats => response.render('index', {cats:cats}))
    .catch(console.log);
});

app.get('/new', function(request, response){
    response.render('new');
});

app.post('/', function(request, response){
    Cat.create(request.body)
    .then(cat => {
      console.log(cat);
      response.redirect('/')
    })
    .catch(console.log);
});

app.get('/:id', function(request, response){
    Cat.find({ _id: request.params.id })
    .then(cat => {
        console.log(cat);
        response.render('show', { cat: cat[0] })
      })
    .catch(console.log);         
});

app.get('/:id/edit', function(request, response){
    Cat.find({ _id: request.params.id })
    .then(cat => {
        console.log(cat);
        response.render('edit', { cat: cat[0] })
    })
    .catch(console.log);
});

app.post('/:id', function(request, response){
    console.log('body', request.body)
    Cat.update({ _id: request.params.id }, request.body)
    .then(cat => {
        console.log(cat);
        response.redirect('/')
    })
    .catch(console.log); 
});

app.post('/:id/delete', function(request, response){
    Cat.remove({ _id: request.params.id })
    .then(cat => {
        console.log(cat);
        response.redirect('/')
    })
    .catch(console.log); 
});

app.listen(port, () => console.log(`listening on port ${port}`));