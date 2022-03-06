const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");
// const mongoose = require('mongoose');



const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.use(session({
//   secret: "Our little secret.",
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// connect('mongodb://localhost:27017/goGirl', { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true 
// });

// mongoose.set("useCreateIndex", true);

// app.get("/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// app.get("/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
//   function(req, res) {
//     // Successful authentication, redirect secrets.
//     res.redirect("http://localhost:3000");
// });

// app.get("/logout", function(req, res){
//   res.redirect("http://localhost:3000/");
// });

// const userSchema = new mongoose.Schema({
//   username: String,
//   googleId: String,
//   secret: String,
// });

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

// const User = new mongoose.model("User", userSchema);

// passport.use(User.createStrategy());
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/google/callback",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id, username: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Relax! It's all good over on port ${PORT}!`);
    });
  });