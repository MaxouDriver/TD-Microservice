const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mailer = require('./services/mailer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/mail', (req, res) => {
  mailer
    .sendMail(req.body.data)
    .then(result => res.jsonp(result))
    .catch(error => res.jsonp(error));
});

module.exports = app;
