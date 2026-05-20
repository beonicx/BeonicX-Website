const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');

// Public routes
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getService);
router.get('/slug/:slug', serviceController.getServiceBySlug);

// Admin only routes
router.use(authMiddleware.protect);
router.use(authMiddleware.restrictTo('admin'));

router.post('/', 
  uploadMiddleware.single('image'),
  serviceController.createService
);

router.patch('/:id', 
  uploadMiddleware.single('image'),
  serviceController.updateService
);

router.delete('/:id', serviceController.deleteService);

module.exports = router;