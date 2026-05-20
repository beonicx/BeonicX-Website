const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');

// Public routes
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlog);
router.get('/slug/:slug', blogController.getBlogBySlug);

// Protected routes
router.use(authMiddleware.protect);

// Admin and author routes
router.post('/', 
  authMiddleware.restrictTo('admin', 'instructor'),
  uploadMiddleware.single('image'), 
  blogController.createBlog
);

router.patch('/:id', 
  authMiddleware.restrictTo('admin', 'instructor'),
  uploadMiddleware.single('image'), 
  blogController.updateBlog
);

router.delete('/:id', 
  authMiddleware.restrictTo('admin', 'instructor'),
  blogController.deleteBlog
);

module.exports = router;