import { GameSchema } from './GameSchema';
const mongoose = require('mongoose');

const mongooseModel = mongoose.model('Game', GameSchema);

function selectAllGames(){
    const query = mongooseModel.find({}).exec();
    query.then((result) => { console.log(result)    });
}

function selectGame(name){
    const query = mongooseModel.find({ Nick: name }).exec();
    query.then((result) => { console.log(result)    });
}

function insertUser(user) {
    const entry = new mongooseModel(user);
    entry.save(function(err) {
        if (err) {
            return handleError(err)
        } else {
            console.log('Usuário inserido!');
        }
    })
}

function updateGame(query, data) {

}