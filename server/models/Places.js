const { Schema, Types} =  require('mongoose');

const placesSchema =  new Schema(
    {
        place: {
            type: String
        }, 
        dateTraveled: {
            type: Date
        }, 
        impressions: {
            type: String, 
            minlength: 1, 
            maxlength: 50
        }
    },
    {
       toJSON:
        {
            getters: true
        } , 
        id: false
    } 
    
);

module.exports = placesSchema