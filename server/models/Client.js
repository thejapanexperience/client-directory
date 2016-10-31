const mongoose = require('mongoose');

// can set validation in the schema.
const max = [Date('2016-10-31'), 'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];
const clientSchema = new mongoose.Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  allergies: [{ type: String, maxlength: 20 }],
  age: { type: Number, max: 120, min: 1 },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  lastVisit: { type: Date, max },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;

// comes prebuilt with all the cool methods

// METHODS

// find
// findOne
// findById
// FindOneAndUpdate
// FindOneAndRemove
// FindByIdAndRemove

// etc
