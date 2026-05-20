const mongoose = require('mongoose');
const slugify = require('slugify');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A project must have a title'],
    unique: true,
    trim: true
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'A project must have a description']
  },
  client: {
    type: String
  },
  completionDate: {
    type: Date
  },
  duration: {
    type: String
  },
  category: {
    type: String,
    required: [true, 'A project must have a category']
  },
  technologies: [{
    type: String
  }],
  image: {
    type: String,
    required: [true, 'A project must have a main image']
  },
  gallery: [{
    type: String
  }],
  challenge: {
    type: String
  },
  solution: {
    type: String
  },
  results: {
    type: String
  },
  testimonial: {
    quote: String,
    author: String,
    position: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create slug from title before save
projectSchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('Project', projectSchema);