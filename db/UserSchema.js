const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Nick: String,
    Email: String,
    Password: String
});

module.exports = { UserSchema };