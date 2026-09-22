const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');
const authMiddleware = require('../middleware/auth');

router.get('/', faqController.getAllFaqs);
router.get('/:id', faqController.getFaq);

router.use(authMiddleware.protect);
router.use(authMiddleware.restrictTo('admin'));

router.post('/', faqController.createFaq);
router.patch('/:id', faqController.updateFaq);
router.delete('/:id', faqController.deleteFaq);

module.exports = router;
