const Faq = require('../models/faq');

exports.getAllFaqs = async (req, res) => {
  try {
    const queryObj = { active: true };

    if (req.query.category) {
      queryObj.category = req.query.category;
    }

    const faqs = await Faq.find(queryObj).sort('order').select('-__v');

    res.status(200).json({
      status: 'success',
      results: faqs.length,
      data: faqs
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getFaq = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);

    if (!faq) {
      return res.status(404).json({
        status: 'fail',
        message: 'FAQ not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: faq
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.createFaq = async (req, res) => {
  try {
    const newFaq = await Faq.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newFaq
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.updateFaq = async (req, res) => {
  try {
    const updated = await Faq.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({
        status: 'fail',
        message: 'FAQ not found'
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

exports.deleteFaq = async (req, res) => {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id);

    if (!faq) {
      return res.status(404).json({
        status: 'fail',
        message: 'FAQ not found'
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
