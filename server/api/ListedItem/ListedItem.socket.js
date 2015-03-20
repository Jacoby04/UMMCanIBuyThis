/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ListedItem = require('./ListedItem.model');

exports.register = function(socket) {
  ListedItem.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ListedItem.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('ListedItem:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('ListedItem:remove', doc);
}