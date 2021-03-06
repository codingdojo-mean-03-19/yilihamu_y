const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/anonymousNotes', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.connection.once('connected', () => console.log('Mongodb connected'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
