// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Your MongoDB connection file
const adventureRoutes = require('./routes/ecoActionRoutes');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON body (important for POST requests)
app.use(express.json());

// Base route
app.get('/', (req, res) => {
  res.send('🌱 EcoTrack backend is live!');
});

// Use adventure routes
app.use('/api/adventures', adventureRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});