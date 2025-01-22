const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Service', ServiceSchema);