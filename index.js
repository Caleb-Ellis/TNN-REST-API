const express = require('express');

// Set up express app
const app = express();

// Initialise routes
app.use('/api', require('./routes/api'));

// Listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('now listening for requests');
});
