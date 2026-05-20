const Contact = require('../models/contact');
const emailService = require('../utils/email');

// Submit contact form
exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Create new contact entry
    const newContact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message
    });
    
    // Send notification email to admin
    await emailService.sendContactNotification({
      name,
      email,
      subject,
      message
    });
    
    // Send confirmation email to user
    await emailService.sendContactConfirmation({
      name,
      email,
      subject
    });
    
    res.status(201).json({
      status: 'success',
      message: 'Your message has been sent successfully!',
      data: {
        id: newContact._id
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all contact messages (admin only)
exports.getAllContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const skip = (page - 1) * limit;
    
    // Build query
    let query = {};
    
    if (req.query.responded) {
      query.responded = req.query.responded === 'true';
    }
    
    const contacts = await Contact.find(query)
      .sort('-createdAt')
      .skip(skip)
      .limit(limit);
    
    const total = await Contact.countDocuments(query);
    
    res.status(200).json({
      status: 'success',
      results: contacts.length,
      total,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Get contact message by ID (admin only)
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        status: 'fail',
        message: 'Contact message not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// Respond to contact message (admin only)
exports.respondToContact = async (req, res) => {
  try {
    const { responseMessage } = req.body;
    
    if (!responseMessage) {
      return res.status(400).json({
        status: 'fail',
        message: 'Response message is required'
      });
    }
    
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        status: 'fail',
        message: 'Contact message not found'
      });
    }
    
    // Update contact with response
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, {
      responded: true,
      responseDate: Date.now(),
      responseMessage
    }, {
      new: true,
      runValidators: true
    });
    
    // Send response email to contact
    await emailService.sendContactResponse({
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      originalMessage: contact.message,
      responseMessage
    });
    
    res.status(200).json({
      status: 'success',
      message: 'Response sent successfully',
      data: updatedContact
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete contact message (admin only)
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        status: 'fail',
        message: 'Contact message not found'
      });
    }
    
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