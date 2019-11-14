const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('./dist'));
app.use(bodyParser.json());

MongoClient.connect(
  'mongodb://localhost:27017/coffeehub',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err, client) {
    if (err) throw err;
    const db = client.db('coffeehub');
    console.log('connected to database');
    app.get('/mongo', (req, res) => {
      db.collection('coffeehub')
        .find()
        .toArray()
        .then(data => {
          res.send(data);
        });
    });

    app.post('/mongo', (req, res) => {
      console.log('mongo post', req);
      db.collection('coffeehub')
        .count()
        .then(count => {
          db.collection('coffeehub')
            .insertOne({
              id: count + 1,
              name: req.body.name,
              date: req.body.date,
              where: req.body.where,
              description: req.body.description,
              long_description: req.body.long_description,
              photo: req.body.photo,
              coordinates: {
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                text: req.body.where
              }
            })
            .then(data => {
              res.sendStatus(201);
            })
            .catch(err => {
              console.log(err);
              res.sendStatus(500);
            });
        })
        .catch(err => {
          console.log('error: ', err);
          res.sendStatus(500);
        });
    });

    app.listen(port, () => {
      console.log('listening on port', port);
    });
  }
);
