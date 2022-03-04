const { Schema, model } = require('mongoose');
const responseSchema = require('./Response');


// create new instance of the thought schema 
const postSchema = new Schema(
{
    username: { type: String, required: true },
    message: { type: String, required: true, minlength: 1, maxlength: 280 }, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
    
    responses: [responseSchema],
},
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

postSchema
    .virtual('responseCount')
    .get(function () {
        const numberofResponses = this.responses.length;
        return numberofResponses;
    })

const Post = model('Post', postSchema)

module.exports = Post;