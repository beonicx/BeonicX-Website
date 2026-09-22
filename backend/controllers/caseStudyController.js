const CaseStudy = require('../models/caseStudy');

exports.getAllCaseStudies = async (req, res) => {
  try {
    const queryObj = { active: true };

    if (req.query.industry) {
      queryObj.industry = req.query.industry;
    }

    let query = CaseStudy.find(queryObj).sort('-featured order');

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    const caseStudies = await query;

    res.status(200).json({
      status: 'success',
      results: caseStudies.length,
      data: caseStudies
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findById(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({
        status: 'fail',
        message: 'Case study not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: caseStudy
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getCaseStudyBySlug = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findOne({ slug: req.params.slug });

    if (!caseStudy) {
      return res.status(404).json({
        status: 'fail',
        message: 'Case study not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: caseStudy
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.createCaseStudy = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }

    const newCaseStudy = await CaseStudy.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newCaseStudy
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.updateCaseStudy = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }

    const updated = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({
        status: 'fail',
        message: 'Case study not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: updated
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.deleteCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);

    if (!caseStudy) {
      return res.status(404).json({
        status: 'fail',
        message: 'Case study not found'
      });
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};
