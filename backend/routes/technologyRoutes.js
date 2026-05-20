const express = require('express');
const router = express.Router();
const courseController = require('../controllers/technologyController');
const authMiddleware = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');

// Public routes
router.get('/', courseController.getAllCourses);
router.get('/featured', courseController.getFeaturedCourses);
router.get('/:id', courseController.getCourse);
router.get('/slug/:slug', courseController.getCourseBySlug);

// Protected routes - only for authorized users
router.use(authMiddleware.protect);

// Instructor & Admin only routes
router.use(authMiddleware.restrictTo('instructor', 'admin'));
router.post('/', uploadMiddleware.single('image'), courseController.createCourse);
router.patch('/:id', uploadMiddleware.single('image'), courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
