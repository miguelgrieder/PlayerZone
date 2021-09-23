const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
    id: Number,
    Title: String,
    Main_Text: String,
    User: String,
    Time: Date,
    Comments: Array
})

module.exports = { ThreadSchema };

