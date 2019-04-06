const bodyParser = require('body-parser');
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");


const {PORT: port = 8000 } = process.env;
// const {Schema} = mongoose;
const app = express();


mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// const quoteSchema = new Schema({
//   name: {type : String},
//   quote: {type : String}
//   }, {timestamps:true}
//   );

// const Quote = mongoose.model('Quote', quoteSchema)

const route = require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`listening on port ${port}`));