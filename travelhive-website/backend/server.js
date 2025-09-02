require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static and HTML
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'login.html'));
});
app.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'Booking.html'));
});
app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'pricing.html'));
});
app.get('/destination', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'destination.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const authRouter = require('./routes/auth');
const bookingRouter = require('./routes/bookings');

app.use('/api/auth', authRouter);
app.use('/api/bookings', bookingRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
