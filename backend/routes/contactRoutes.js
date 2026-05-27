const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactcontroller');
const authMiddleware = require('../middleware/auth');
const validateRequest = require('../middleware/validateRequest');

// Public route for submitting query (no database save)
router.post('/query',
  contactController.submitQuery
);

// Public route for submitting contact form (with database save)
router.post('/',
  validateRequest.validateContactForm,
  contactController.submitContact
);

// Admin only routes
router.use(authMiddleware.protect);
router.use(authMiddleware.restrictTo('admin'));

router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContact);
router.post('/:id/respond', contactController.respondToContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;