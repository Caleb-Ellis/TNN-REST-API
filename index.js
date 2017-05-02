const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to mongoDB
mongoose.connect('mongodb://localhost/driverdb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// Initialise routes
app.use('/api', require('./routes/api'));

// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('now listening for requests');
});
