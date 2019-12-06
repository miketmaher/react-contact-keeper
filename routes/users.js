const express = require('express');
const router = express.Router();

/**
 * @route POST api/user
 * @desc Register a user
 * @access PUBLIC
 */
router.post('/', (req, res) => {
  res.send('registers a user');
});

module.exports = router;
