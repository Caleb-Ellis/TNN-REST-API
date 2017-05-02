const express = require('express');
const router = express.Router();

// Get a list of drivers from database
router.get('/drivers', function(req, res) {
  res.send({ type: 'GET' })
});

// Add a new driver to database
router.post('/drivers', function(req, res) {
  res.send({ type: 'POST' })
});

// Update driver in database
router.put('/drivers/:id', function(req, res) {
  res.send({ type: 'PUT' })
});

// Delete driver from database
router.delete('/drivers/:id', function(req, res) {
  res.send({ type: 'DELETE' })
});
