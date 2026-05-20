const Blog = require('../models/blog');

// Get all blog posts
exports.getAllBlogs = async (req, res) => {
  try {
    // BUILD QUERY
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(field => delete queryObj[field]);

    // Filter for published posts only if not admin
    if (!req.user || (req.user && req.user.role !== 'admin')) {
      queryObj.published = true;
    }

    // Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
    
    let query = Blog.find(JSON.parse(queryStr));

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
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
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    // EXECUTE QUERY
    const blogs = await query;
    const total = await Blog.countDocuments(JSON.parse(queryStr));

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: blogs.length,
      total,
      data: blogs
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get blog post by ID
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog post not found'
      });
    }
    
    // Check if blog is published or user is admin
    if (!blog.published && (!req.user || req.user.role !== 'admin')) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog post not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get blog post by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    
    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog post not found'
      });
    }
    
    // Check if blog is published or user is admin
    if (!blog.published && (!req.user || req.user.role !== 'admin')) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog post not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Create new blog post
exports.createBlog = async (req, res) => {
  try {
    // Add image path and author
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }
    req.body.author = req.user.id;
    
    const newBlog = await Blog.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: newBlog
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update blog post
exports.updateBlog = async (req, res) => {
  try {
    // Add image path if there's an uploaded file
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }
    
    // Add update date
    req.body.updatedAt = Date.now();
    
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog post not found'
      });
    }
    
    // Check if user is author or admin
    if (blog.author.id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        status: 'fail',
        message: 'You do not have permission to update this blog post'
      });
    }
    
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      status: 'success',
      data: updatedBlog
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete blog post
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        status: 'fail',
        message: 'Blog post not found'
      });
    }
    
    // Check if user is author or admin
    if (blog.author.id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        status: 'fail',
        message: 'You do not have permission to delete this blog post'
      });
    }
    
    await Blog.findByIdAndDelete(req.params.id);
    
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