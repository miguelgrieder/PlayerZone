const { selectAllThreads, selectThread, insertThread, updateThread } = require('./ThreadController');
const { selectAllGames, selectGame, insertGame, updateGame } = require('./GameController');
const { selectAllUsers, selectUser, insertUser, updateUser } = require('./UserController');

const mongoose = require('mongoose');

const uri = "mongodb+srv://MatheusGubler:R5978YHHhBNACfI4@cluster0.fxnrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

}

var express = require('express');
var app = express();
app.use(express.json());
app.use(express.static('.'));
let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
app.get('/users', (req, res) => {
  //return res.send(Object.values(users));
  return res.send(Object.values(users));
});

app.post('/users', (req, res) => {
  let user = req.body;
  console.log(JSON.stringify(user));
  return res.send();
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});


main().catch(err => console.log(err));
