const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send email function
const sendEmail = async (options) => {
  // Create transporter
  const transporter = createTransporter();
  
  // Define email options
  const mailOptions = {
    from: `BeonicX<${process.env.EMAIL_FROM || 'noreply@beonicx.com'}>`,
    to: options.email,
    subject: options.subject,
    html: options.html,
    text: options.text
  };
  
  // Send email
  await transporter.sendMail(mailOptions);
};

// Send contact form notification to admin
exports.sendContactNotification = async (data) => {
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
    <p><strong>Subject:</strong> ${data.subject}</p>
    <hr>
    <h3>Message:</h3>
    <p>${data.message}</p>
  `;
  
  await sendEmail({
    email: process.env.ADMIN_EMAIL || 'admin@beonicx.com',
    subject: `New Contact Form: ${data.subject}`,
    html,
    text: `New Contact Form Submission\nName: ${data.name}\nEmail: ${data.email}${data.phone ? `\nPhone: ${data.phone}` : ''}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`
  });
};

// Send confirmation email to contact form submitter
exports.sendContactConfirmation = async (data) => {
  const html = `
    <h2>Thank you for contacting BeonicX!</h2>
    <p>Dear ${data.name},</p>
    <p>We have received your message regarding "${data.subject}".</p>
    <p>Our team will review your inquiry and get back to you as soon as possible.</p>
    <p>Thank you for your interest in our services.</p>
    <br>
    <p>Best regards,</p>
    <p>The BeonicX Team</p>
  `;
  
  await sendEmail({
    email: data.email,
    subject: 'Thank you for contacting BeonicX',
    html,
    text: `Thank you for contacting BeonicX`
  });
  };