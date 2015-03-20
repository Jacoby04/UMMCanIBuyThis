'use strict';

var _ = require('lodash');
var ListedItem = require('./ListedItem.model');

// Get list of ListedItems
exports.index = function(req, res) {
  ListedItem.find(function (err, ListedItems) {
    if(err) { return handleError(res, err); }
    return res.json(200, ListedItems);
  });
};

// Get a single ListedItem
exports.show = function(req, res) {
  ListedItem.findById(req.params.id, function (err, ListedItem) {
    if(err) { return handleError(res, err); }
    if(!ListedItem) { return res.send(404); }
    return res.json(ListedItem);
  });
};

// Creates a new ListedItem in the DB.
exports.create = function(req, res) {
  ListedItem.create(req.body, function(err, ListedItem) {
    if(err) { return handleError(res, err); }
    return res.json(201, ListedItem);
  });
};

// Updates an existing ListedItem in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ListedItem.findById(req.params.id, function (err, ListedItem) {
    if (err) { return handleError(res, err); }
    if(!ListedItem) { return res.send(404); }
    var updated = _.merge(ListedItem, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, ListedItem);
    });
  });
};

// Deletes a ListedItem from the DB.
exports.destroy = function(req, res) {
  ListedItem.findById(req.params.id, function (err, ListedItem) {
    if(err) { return handleError(res, err); }
    if(!ListedItem) { return res.send(404); }
    ListedItem.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}