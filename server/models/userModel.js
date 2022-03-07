const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

//schema forcreating a new user

const userSchema = new mongoose.Schema({
        username: String,
        name: String,
        googleId: String,
        secret: String
    
  
});


const User = mongoose.model('User', userSchema)


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);



module.exports = User;