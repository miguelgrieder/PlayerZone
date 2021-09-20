import { UserSchema } from './UserSchema';
const mongoose = require('mongoose');

const mongooseModel = mongoose.model('User', UserSchema);

function selectAllUsers(){
    const query = mongooseModel.find({}).exec();
    query.then((result) => { console.log(result)    });
}

function selectUser(name){
    const query = mongooseModel.find({ Title: name }).exec();
    query.then((result) => { console.log(result)    });
}

function insertGame(game) {
    const entry = new mongooseModel(game);
    entry.save(function(err) {
        if (err) {
            return handleError(err)
        } else {
            console.log('Jogo inserido!');
        }
    })
}

function updateGame(query, data) {
    
}