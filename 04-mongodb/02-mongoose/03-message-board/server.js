const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const {PORT: port = 8000 } = process.env;
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const MessageSchema = new Schema({
	name: {
        type: String,
        required: [true, 'Name cannot be blank'],
    },
	message: {
        type: String,
        required: [true, 'Message cannot be blank'],
    },
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

const Message = mongoose.model("Message", MessageSchema);

const CommentSchema = new Schema({
	name: {
        type: String,
        required: [true, 'Name cannot be blank'],
    },
	text: {
        type: String,
        required: [true, 'Comment cannot be blank'],
    },
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

const Comment = mongoose.model("Comment", CommentSchema);


app.get("/", function(request, response) {
    Message.find({})
        .populate('_comments') 
	    .then(messages => response.render('index.ejs', { messages: messages }))	
});

app.post("/message", function(request, response){
	var newMessage = new Message({ name: request.body.name, message: request.body.message });
    newMessage.save() 
    .then(message => {
        console.log(message)
        response.redirect('/');
    })
    .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
  
        response.render('index', { errors });
    });
})
app.post("/comment/:id", function(request, response) {
	const messageId = request.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		const newComment = new Comment({ name: request.body.name, text: request.body.comment });
		newComment._message = message._id;
        Message.update({ _id: message._id }, { $push: { _comments: newComment }});	
        
        newComment.save()
        .then(comment => {
            console.log(comment)
            response.redirect('/');
        })
        .catch(error => {
            const errors = Object.keys(error.errors).map(key => error.errors[key].message);
      
            response.render('index', { errors });
        });
        
    });
    
});

app.listen(port, () => console.log(`listening on port ${port}`));