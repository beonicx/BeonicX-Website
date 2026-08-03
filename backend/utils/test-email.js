/**
 * Email Configuration Test Script
 *
 * Run this script to test if your email configuration is working correctly.
 *
 * Usage: node test-email.js
 */

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

console.log(`${colors.blue}====================================${colors.reset}`);
console.log(`${colors.blue}   Email Configuration Test${colors.reset}`);
console.log(`${colors.blue}====================================${colors.reset}\n`);

// Display current configuration
console.log(`${colors.yellow}Current Configuration:${colors.reset}`);
console.log(`Host: ${process.env.EMAIL_HOST}`);
console.log(`Port: ${process.env.EMAIL_PORT}`);
console.log(`User: ${process.env.EMAIL_USER}`);
console.log(`From: ${process.env.EMAIL_FROM}`);
console.log(`Admin Email: ${process.env.ADMIN_EMAIL}`);
console.log(`Password: ${process.env.EMAIL_PASS ? '✓ Set' : '✗ Not Set'}\n`);

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test 1: Verify SMTP connection
console.log(`${colors.yellow}Test 1: Verifying SMTP connection...${colors.reset}`);
transporter.verify((error, success) => {
  if (error) {
    console.log(`${colors.red}✗ SMTP Connection Failed${colors.reset}`);
    console.log(`${colors.red}Error: ${error.message}${colors.reset}\n`);

    // Common solutions
    console.log(`${colors.yellow}Common Solutions:${colors.reset}`);
    console.log('1. Make sure you are using a Gmail App Password (not your regular password)');
    console.log('2. Enable 2-Step Verification in your Google Account');
    console.log('3. Generate an App Password at: https://myaccount.google.com/apppasswords');
    console.log('4. Check that all EMAIL_* variables are set correctly in .env\n');

    process.exit(1);
  } else {
    console.log(`${colors.green}✓ SMTP Connection Successful${colors.reset}\n`);

    // Test 2: Send test email
    console.log(`${colors.yellow}Test 2: Sending test email...${colors.reset}`);

    const mailOptions = {
      from: `BeonicX Test <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'BeonicX Email Configuration Test',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #3b82f6;">Email Configuration Test</h2>
          <p>This is a test email from your BeonicX website email configuration.</p>
          <p><strong>Status:</strong> <span style="color: #10b981;">✓ Email system is working correctly</span></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">Configuration Details:</p>
          <ul style="color: #6b7280; font-size: 14px;">
            <li>Host: ${process.env.EMAIL_HOST}</li>
            <li>Port: ${process.env.EMAIL_PORT}</li>
            <li>From: ${process.env.EMAIL_FROM}</li>
          </ul>
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            This is an automated test email. You can now use the contact forms on your website.
          </p>
        </div>
      `,
      text: 'Email Configuration Test - If you receive this email, your email system is working correctly.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(`${colors.red}✗ Failed to send test email${colors.reset}`);
        console.log(`${colors.red}Error: ${error.message}${colors.reset}\n`);
        process.exit(1);
      } else {
        console.log(`${colors.green}✓ Test email sent successfully${colors.reset}`);
        console.log(`Message ID: ${info.messageId}\n`);

        console.log(`${colors.green}====================================${colors.reset}`);
        console.log(`${colors.green}   All Tests Passed! ✓${colors.reset}`);
        console.log(`${colors.green}====================================${colors.reset}\n`);

        console.log(`${colors.blue}Next Steps:${colors.reset}`);
        console.log('1. Check your admin email (' + process.env.ADMIN_EMAIL + ')');
        console.log('2. You should have received a test email');
        console.log('3. If you received it, your email configuration is working!');
        console.log('4. You can now test the contact forms on your website\n');

        process.exit(0);
      }
    });
  }
});
