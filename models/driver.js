const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create driver Schema & model
const DriverSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Name required']
  },
  carMake: {
    type: String
    required: [true, 'Car make and model required']
  },
  carModel: {
    type: String
    required: [true, 'Car make and model required']
  },
  available: {
    type: Boolean,
    default: false
  }
  // Add in geo location
});

const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
