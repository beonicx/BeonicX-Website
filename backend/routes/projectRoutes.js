const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');

// Public routes
router.get('/', projectController.getAllProjects);
router.get('/featured', projectController.getFeaturedProjects);
router.get('/:id', projectController.getProject);
router.get('/slug/:slug', projectController.getProjectBySlug);

// Admin only routes
router.use(authMiddleware.protect);
router.use(authMiddleware.restrictTo('admin'));

// For handling multiple image uploads (main image + gallery images)
const projectUploads = uploadMiddleware.fields([
  { name: 'image', maxCount: 1 },
  { name: 'gallery', maxCount: 10 }
]);

router.post('/create-project', projectUploads, projectController.createProject);
router.patch('/:id', projectUploads, projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
