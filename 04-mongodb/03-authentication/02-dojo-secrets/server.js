const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require("path");
const flash = require('express-flash');

const app = express();

const {PORT: port = 8000 } = process.env;

app.use(flash())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


// app.use( ( req, res, next) =>{
// 	if (req.query._method === 'DELETE'){
// 		req.method = 'DELETE';
// 		req.url = req.path;
// 	}
// 	next();
// })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(port, () => console.log(`listening on port ${port}`));
