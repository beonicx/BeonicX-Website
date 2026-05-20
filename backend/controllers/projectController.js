const Project = require('../models/project');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(field => delete queryObj[field]);
    
    // Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
    
    let query = Project.find(JSON.parse(queryStr));
    
    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-featured order');
    }
    
    // Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }
    
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 12;
    const skip = (page - 1) * limit;
    
    query = query.skip(skip).limit(limit);
    
    // Execute query
    const projects = await query;
    const total = await Project.countDocuments(JSON.parse(queryStr));
    
    res.status(200).json({
      status: 'success',
      results: projects.length,
      total,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get featured projects
exports.getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true })
      .sort('order')
      .limit(6);
    
    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get project by ID
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: project
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get project by slug
exports.getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: project
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Create new project (admin only)
exports.createProject = async (req, res) => {
  try {
    // Handle main image upload
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }
    
    // Handle gallery images (would need additional middleware setup)
    if (req.files && req.files.gallery) {
      req.body.gallery = req.files.gallery.map(file => `/uploads/${file.filename}`);
    }
    
    const newProject = await Project.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: newProject
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update project (admin only)
exports.updateProject = async (req, res) => {
  try {
    // Handle main image upload
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }
    
    // Handle gallery images (would need additional middleware setup)
    if (req.files && req.files.gallery) {
      req.body.gallery = req.files.gallery.map(file => `/uploads/${file.filename}`);
    }
    
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!updatedProject) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: updatedProject
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete project (admin only)
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
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