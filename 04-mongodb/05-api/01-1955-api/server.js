const express = require('express');
const bodyParser = require('body-parser');

const {PORT: port = 8000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}`));