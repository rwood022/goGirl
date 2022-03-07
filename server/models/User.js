const { Schema, model } = require('mongoose');

const userSchema = new Schema(
{
    username: { type: String, Unique: true, required: true, trimmed: true }, 
    password: { type: String, required: true, unique: true},
    friends: [{ type: Schema.Types.String, ref: 'user',}],
    imageLink: { type: String },

    imageLink: { type: String },
    
},
);


const User = model('user', userSchema);

module.exports = User;