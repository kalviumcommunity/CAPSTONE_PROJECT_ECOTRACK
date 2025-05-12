// backend/routes/adventureRoutes.js
const express = require('express');
const router = express.Router();

// Sample data
const adventures = [
  { id: 1, name: 'Mountain Trek', location: 'Manali' },
  { id: 2, name: 'Scuba Diving', location: 'Goa' },
  { id: 3, name: 'Paragliding', location: 'Bir Billing' }
];

// GET /api/adventures
router.get('/', (req, res) => {
  res.json(adventures);
});

module.exports = router;
