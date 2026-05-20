// 1. models/Blog.js
const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A blog post must have a title'],
    unique: true,
    trim: true,
    maxlength: [200, 'A title must have at most 200 characters']
  },
  slug: String,
  content: {
    type: String,
    required: [true, 'A blog post must have content']
  },
  excerpt: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    required: [true, 'A blog post must have a featured image']
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A blog post must have an author']
  },
  categories: [{
    type: String,
    trim: true
  }],
  tags: [{
    type: String,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  published: {
    type: Boolean,
    default: true
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create slug from title before save
blogSchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

// Populate author whenever a blog is queried
blogSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'author',
    select: 'name'
  });
  next();
});

module.exports = mongoose.model('Blog', blogSchema);