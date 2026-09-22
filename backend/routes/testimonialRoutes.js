const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const authMiddleware = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');

router.get('/', testimonialController.getAllTestimonials);
router.get('/featured', testimonialController.getFeaturedTestimonials);
router.get('/:id', testimonialController.getTestimonial);

router.use(authMiddleware.protect);
router.use(authMiddleware.restrictTo('admin'));

router.post('/',
  uploadMiddleware.single('image'),
  testimonialController.createTestimonial
);

router.patch('/:id',
  uploadMiddleware.single('image'),
  testimonialController.updateTestimonial
);

router.delete('/:id', testimonialController.deleteTestimonial);

module.exports = router;
