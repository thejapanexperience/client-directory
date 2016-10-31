// SAME as normal app.js but without webpack reloading

// // LOAD ENV VARIABLES
require('dotenv').config();

// SET SERVER PORT
// const PORT = process.env.PORT || 8000;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/propertydb013';

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

// const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// // SERVER LISTEN
// server.listen(PORT, (err) => {
//   console.log(err || `Express listening on port ${PORT}`);
// });

// APP DECLARATION
const app = express();

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// MIDDLEWARE FILES OUTSOURCED
// require('./config/webpack')(app);
// require('./config/socket')(app, io);

// ROUTES
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
  const filepath = path.resolve('index.html');
  res.sendFile(filepath);
});

// ALLOW REACT ROUTING
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// module.exports = io;
module.exports = app;
