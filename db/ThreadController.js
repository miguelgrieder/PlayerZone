const { ThreadSchema } = require('./ThreadSchema');
const mongoose = require('mongoose');

const mongooseModel = mongoose.model('Thread', ThreadSchema);

function selectAllThreads(){
    const query = mongooseModel.find({}).exec();
    query.then((result) => { console.log(result)    });
}

function selectThread(game){
    const query = mongooseModel.find({ Game : game }).exec();
    query.then((result) => { console.log(result)    });
}

function insertThread(thread) {
    const entry = new mongooseModel(thread);
    entry.save(function(err) {
        if (err) {
        } else {
            console.log('Thread inserida!');
        }
    })
}

function updateThread(query, data) {

}

module.exports	= { selectAllThreads, selectThread, insertThread, updateThread }