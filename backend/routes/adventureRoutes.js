const express = require('express');
const router = express.Router();

let adventures = [ // we'll use an in-memory array for now
  { id: 1, name: 'Mountain Trek', location: 'Manali' },
  { id: 2, name: 'Scuba Diving', location: 'Goa' }
];

// GET all adventures
router.get('/', (req, res) => {
  res.json(adventures);
});

// POST a new adventure
router.post('/', (req, res) => {
  const { name, location } = req.body;
  
  if (!name || !location) {
    return res.status(400).json({ message: 'Name and location are required' });
  }

  const newAdventure = {
    id: adventures.length + 1,
    name,
    location
  };

  adventures.push(newAdventure);
  res.status(201).json(newAdventure);
});

module.exports = router;
