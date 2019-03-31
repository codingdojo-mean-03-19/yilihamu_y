const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "views")));


const server = app.listen(port, () => console.log(`listening on port ${port}`));
const io = require('socket.io')(server); 

io.on('connection', function (socket){
    socket.on("posting_form", function (data){
        const random_number = Math.floor((Math.random() * 1000) + 1);
        socket.emit('updated_message', {response: data}); 
        socket.emit('random_number', {response: random_number}); 
    })
})

