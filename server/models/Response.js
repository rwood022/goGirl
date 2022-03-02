const { Schema, Types } = require('mongoose');

const responseSchema = new Schema(
{
    responseId: 
    {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    responseBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
    {
    toJSON: {
        getters: true,
    },
    id: false,
});

// responseSchema
//     .get(function () {
//         return this.createdAt;
//     }); 

module.exports = responseSchema;
