// // LOAD ENV VARIABLES
require('dotenv').config();

// REQUIRES
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const http = require('http');

// Mongoose
const mongoose = require('mongoose');
const config = require('./config');
const NODE_ENV = process.env.NODE_ENV || 'development';
const DB_URI = config.db[NODE_ENV];

mongoose.Promise = Promise;
mongoose.connect(DB_URI, (err) => {
  console.log(err || `MongoDB connected to ${DB_URI}`);
});

// APP DECLARATION
const app = express();

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// MIDDLEWARE FILES OUTSOURCED
require('./config/webpack')(app);
// const io = require('./io');
// require('./config/socket')(app, io);

// ROUTES
app.use('/api', require('./routes/api'));

// app.get('/', (req, res) => {
//   const filepath = path.resolve('index.html');
//   res.sendFile(filepath);
// });

// ALLOW REACT ROUTING
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
