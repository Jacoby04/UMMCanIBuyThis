'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListedItemSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('ListedItem', ListedItemSchema);