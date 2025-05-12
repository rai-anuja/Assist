const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: String,
  room: String,
  isOn: Boolean
});

module.exports = mongoose.model('Device', deviceSchema);
