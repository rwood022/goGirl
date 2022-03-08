const { Schema, model } = require('mongoose');

const profileSchema = new Schema(
{
    user_id: [{ type: Schema.Types.ObjectId, ref: 'user',}], 
    about: { type: String},
    places_traveled: { type: String},
},
);


const Profile = model('profile', profileSchema);

module.exports = Profile;