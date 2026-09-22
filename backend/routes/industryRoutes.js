const express = require('express');
const router = express.Router();
const industryController = require('../controllers/industryController');
const authMiddleware = require('../middleware/auth');
const uploadMiddleware = require('../middleware/upload');

router.get('/', industryController.getAllIndustries);
router.get('/:id', industryController.getIndustry);
router.get('/slug/:slug', industryController.getIndustryBySlug);

router.use(authMiddleware.protect);
router.use(authMiddleware.restrictTo('admin'));

router.post('/',
  uploadMiddleware.single('image'),
  industryController.createIndustry
);

router.patch('/:id',
  uploadMiddleware.single('image'),
  industryController.updateIndustry
);

router.delete('/:id', industryController.deleteIndustry);

module.exports = router;
