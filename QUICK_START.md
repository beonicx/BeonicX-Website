# Quick Start Guide - Contact Form

## 🚀 Getting Started in 3 Steps

### Step 1: Ensure Dependencies are Installed

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
cd ..
```

### Step 2: Configure Environment Variables

Your environment is already configured! Just verify:

**Backend** (`backend/.env`):
- ✅ MongoDB connection: Configured
- ✅ Email settings: Configured (Gmail SMTP)
- ✅ Admin email: beonicxgroup@gmail.com
- ✅ Port: 5002

**Frontend** (`frontend/.env`):
- ✅ API URL: http://localhost:5002/api

### Step 3: Start the Servers

**Option A: Easy Start (Recommended)**
```bash
./start-dev.sh
```

**Option B: Manual Start**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

## 🧪 Test the Contact Form

1. Open your browser: `http://localhost:3000/contact/contactUs`
2. Fill out the form:
   - Name: Test User
   - Email: your-email@example.com
   - Message: This is a test message
3. Click "Send Message"
4. You should see: "✅ Thanks for your message! We will get back to you soon."

## 📧 Email Notifications

When someone submits the contact form:

1. **Admin receives notification** at: `beonicxgroup@gmail.com`
   - Contains all form details
   - Includes sender's contact info

2. **User receives confirmation** at their email
   - Thanks them for reaching out
   - Confirms their message was received

## 🔍 How It Works

```
User fills form → Frontend validates → API call to backend
                                              ↓
                                    Validation middleware
                                              ↓
                                    Save to MongoDB
                                              ↓
                                    Send 2 emails:
                                    - Admin notification
                                    - User confirmation
                                              ↓
                                    Return success
                                              ↓
                               Show success message to user
```

## ✅ Features

- ✅ **Real-time validation** - Checks required fields before submission
- ✅ **Email verification** - Validates email format
- ✅ **Loading states** - Shows "Sending..." during submission
- ✅ **Success/Error messages** - Clear feedback with color coding
- ✅ **Auto-hide messages** - Messages disappear after 5 seconds
- ✅ **Form reset** - Clears form after successful submission
- ✅ **Database storage** - All messages saved to MongoDB
- ✅ **Dual email notifications** - Admin and user both notified
- ✅ **Rate limiting** - Prevents spam (100 requests per 15 min)
- ✅ **Security** - Input validation, CORS, Helmet headers

## 🛠️ Test the Backend Directly

```bash
cd backend
node test-contact.js
```

This will:
- Connect to MongoDB
- Create a test contact
- Query it back
- Delete it
- Confirm everything works

## 📱 Contact Form URL

**Local Development:**
```
http://localhost:3000/contact/contactUs
```

**Production:**
```
https://yourdomain.com/contact/contactUs
```

## 🐛 Troubleshooting

### "Failed to send message"
1. Check backend is running on port 5002
2. Check MongoDB connection
3. Look at backend console for errors

### "Network Error"
1. Verify NEXT_PUBLIC_API_URL in frontend/.env
2. Check CORS settings in backend
3. Ensure backend is accessible

### Emails not sending
1. Verify EMAIL_USER and EMAIL_PASS in backend/.env
2. Make sure you're using Gmail App Password (not regular password)
3. Check backend console for SMTP errors

## 📊 Admin Panel Routes

These routes require authentication:

```
GET    /api/contact              - List all messages
GET    /api/contact/:id          - View single message
POST   /api/contact/:id/respond  - Reply to message
DELETE /api/contact/:id          - Delete message
```

## 🎯 API Endpoints

**Public:**
```
POST /api/contact - Submit contact form
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "skype": "john.doe",
  "subject": "General Inquiry",
  "message": "Your message here",
  "formType": "contact"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Your message has been sent successfully!",
  "data": {
    "id": "contact_id"
  }
}
```

## 📝 Files Overview

### Frontend
- `frontend/src/components/contact/contactUs/ContactUs.js` - Contact form component

### Backend
- `backend/routes/contactRoutes.js` - API routes
- `backend/controllers/contactcontroller.js` - Business logic
- `backend/models/contact.js` - MongoDB schema
- `backend/utils/email.js` - Email service
- `backend/middleware/validateRequest.js` - Input validation

### Configuration
- `backend/.env` - Backend environment variables
- `frontend/.env` - Frontend environment variables

### Documentation
- `CONTACT_FORM_WORKFLOW.md` - Complete technical documentation
- `QUICK_START.md` - This file (quick reference)

## 💡 Tips

1. **Check logs** - Backend console shows all requests and errors
2. **Browser DevTools** - Network tab shows API calls
3. **MongoDB Compass** - View stored contacts in database
4. **Test emails** - Use your own email to test the flow

## 🎉 You're All Set!

The contact form is fully functional and production-ready. Just start the servers and test it out!

**Need Help?**
- Check `CONTACT_FORM_WORKFLOW.md` for detailed docs
- Email: beonicxgroup@gmail.com
- Phone: +91-9129842706
