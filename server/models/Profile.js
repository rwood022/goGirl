const { Schema, model } = require('mongoose');

const profileSchema = new Schema(
{
    user_id: [{ type: Schema.Types.ObjectId, ref: 'user',}], 
    about: { type: String},
    places_traveled: { type: String},
<<<<<<< HEAD
    profileImage: {type: String},
    //https://gogirlapp.s3.amazonaws.com/<the name of the file>
=======
>>>>>>> 3d467097d85f3b27e977510cd0d8331af814e5ba
},
);


const Profile = model('profile', profileSchema);

module.exports = Profile;