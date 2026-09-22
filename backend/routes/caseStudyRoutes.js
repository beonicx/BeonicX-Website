const express = require('express');
const router = express.Router();
const caseStudyController = require('../controllers/caseStudyController');
const authMiddleware = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');

router.get('/', caseStudyController.getAllCaseStudies);
router.get('/:id', caseStudyController.getCaseStudy);
router.get('/slug/:slug', caseStudyController.getCaseStudyBySlug);

router.use(authMiddleware.protect);
router.use(authMiddleware.restrictTo('admin'));

router.post('/',
  uploadMiddleware.single('image'),
  caseStudyController.createCaseStudy
);

router.patch('/:id',
  uploadMiddleware.single('image'),
  caseStudyController.updateCaseStudy
);

router.delete('/:id', caseStudyController.deleteCaseStudy);

module.exports = router;
