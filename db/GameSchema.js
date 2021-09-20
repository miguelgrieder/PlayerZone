const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    Title: String,
    Release: Date,
    Gender: String,
    Empresa: String
});

export { GameSchema };