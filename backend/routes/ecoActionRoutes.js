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


// PUT update an existing ecoAction
router.put('/:id', (req, res) => {
  const ecoActionId = parseInt(req.params.id);
  const { name, location } = req.body;

  const actionIndex = ecoActions.findIndex(action => action.id === ecoActionId);

  if (actionIndex === -1) {
    return res.status(404).json({ message: 'EcoAction not found' });
  }

  if (!name || !location) {
    return res.status(400).json({ message: 'Name and location are required' });
  }

  ecoActions[actionIndex] = {
    id: ecoActionId,
    name,
    location
  };

  res.json(ecoActions[actionIndex]);
});




module.exports = router;