const mongoose = require('mongoose');
const {Schema} = mongoose;
const quoteSchema = new Schema({
    name: {type : String},
    quote: {type : String}
    }, {timestamps:true}
    );

const Quote = mongoose.model('Quote', quoteSchema)
      
module.exports = function(app){
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

}        