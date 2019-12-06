const express = require('express');
const router = express.Router();

/**
 * @route POST api/auth
 * @desc Get logged in user
 * @access PRIVATE
 */
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

/**
 * @route POST api/auth
 * @desc login
 * @access PUBLIC
 */
router.post('/', (req, res) => {
  res.send('log in');
});

module.exports = router;
