const { connect, connection } = require('mongoose');
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");


//add new db
connect(
  process.env.MONGODB_URI || 'mongodb+srv://localhost/goGirl',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  },
);





module.exports = connection;