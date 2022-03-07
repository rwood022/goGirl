const path = require('path');
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
//app.use(express.static(path.join(__dirname, '..', 'front_end', 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Relax! It's all good over on port ${PORT}!`);
    });
  });