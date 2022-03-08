const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

//schema forcreating a new user

const userSchema = new mongoose.Schema({
        username: {type: String },
        name: {type: String },
        googleId: {type: String },
        secret: {type: String },
});


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = User;