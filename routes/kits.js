const express = require('express');
const router = express.Router();
const Kit = require('../models/Kit');

// GET all kits
router.get('/', async (req, res) => {
  try {
    const kits = await Kit.find();
    res.json(kits);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET kit by ID
router.get('/:id', async (req, res) => {
  try {
    const kit = await Kit.findById(req.params.id);
    if (!kit) {
      return res.status(404).json({ message: 'Kit not found' });
    }
    res.json(kit);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;