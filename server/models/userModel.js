const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

});

const user = mongoose.model('user', userSchema)
module.exports = User;