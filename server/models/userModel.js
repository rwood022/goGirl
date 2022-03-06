const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: String,
    googleId: String,
    secret: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema)
module.exports = User;