const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: String,
  phone: String,
  start_date: String,
  end_date: String,
  travel_type: String,
  persons: Number,
  package: String,
  total_price: Number
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
