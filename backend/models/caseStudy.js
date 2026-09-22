const mongoose = require('mongoose');
const slugify = require('slugify');

const caseStudySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A case study must have a title'],
    unique: true,
    trim: true
  },
  slug: String,
  client: {
    type: String,
    trim: true
  },
  industry: {
    type: String,
    trim: true
  },
  challenge: {
    type: String
  },
  solution: {
    type: String
  },
  results: {
    type: String
  },
  technologies: [{
    type: String,
    trim: true
  }],
  image: {
    type: String
  },
  metrics: [{
    label: { type: String },
    value: { type: String }
  }],
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

caseStudySchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('CaseStudy', caseStudySchema);
