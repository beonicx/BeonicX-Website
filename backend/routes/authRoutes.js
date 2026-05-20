const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Registration and login routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Password management routes
router.post('/forgot-password', authController.forgotPassword);
router.patch('/reset-password/:token', authController.resetPassword);

// Protected routes
router.use(protect);
router.patch('/update-password', authController.updatePassword);
router.get('/me', authController.getMe);
router.patch('/update-me', authController.updateMe);

module.exports = router;