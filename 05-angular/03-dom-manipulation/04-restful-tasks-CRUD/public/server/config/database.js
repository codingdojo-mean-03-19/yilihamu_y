const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/crud', {
  useNewUrlParser: true,
  useNewUrlParser: true
});
mongoose.connection.once('connected', () => console.log('connected to MongoDB'));

fs.readdirSync(modelsPath)
.filter(file => file.endsWith('.js'))
.forEach(file => require(path.join(modelsPath, file)));
