const { validationResult } = require('express-validator');
const { body } = require('express-validator');

// Base validator middleware
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'fail',
      errors: errors.array().map(err => ({
        field: err.param,
        message: err.msg
      }))
    });
  }
  next();
};

// Contact form validation
exports.validateContactForm = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email'),
  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required')
    .isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 20 }).withMessage('Message must be at least 20 characters'),
  exports.validate
];

// Course validation
exports.validateCourse = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 5, max: 100 }).withMessage('Title must be between 5 and 100 characters'),
  body('description')
    .trim()
    .notEmpty().withMessage('Description is required'),
  body('duration')
    .isNumeric().withMessage('Duration must be a number'),
  body('price')
    .isNumeric().withMessage('Price must be a number'),
  exports.validate
];

// Blog post validation
exports.validateBlogPost = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 5, max: 200 }).withMessage('Title must be between 5 and 200 characters'),
  body('content')
    .trim()
    .notEmpty().withMessage('Content is required'),
  exports.validate
];

// Service validation
exports.validateService = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required'),
  body('description')
    .trim()
    .notEmpty().withMessage('Description is required'),
  exports.validate
];

// Project validation
exports.validateProject = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required'),
  body('description')
    .trim()
    .notEmpty().withMessage('Description is required'),
  body('category')
    .trim()
    .notEmpty().withMessage('Category is required'),
  exports.validate
];