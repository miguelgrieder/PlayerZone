const { selectAllThreads, selectThread, insertThread, updateThread } = require('./ThreadController');
const { selectAllGames, selectGame, insertGame, updateGame } = require('./GameController');
const { selectAllUsers, selectUser, insertUser, updateUser } = require('./UserController');

const mongoose = require('mongoose');

const uri = "mongodb+srv://MatheusGubler:R5978YHHhBNACfI4@cluster0.fxnrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

}

main().catch(err => console.log(err));
