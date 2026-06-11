const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Send email function
const sendEmail = async (options) => {
  console.log('📧 Sending email to:', options.email);
  console.log('📧 Subject:', options.subject);

  try {
    // Create transporter
    const transporter = createTransporter();

    // Define email options
    const mailOptions = {
      from: `BeonicX <${process.env.EMAIL_FROM || 'noreply@beonicx.com'}>`,
      to: options.email,
      subject: options.subject,
      html: options.html,
      text: options.text
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    throw error;
  }
};

// Send contact form notification to admin
exports.sendContactNotification = async (data) => {
  const formTypeLabel = data.formType === 'query' ? 'Query Form' : 'Contact Form';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
      <h2 style="color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">New ${formTypeLabel} Submission</h2>
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${data.name}</span></p>
        <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <span style="color: #3b82f6;">${data.email}</span></p>
        ${data.phone ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Phone:</strong> <span style="color: #6b7280;">${data.phone}</span></p>` : ''}
        ${data.skype ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Skype ID:</strong> <span style="color: #6b7280;">${data.skype}</span></p>` : ''}
        <p style="margin: 10px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #6b7280;">${data.subject}</span></p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
        <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
      </div>
      <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; text-align: center;">This email was sent from BeonicX Website ${formTypeLabel}</p>
    </div>
  `;

  await sendEmail({
    email: process.env.ADMIN_EMAIL || 'beonicxgroup@gmail.com',
    subject: `New ${formTypeLabel}: ${data.subject}`,
    html,
    text: `New ${formTypeLabel} Submission\nName: ${data.name}\nEmail: ${data.email}${data.phone ? `\nPhone: ${data.phone}` : ''}${data.skype ? `\nSkype: ${data.skype}` : ''}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`
  });
};

// Send confirmation email to contact form submitter
exports.sendContactConfirmation = async (data) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #3b82f6; margin: 0;">BeonicX</h1>
          <p style="color: #6b7280; margin-top: 5px;">AI-Powered SaaS Solutions</p>
        </div>
        <h2 style="color: #1f2937; margin-bottom: 20px;">Thank you for contacting us!</h2>
        <p style="color: #374151; line-height: 1.6;">Dear ${data.name},</p>
        <p style="color: #374151; line-height: 1.6;">We have received your message regarding <strong>"${data.subject}"</strong>.</p>
        <p style="color: #374151; line-height: 1.6;">Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.</p>
        <p style="color: #374151; line-height: 1.6;">Thank you for your interest in our services.</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #374151; margin: 5px 0;">Best regards,</p>
          <p style="color: #3b82f6; font-weight: bold; margin: 5px 0;">The BeonicX Team</p>
        </div>
        <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <p style="color: #1e40af; margin: 0; font-size: 14px;">📧 Email: beonicxgroup@gmail.com</p>
          <p style="color: #1e40af; margin: 5px 0 0 0; font-size: 14px;">📞 Phone: +91-9129842706</p>
        </div>
      </div>
      <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; text-align: center;">This is an automated confirmation email from BeonicX</p>
    </div>
  `;

  await sendEmail({
    email: data.email,
    subject: 'Thank you for contacting BeonicX',
    html,
    text: `Thank you for contacting BeonicX!\n\nDear ${data.name},\n\nWe have received your message regarding "${data.subject}".\n\nOur team will review your inquiry and get back to you as soon as possible.\n\nThank you for your interest in our services.\n\nBest regards,\nThe BeonicX Team`
  });
};

// Send response email to contact
exports.sendContactResponse = async (data) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #3b82f6; margin: 0;">BeonicX</h1>
          <p style="color: #6b7280; margin-top: 5px;">AI-Powered SaaS Solutions</p>
        </div>
        <h2 style="color: #1f2937; margin-bottom: 20px;">Response to Your Inquiry</h2>
        <p style="color: #374151; line-height: 1.6;">Dear ${data.name},</p>
        <p style="color: #374151; line-height: 1.6;">Thank you for reaching out to us. Here is our response regarding <strong>"${data.subject}"</strong>:</p>
        <div style="background-color: #f9fafb; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0; border-radius: 4px;">
          <p style="color: #374151; line-height: 1.6; white-space: pre-wrap; margin: 0;">${data.responseMessage}</p>
        </div>
        <p style="color: #6b7280; font-size: 14px; margin-top: 20px;"><strong>Your Original Message:</strong></p>
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
          <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap; margin: 0;">${data.originalMessage}</p>
        </div>
        <p style="color: #374151; line-height: 1.6;">If you have any further questions, please don't hesitate to contact us.</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #374151; margin: 5px 0;">Best regards,</p>
          <p style="color: #3b82f6; font-weight: bold; margin: 5px 0;">The BeonicX Team</p>
        </div>
        <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <p style="color: #1e40af; margin: 0; font-size: 14px;">📧 Email: beonicxgroup@gmail.com</p>
          <p style="color: #1e40af; margin: 5px 0 0 0; font-size: 14px;">📞 Phone: +91-9129842706</p>
        </div>
      </div>
      <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; text-align: center;">This email was sent from BeonicX</p>
    </div>
  `;

  await sendEmail({
    email: data.email,
    subject: `Re: ${data.subject}`,
    html,
    text: `Dear ${data.name},\n\nThank you for reaching out to us. Here is our response regarding "${data.subject}":\n\n${data.responseMessage}\n\nYour Original Message:\n${data.originalMessage}\n\nIf you have any further questions, please don't hesitate to contact us.\n\nBest regards,\nThe BeonicX Team`
  });
};