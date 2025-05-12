const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Import adventure routes
const adventureRoutes = require('./routes/adventureRoutes');

// Root route
app.get('/', (req, res) => {
  res.send('🌱 EcoTrack backend is live!');
});

// Use the adventures route
app.use('/api/adventures', adventureRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
