'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  // For related tags IF NECESSARY.
  tags: []
});

module.exports = mongoose.model('Category', CategorySchema);
