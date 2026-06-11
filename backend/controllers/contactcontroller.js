const Contact = require('../models/contact');
const emailService = require('../utils/email');

// Submit query form (no database save, only email)
exports.submitQuery = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        status: 'fail',
        message: 'Name, email, and message are required'
      });
    }

    // Send notification email to admin
    await emailService.sendContactNotification({
      name,
      email,
      subject: subject || 'Home Page Query',
      message,
      formType: 'query'
    });

    // Send confirmation email to user
    await emailService.sendContactConfirmation({
      name,
      email,
      subject: subject || 'Home Page Query'
    });

    res.status(200).json({
      status: 'success',
      message: 'Your query has been sent successfully!'
    });
  } catch (error) {
    console.error('Query submission error:', error);
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Failed to submit query. Please try again.'
    });
  }
};

// Submit contact form (saves to database + sends email)
exports.submitContact = async (req, res) => {
  console.log('\n=== CONTACT FORM SUBMISSION ===');
  console.log('Request Body:', req.body);
  console.log('Request Headers:', req.headers);

  try {
    const { name, email, phone, skype, subject, message, formType } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({
        status: 'fail',
        message: 'Name, email, and message are required'
      });
    }

    console.log('✅ Basic validation passed');

    // Create new contact entry
    console.log('📝 Creating database entry...');
    const newContact = await Contact.create({
      name,
      email,
      phone,
      skype,
      subject: subject || 'General Inquiry',
      message,
      formType: formType || 'contact'
    });
    console.log('✅ Database entry created:', newContact._id);

    // Send notification email to admin
    console.log('📧 Sending admin notification email...');
    try {
      await emailService.sendContactNotification({
        name,
        email,
        phone,
        skype,
        subject: subject || 'General Inquiry',
        message,
        formType: formType || 'contact'
      });
      console.log('✅ Admin notification sent');
    } catch (emailError) {
      console.error('⚠️ Failed to send admin notification:', emailError.message);
      // Continue even if email fails
    }

    // Send confirmation email to user
    console.log('📧 Sending user confirmation email...');
    try {
      await emailService.sendContactConfirmation({
        name,
        email,
        subject: subject || 'General Inquiry'
      });
      console.log('✅ User confirmation sent');
    } catch (emailError) {
      console.error('⚠️ Failed to send user confirmation:', emailError.message);
      // Continue even if email fails
    }

    console.log('✅ Contact form submission completed successfully');
    console.log('=== END CONTACT FORM SUBMISSION ===\n');

    res.status(201).json({
      status: 'success',
      message: 'Your message has been sent successfully!',
      data: {
        id: newContact._id
      }
    });
  } catch (error) {
    console.error('💥 Contact submission error:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.log('=== END CONTACT FORM SUBMISSION (ERROR) ===\n');

    // Handle specific error types
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: 'fail',
        message: 'Validation error: ' + Object.values(error.errors).map(e => e.message).join(', ')
      });
    }

    if (error.name === 'MongoServerError' && error.code === 11000) {
      return res.status(400).json({
        status: 'fail',
        message: 'Duplicate entry detected'
      });
    }

    res.status(500).json({
      status: 'error',
      message: error.message || 'Failed to submit contact form. Please try again later.'
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