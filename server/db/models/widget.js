const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Error: title is required'],
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  html: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Widget', Schema);
