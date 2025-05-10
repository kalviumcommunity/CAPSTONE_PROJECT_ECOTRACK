const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // 👈 Call this before starting the server

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('🌱 EcoTrack backend is live!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
