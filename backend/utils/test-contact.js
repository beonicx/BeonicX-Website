/**
 * Test script for contact form API
 * Run with: node test-contact.js
 */

require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const { connectDB } = require('../config/db');

// Test contact submission
async function testContactSubmission() {
  try {
    console.log('🔌 Connecting to database...');
    await connectDB();

    const Contact = require('../models/contact');

    // Create a test contact
    const testContact = {
      name: 'John Doe',
      email: 'test@example.com',
      phone: '+1234567890',
      skype: 'john.doe.test',
      subject: 'Test Contact Form',
      message: 'This is a test message from the contact form.',
      formType: 'contact'
    };

    console.log('📝 Creating test contact...');
    const newContact = await Contact.create(testContact);
    console.log('✅ Contact created successfully!');
    console.log('Contact ID:', newContact._id);
    console.log('Contact Data:', JSON.stringify(newContact, null, 2));

    // Query the contact back
    console.log('\n📊 Querying contact...');
    const foundContact = await Contact.findById(newContact._id);
    console.log('✅ Contact found:', foundContact.name);

    // Clean up - delete test contact
    console.log('\n🧹 Cleaning up...');
    await Contact.findByIdAndDelete(newContact._id);
    console.log('✅ Test contact deleted');

    console.log('\n✨ All tests passed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testContactSubmission();
