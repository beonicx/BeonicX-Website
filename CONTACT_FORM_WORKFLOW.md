# Contact Form Workflow Documentation

## Overview
The contact form is fully implemented with frontend validation, backend API, email notifications, and database storage.

## Architecture

```
Frontend (ContactUs.js)
       ↓
    API Call
       ↓
Backend API (/api/contact)
       ↓
    Validation Middleware
       ↓
    Controller (submitContact)
       ↓
├─→ Save to MongoDB (Contact Model)
├─→ Send Admin Notification Email
└─→ Send User Confirmation Email
       ↓
    Return Success Response
       ↓
Frontend displays success message
```

## Frontend Implementation

**File:** `frontend/src/components/contact/contactUs/ContactUs.js`

### Features:
- ✅ Form validation (name, email, message required)
- ✅ Email format validation
- ✅ Real-time error display
- ✅ Loading state during submission
- ✅ Success/error message display
- ✅ Form reset after successful submission
- ✅ API integration with error handling

### API Endpoint:
```javascript
POST ${NEXT_PUBLIC_API_URL}/contact
```

### Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "skype": "john.doe",
  "subject": "Contact Form Submission",
  "message": "Your message here",
  "formType": "contact"
}
```

## Backend Implementation

### Routes
**File:** `backend/routes/contactRoutes.js`

```
POST   /api/contact              - Submit contact form (public)
GET    /api/contact              - Get all contacts (admin only)
GET    /api/contact/:id          - Get single contact (admin only)
POST   /api/contact/:id/respond  - Respond to contact (admin only)
DELETE /api/contact/:id          - Delete contact (admin only)
```

### Controller
**File:** `backend/controllers/contactcontroller.js`

**Functions:**
- `submitContact` - Handles form submission
- `getAllContacts` - Retrieves all contacts with pagination
- `getContact` - Retrieves single contact by ID
- `respondToContact` - Sends response to contact via email
- `deleteContact` - Deletes a contact record

### Model
**File:** `backend/models/contact.js`

**Schema Fields:**
```javascript
{
  name: String (required),
  email: String (required),
  phone: String,
  skype: String,
  subject: String,
  message: String (required),
  formType: String (enum: ['contact', 'query']),
  createdAt: Date,
  responded: Boolean,
  responseDate: Date,
  responseMessage: String
}
```

### Email Service
**File:** `backend/utils/email.js`

**Functions:**
1. `sendContactNotification` - Sends email to admin when form is submitted
2. `sendContactConfirmation` - Sends confirmation email to user
3. `sendContactResponse` - Sends response email when admin replies

### Validation Middleware
**File:** `backend/middleware/validateRequest.js`

**Validates:**
- Name: min 2 characters, required
- Email: valid email format, required
- Message: min 10 characters, required
- Phone: optional
- Skype: optional
- Subject: optional, min 3 characters

## Environment Setup

### Backend (.env)
```env
NODE_ENV=development
PORT=5002

# Database
MONGODB_URI=your_mongodb_connection_string

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_FROM=your_email@gmail.com
ADMIN_EMAIL=admin_email@gmail.com

# CORS
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```env
NEXT_PUBLIC_API_URL=http://localhost:5002/api
```

## Email Configuration (Gmail)

To use Gmail for sending emails:

1. Enable 2-Step Verification in your Google Account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an App Password for "Mail"
4. Use this App Password in `EMAIL_PASS` (not your regular Gmail password)

## How to Run

### 1. Start Backend Server
```bash
cd backend
npm install
npm run dev
```

Server will run on `http://localhost:5002`

### 2. Start Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000`

### 3. Test the Contact Form
1. Navigate to `http://localhost:3000/contact/contactUs`
2. Fill out the form
3. Click "Send Message"
4. Check for success message on the page
5. Check admin email for notification
6. Check user email for confirmation

## Testing

### Test Backend API Directly
```bash
cd backend
node test-contact.js
```

### Test with cURL
```bash
curl -X POST http://localhost:5002/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "subject": "Test Subject",
    "message": "This is a test message",
    "formType": "contact"
  }'
```

### Expected Response
```json
{
  "status": "success",
  "message": "Your message has been sent successfully!",
  "data": {
    "id": "contact_id_here"
  }
}
```

## Error Handling

### Frontend
- Validates fields before submission
- Displays field-specific errors
- Shows network error messages
- Handles timeout and connection issues

### Backend
- Validates all required fields
- Returns detailed error messages
- Handles database errors gracefully
- Catches email sending failures

### Common Error Responses
```json
// Validation Error
{
  "status": "fail",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email"
    }
  ]
}

// Server Error
{
  "status": "fail",
  "message": "Failed to submit contact form"
}
```

## Admin Features

### View All Contacts
```bash
GET /api/contact?page=1&limit=20&responded=false
```

### Respond to Contact
```bash
POST /api/contact/:id/respond
{
  "responseMessage": "Thank you for reaching out..."
}
```

This will:
1. Update contact record with response
2. Send email to the contact person
3. Mark contact as responded

## Security Features

- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ Input validation and sanitization
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ Request body size limit (10kb)
- ✅ Email validation
- ✅ Admin-only routes protected with authentication

## Database Schema

Contacts are stored in MongoDB with the following structure:

```javascript
{
  _id: ObjectId,
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  skype: "john.doe",
  subject: "General Inquiry",
  message: "I would like to know more about your services",
  formType: "contact",
  createdAt: "2026-05-27T10:30:00.000Z",
  responded: false,
  responseDate: null,
  responseMessage: null
}
```

## Troubleshooting

### Form Submission Not Working

1. **Check Backend Server**
   ```bash
   curl http://localhost:5002/api/contact
   ```

2. **Check MongoDB Connection**
   - Verify MONGODB_URI in .env
   - Check MongoDB Atlas whitelist IPs

3. **Check Browser Console**
   - Look for CORS errors
   - Verify API URL is correct

4. **Check Backend Logs**
   - Look for validation errors
   - Check email sending errors

### Emails Not Sending

1. **Verify Email Credentials**
   - Check EMAIL_USER and EMAIL_PASS
   - Use App Password for Gmail

2. **Check Email Service Logs**
   - Look for SMTP errors in backend console

3. **Test Email Configuration**
   ```bash
   # Run backend and check logs when submitting form
   npm run dev
   ```

### Database Connection Issues

1. **Check MongoDB URI**
   - Verify connection string format
   - Check username/password

2. **Check Network Access**
   - Whitelist IP in MongoDB Atlas
   - Check firewall settings

## API Response Examples

### Successful Submission
```json
{
  "status": "success",
  "message": "Your message has been sent successfully!",
  "data": {
    "id": "664f5a7c9e1b2c3d4e5f6a7b"
  }
}
```

### Validation Error
```json
{
  "status": "fail",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email"
    },
    {
      "field": "message",
      "message": "Message must be at least 10 characters"
    }
  ]
}
```

## Next Steps

1. ✅ Contact form is fully functional
2. ✅ Email notifications working
3. ✅ Database storage implemented
4. ✅ Admin panel routes ready

### Potential Enhancements:
- Add captcha to prevent spam
- Implement file upload for attachments
- Add real-time notification system
- Create admin dashboard UI
- Add analytics and reporting
- Implement auto-responder templates

## Support

For issues or questions:
- Email: beonicxgroup@gmail.com
- Phone: +91-9129842706
