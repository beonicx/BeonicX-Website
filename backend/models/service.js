const mongoose = require('mongoose');
const slugify = require('slugify');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A service must have a title'],
    unique: true,
    trim: true
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'A service must have a description']
  },
  shortDescription: {
    type: String,
    trim: true
  },
  icon: {
    type: String
  },
  image: {
    type: String
  },
  features: [{
    type: String
  }],
  pricing: [{
    plan: {
      type: String,
      required: [true, 'A pricing plan must have a name']
    },
    price: {
      type: Number,
      required: [true, 'A pricing plan must have a price']
    },
    duration: {
      type: String
    },
    features: [{
      type: String
    }]
  }],
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  active: {
    type: Boolean,
    default: true
  },
  heroSubtitle: {
    type: String,
    trim: true
  },
  gradient: {
    type: String,
    default: 'from-blue-500 to-cyan-500'
  },
  stats: [{
    value: { type: String },
    label: { type: String }
  }],
  sections: [{
    title: { type: String },
    description: { type: String },
    items: [{
      title: { type: String },
      description: { type: String }
    }]
  }],
  processSteps: [{
    step: { type: Number },
    title: { type: String },
    description: { type: String }
  }],
  techStack: [{
    name: { type: String },
    category: { type: String }
  }],
  cta: {
    title: { type: String },
    description: { type: String },
    buttonText: { type: String, default: 'Get Started' },
    buttonLink: { type: String, default: '/get-started' }
  }
});

// Create slug from title before save
serviceSchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('Service', serviceSchema);