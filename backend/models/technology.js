const mongoose = require('mongoose');
const slugify = require('slugify');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A course must have a title'],
    unique: true,
    trim: true,
    maxlength: [100, 'A course title must have at most 100 characters']
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'A course must have a description'],
    trim: true
  },
  shortDescription: {
    type: String,
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'A course must have a duration']
  },
  durationUnit: {
    type: String,
    enum: ['hours', 'days', 'weeks', 'months'],
    default: 'weeks'
  },
  price: {
    type: Number,
    required: [true, 'A course must have a price']
  },
  discountPrice: Number,
  image: {
    type: String,
    required: [true, 'A course must have an image']
  },
  topics: [String],
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  instructor: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A course must have an instructor']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  featured: {
    type: Boolean,
    default: false
  }
});

// Create slug from title before save
courseSchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

// Populate instructor whenever a course is queried
courseSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'instructor',
    select: 'name email'
  });
  next();
});

module.exports = mongoose.model('Course', courseSchema);