const { Schema, model } = require('mongoose');
const placesSchema =  require('./Places');

const profileSchema = new Schema(
{
    // user_id: [{ type: Schema.Types.ObjectId, ref: 'user',}], 
    about: { 
        type: String
    },
    places_traveled: [placesSchema], 
    image: {
        type: String
    }
},
);


const Profile = model('Profile', profileSchema);

module.exports = Profile;