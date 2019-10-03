const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost/coffeehub', (err, database) => {
  if (err) return console.log('error', err);
  db = database.db('coffeehub');
  console.log('connected!');

  app.listen(port, () => {
    console.log('listening on port', port);
  });
});
