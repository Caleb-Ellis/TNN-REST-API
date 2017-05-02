const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
})

// Create driver Schema & model
const DriverSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Name required']
  },
  carMake: {
    type: String,
    required: [true, 'Car make and model required']
  },
  carModel: {
    type: String,
    required: [true, 'Car make and model required']
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
