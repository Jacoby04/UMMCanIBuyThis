'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListedItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  imagePath: String,
  category: String,
  tags: [],
  // True means seller is willing to negotiate.
  negotiable: Boolean,
  sellerInfo: {
    first: String,
    last: String,
    email: String
  }
});

module.exports = mongoose.model('ListedItem', ListedItemSchema);
