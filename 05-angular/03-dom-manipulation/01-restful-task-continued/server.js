const express = require('express');

const {PORT: port = 8000 } = process.env;
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(port, () => console.log(`listening on port ${port}`));
