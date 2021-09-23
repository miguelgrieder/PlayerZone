const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    Title: String,
    Release: String,
    Gender: String,
    Empresa: String
});

module.exports = { GameSchema };