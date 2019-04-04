const bodyParser = require('body-parser');
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");

const {PORT: port = 8000 } = process.env;
const {Schema} = mongoose;
const app = express();

mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const quoteSchema = new Schema({
  name: {type : String},
  quote: {type : String}
  }, {timestamps:true}
  );

const Quote = mongoose.model('Quote', quoteSchema)

app.get('/', function(request, response) {
    response.render('index');
});
  
app.get('/quotes', function(request, response) {
  Quote.find({})
    .then(quotes => response.render('quotes', {quotes:quotes}))
    .catch(console.log);  
});

  
app.post('/quotes', (request, response)=>{
  Quote.create(request.body)
    .then(quotes => {
      console.log(quotes);
      response.redirect('/quotes')
    })
    .catch(console.log);
  
});


app.listen(port, () => console.log(`listening on port ${port}`));