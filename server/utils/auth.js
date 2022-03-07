const passport = require("passport"); 
const app = express();


// module.exports = {

    // middleware route
    app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
    );
    app.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
    function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("http://localhost:3000");
    })


// };

    




