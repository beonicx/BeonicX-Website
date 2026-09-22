const Testimonial = require('../models/testimonial');

exports.getAllTestimonials = async (req, res) => {
  try {
    const queryObj = { active: true };
    let query = Testimonial.find(queryObj).sort('order');

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    const testimonials = await query;

    res.status(200).json({
      status: 'success',
      results: testimonials.length,
      data: testimonials
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getFeaturedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ active: true, featured: true })
      .sort('order')
      .limit(6)
      .select('-__v');

    res.status(200).json({
      status: 'success',
      results: testimonials.length,
      data: testimonials
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        status: 'fail',
        message: 'Testimonial not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: testimonial
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.createTestimonial = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }

    const newTestimonial = await Testimonial.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newTestimonial
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }

    const updated = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({
        status: 'fail',
        message: 'Testimonial not found'
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

exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        status: 'fail',
        message: 'Testimonial not found'
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
