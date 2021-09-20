const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = Schema({
    id: Number,
    Title: String,
    Main_Text: String,
    User: String,
    Time: Date    
})