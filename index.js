const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// Connect to mongoDB
mongoose.connect('mongodb://localhost/driverdb');
mongoose.Promise = global.Promise;

// Allow static file service
app.use(express.static('public'));

// Enable JSON parsing using body-parser
app.use(bodyParser.json());

// Initialise routes
app.use('/api', require('./routes/api'));

// Error-handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message})
});

// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('now listening for requests');
});
