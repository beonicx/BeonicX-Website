const Service = require('../models/service');

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(field => delete queryObj[field]);
    
    // Filter for active services only
    queryObj.active = true;
    
    let query = Service.find(queryObj);
    
    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('order');
    }
    
    // Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }
    
    // Execute query
    const services = await query;
    
    res.status(200).json({
      status: 'success',
      results: services.length,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get service by ID
exports.getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
      return res.status(404).json({
        status: 'fail',
        message: 'Service not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: service
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get service by slug
exports.getServiceBySlug = async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });
    
    if (!service) {
      return res.status(404).json({
        status: 'fail',
        message: 'Service not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: service
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Create new service (admin only)
exports.createService = async (req, res) => {
  try {
    // Handle file upload
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }
    
    const newService = await Service.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: newService
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update service (admin only)
exports.updateService = async (req, res) => {
  try {
    // Handle file upload
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }
    
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!updatedService) {
      return res.status(404).json({
        status: 'fail',
        message: 'Service not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: updatedService
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete service (admin only)
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    
    if (!service) {
      return res.status(404).json({
        status: 'fail',
        message: 'Service not found'
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