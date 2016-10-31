const mongoose = require('mongoose');

// can set validation in the schema.
const genericSchema = new mongoose.Schema({
  name: {
    first: { type: String, minlength: 1 },
    last: { type: String, minlength: 1 },
  },
  email: { type: String, maxlength: 30 },
  phone: { type: Number, maxlength: 12 },
});

const Generic = mongoose.model('Generic', genericSchema);

module.exports = Generic;

// comes prebuilt with all the cool methods

// METHODS

// find
// findOne
// findById
// FindOneAndUpdate
// FindOneAndRemove
// FindByIdAndRemove

// etc
