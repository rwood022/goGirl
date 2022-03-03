const { Schema, model } = require('mongoose');

const userSchema = new Schema(
<<<<<<< HEAD
    {
        username: {
            type: String,
            Unique: true,
            required: true,
            trimmed: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        },
        friends: [{
            type: Schema.Types.String,
            ref: 'User',
        }],
        profile: {
            type: Schema.Types.String,
            ref: 'Profile',
        }, 
        posts: [{
            type: Schema.Types.String,
            ref: 'Post',
        }],
    },
=======
{
    username: { type: String, Unique: true, required: true, trimmed: true }, 
    password: { type: String, required: true, unique: true},
    friends: [{ type: Schema.Types.String, ref: 'user',}],

},
>>>>>>> ba1509b0ae4aaa1902446b6fec56bedeceed3134
);


const User = model('User', userSchema);

module.exports = User;