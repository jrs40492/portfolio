const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const routes = require('./routes/index');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const middleware = [
  express.static('public'),
  favicon(path.join(__dirname, 'public/images', 'favicon.ico')),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];

app.use(middleware);

app.use('/', routes);

module.exports = app;
