const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../models/Contact');

/**
 * @route POST api/contacts
 * @desc Get all user's contacts
 * @access PRIVATE
 */
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
});

/**
 * @route POST api/contacts/
 * @desc add a contact
 * @access PRIVATE
 */
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: 'Internal server error' });
    }
  }
);

/**
 * @route POST api/contacts/:id
 * @desc update a contact
 * @access PRIVATE
 */
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body;
  const fields = {};
  if (name) fields.name = name;
  if (email) fields.email = email;
  if (phone) fields.phone = phone;
  if (type) fields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: fields },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
});

/**
 * @route POST api/contacts/:id
 * @desc delete a contact
 * @access PRIVATE
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: 'contact removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Internal server error' });
  }
});

module.exports = router;
