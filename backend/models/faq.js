const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'A FAQ must have a question'],
    trim: true
  },
  answer: {
    type: String,
    required: [true, 'A FAQ must have an answer'],
    trim: true
  },
  category: {
    type: String,
    trim: true,
    default: 'General'
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

module.exports = mongoose.model('Faq', faqSchema);
