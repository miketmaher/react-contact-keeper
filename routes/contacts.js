const express = require('express');
const router = express.Router();

/**
 * @route POST api/contacts
 * @desc Get all user's contacts
 * @access PRIVATE
 */
router.get('/', (req, res) => {
  res.send('Get users contact');
});

/**
 * @route POST api/contacts/
 * @desc add a contact
 * @access PRIVATE
 */
router.post('/', (req, res) => {
  res.send('Add contact');
});

/**
 * @route POST api/contacts/:id
 * @desc update a contact
 * @access PRIVATE
 */
router.put('/:id', (req, res) => {
  res.send('update contact');
});

/**
 * @route POST api/contacts/:id
 * @desc delete a contact
 * @access PRIVATE
 */
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
