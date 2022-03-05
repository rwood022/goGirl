const { Schema, model } = require('mongoose');

const profileSchema = new Schema(
{
    user_id: [{ type: Schema.Types.ObjectId, ref: 'user',}], 
    about: { type: String},
    places_traveled: { type: Array},
    profile_url: {type: String}
    //https://gogirlapp.s3.amazonaws.com/<the name of the file>
},
);


const Profile = model('profile', profileSchema);

module.exports = Profile;