const express    = require('express');
const bodyParser = require('body-parser');
const path = require ('path');

const {PORT: port = 8000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname + '/dist/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/database.js');
require('./server/config/route.js')(app)


app.listen(port, () => console.log(`listening on port ${port}`));
