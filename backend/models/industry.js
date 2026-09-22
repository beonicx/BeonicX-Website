const mongoose = require('mongoose');
const slugify = require('slugify');

const industrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'An industry must have a title'],
    unique: true,
    trim: true
  },
  slug: String,
  description: {
    type: String
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
  stats: [{
    value: { type: String },
    label: { type: String }
  }],
  active: {
    type: Boolean,
    default: true
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

industrySchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('Industry', industrySchema);
