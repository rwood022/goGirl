const { Schema, model } = require('mongoose');

const userSchema = new Schema(
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
);


const User = model('User', userSchema);

module.exports = User;