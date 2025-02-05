const express = require('express');
const router = express.Router();

// Sample route
router.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

module.exports = router;
