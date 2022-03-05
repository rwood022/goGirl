const mongoose = require('mongoose');
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/projectDB', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Relax! It's all good over on port ${PORT}!`);
    });
  });