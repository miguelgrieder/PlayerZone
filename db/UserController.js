const { UserSchema } = require('./UserSchema');
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

function insertUser(user) {
    const entry = new mongooseModel(user);
    entry.save(function(err) {
        if (err) {
            console.log(err)
            console.log('Deu ruim')
        } else {
            console.log('Usuário inserido!');
        }
    })
}

function updateUser(query, data) {
    
}

module.exports = { selectAllUsers, selectUser, insertUser, updateUser }