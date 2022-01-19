const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength:255},
    name: { type: String, maxLength:600},
    name: { type: String, maxLength:255},
    createAt: {type: Date, default: Data.now},
    updateAt: {type: Date, default: Data.now},
  });

  module.exports = mongoose.model('Course', Course)