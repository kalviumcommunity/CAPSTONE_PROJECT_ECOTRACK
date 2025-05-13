const express = require('express');
const router = express.Router();

let ecoActions = [ // we'll use an in-memory array for now
  { id: 1, name: 'Plant a Tree', location: 'Community Park' },
  { id: 2, name: 'Beach Cleanup', location: 'Juhu Beah' }
];

// GET all ecoAction
router.get('/', (req, res) => {
  res.json(ecoActions);
});

// POST a new ecoAction
router.post('/', (req, res) => {
  const { name, location } = req.body;
  
  if (!name || !location) {
    return res.status(400).json({ message: 'Name and location are required' });
  }

  const newAdventure = {
    id: ecoActions.length + 1,
    name,
    location
  };

  ecoActions.push(newAdventure);
  res.status(201).json(newAdventure);
});



module.exports = router;