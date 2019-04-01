const express = require("express");
const path = require("path");
// var session = require('express-session');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "views")));

const server = app.listen(port, () => console.log(`listening on port ${port}`));

require('./routes/index.js')(app, server);