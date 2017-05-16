const express = require('express');
const router = express.Router();
const Driver = require('../models/driver.js');

// Get a list of drivers from database
router.get('/drivers', function(req, res, next) {
  Driver.geoNear(
    { type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
    { maxDistance: parseInt(req.query.maxDist)*1000, spherical: true}
  ).then(function(drivers) {
    res.send(drivers);
  });
});

// Add a new driver to database
router.post('/drivers', function(req, res, next) {
  Driver.create(req.body).then(function(driver) {
    res.send(driver);
  }).catch(next);
});

// Update driver in database
router.put('/drivers/:id', function(req, res, next) {
  Driver.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Driver.findOne({_id: req.params.id}).then(function(driver) {
      res.send(driver);
    });
  });
});

// Delete driver from database
router.delete('/drivers/:id', function(req, res, next) {
  Driver.findByIdAndRemove({_id: req.params.id}).then(function(driver) {
    res.send(driver);
  });
});

module.exports = router;
