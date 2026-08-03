/**
 * Test script for query email functionality (no database save)
 * Run with: node utils/test-query-email.js
 */

require('dotenv').config({ path: '.env.local' });
const emailService = require('./email');

async function testQueryEmail() {
  try {
    console.log('📧 Testing query email functionality...\n');

    const testData = {
      name: 'Test User',
      email: 'thisisnitishyadav@gmail.com', // Change to your email for testing
      subject: 'Home Page Query - Test',
      message: 'This is a test query message from the Drop Your Queries form. Testing email functionality without database save.',
      formType: 'query'
    };

    console.log('📤 Sending admin notification email...');
    await emailService.sendContactNotification(testData);
    console.log('✅ Admin notification email sent successfully!');

    console.log('\n📤 Sending user confirmation email...');
    await emailService.sendContactConfirmation({
      name: testData.name,
      email: testData.email,
      subject: testData.subject
    });
    console.log('✅ User confirmation email sent successfully!');

    console.log('\n✨ All emails sent successfully!');
    console.log('📬 Check your inbox for:');
    console.log(`   - Admin email at: ${process.env.ADMIN_EMAIL || 'beonicxgroup@gmail.com'}`);
    console.log(`   - User confirmation at: ${testData.email}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
}

// Run the test
testQueryEmail();
