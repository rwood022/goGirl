const { connect, connection } = require('mongoose');

// connect('mongodb://localhost:27017/goGirl', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

connect('mongodb://localhost:27017/goGirl', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

mongoose.set("useCreateIndex", true);

module.exports = connection;