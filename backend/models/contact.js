const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  skype: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    trim: true,
    default: 'General Inquiry'
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  formType: {
    type: String,
    enum: ['contact', 'query'],
    default: 'contact'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  responded: {
    type: Boolean,
    default: false
  },
  responseDate: {
    type: Date
  },
  responseMessage: {
    type: String
  }
});

module.exports = mongoose.model('Contact', contactSchema);