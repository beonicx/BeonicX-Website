const Course = require('../models/technology');

// Get all courses with filtering, sorting and pagination
exports.getAllCourses = async (req, res) => {
  try {
    // BUILD QUERY
    // 1) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(field => delete queryObj[field]);

    // 2) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
    
    let query = Course.find(JSON.parse(queryStr));

    // 3) Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // 4) Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // 5) Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    // EXECUTE QUERY
    const courses = await query;
    const total = await Course.countDocuments(JSON.parse(queryStr));

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: courses.length,
      total,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get featured courses
exports.getFeaturedCourses = async (req, res) => {
  try {
    const courses = await Course.find({ featured: true }).limit(6);
    
    res.status(200).json({
      status: 'success',
      results: courses.length,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get single course by ID
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: course
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get course by slug
exports.getCourseBySlug = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    
    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: course
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Create new course
exports.createCourse = async (req, res) => {
  try {
    // Add the image path and instructor
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }
    req.body.instructor = req.user.id;
    
    const newCourse = await Course.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: newCourse
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  try {
    // Add image path if there's an uploaded file
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }
    
    const course = await Course.findById(req.params.id);
    
    // Check if course exists
    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found'
      });
    }
    
    // Check if user is course instructor or admin
    if (course.instructor.id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        status: 'fail',
        message: 'You do not have permission to update this course'
      });
    }
    
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      status: 'success',
      data: updatedCourse
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    // Check if course exists
    if (!course) {
      return res.status(404).json({
        status: 'fail',
        message: 'Course not found'
      });
    }
    
    // Check if user is course instructor or admin
    if (course.instructor.id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        status: 'fail',
        message: 'You do not have permission to delete this course'
      });
    }
    
    await Course.findByIdAndDelete(req.params.id);
    
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