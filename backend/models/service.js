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
  }
});

// Create slug from title before save
serviceSchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('Service', serviceSchema);