const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app)
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


var dbURL = 'mongodb://localhost:27017'

var Message = mongoose.model('Message', {
  name: String,
  message: String
})

mongoose.Promise = Promise

app.get('/messages', (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages)
  })
})

app.get('/messages/:user', (req, res) => {
  var user = req.params.user;
  Message.find({name: user}, (err, messages) => {
    res.send(messages)
  })
})

app.post('/messages', async (req, res) => {
  
  try {
    var message = new Message(req.body);
    var savedMessage = await message.save()
    console.log('saved');
    var censored = await Message.findOneAndDelete({message: 'badword'});
    if(!censored) {
      io.emit('message', req.body);
    }
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }

})

io.on('connection', (socket) => {
  console.log('a user connected');
})

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
  console.log("mongo Db connection" , error)
})

const server =  http.listen(3000, () => {
  console.log("Server Started");
});