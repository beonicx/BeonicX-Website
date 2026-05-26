# Contact Form Workflow - Visual Diagram

## Complete Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION                            │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    User visits contact page
                    http://localhost:3000/contact/contactUs
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    FRONTEND (ContactUs.js)                          │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │  Contact Form                                             │    │
│  │  • Name         [________________]                        │    │
│  │  • Email        [________________]                        │    │
│  │  • Phone        [________________] (optional)             │    │
│  │  • Skype ID     [________________] (optional)             │    │
│  │  • Message      [________________]                        │    │
│  │                                                            │    │
│  │              [Send Message Button]                        │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                                                     │
│  Client-Side Validation:                                           │
│  ✓ Name required                                                   │
│  ✓ Email required & valid format                                   │
│  ✓ Message required                                                │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    Form validated successfully
                                  │
                                  ▼
                     API Call (POST Request)
                     http://localhost:5002/api/contact
                                  │
┌─────────────────────────────────────────────────────────────────────┐
│                     BACKEND API LAYER                               │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │ 1. Security Middleware                                    │    │
│  │    • Rate Limiting (100 req/15min)                        │    │
│  │    • Helmet Security Headers                              │    │
│  │    • CORS Protection                                      │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                  │                                  │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │ 2. Validation Middleware                                  │    │
│  │    • Name: min 2 chars, required                          │    │
│  │    • Email: valid format, required                        │    │
│  │    • Message: min 10 chars, required                      │    │
│  │    • Phone: optional                                      │    │
│  │    • Skype: optional                                      │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                  │                                  │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │ 3. Controller (submitContact)                             │    │
│  │    contactcontroller.js                                   │    │
│  └──────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    Validation passed
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
┌─────────────────────────────┐   ┌─────────────────────────────┐
│     DATABASE OPERATION      │   │     EMAIL NOTIFICATIONS     │
│                             │   │                             │
│  MongoDB Atlas              │   │  Nodemailer (Gmail SMTP)    │
│  Collection: contacts       │   │                             │
│                             │   │  1. Admin Notification      │
│  Save Contact Document:     │   │     To: beonicxgroup@       │
│  {                          │   │         gmail.com           │
│    name: "..."              │   │     Subject: "New Contact   │
│    email: "..."             │   │              Form..."       │
│    phone: "..."             │   │     Contains: All form      │
│    skype: "..."             │   │               details       │
│    subject: "..."           │   │                             │
│    message: "..."           │   │  2. User Confirmation       │
│    formType: "contact"      │   │     To: user's email        │
│    createdAt: Date          │   │     Subject: "Thank you     │
│    responded: false         │   │               for..."       │
│  }                          │   │     Contains: Confirmation  │
│                             │   │               message       │
│  ✓ Document saved           │   │                             │
│                             │   │  ✓ Both emails sent         │
└─────────────────────────────┘   └─────────────────────────────┘
                    │                           │
                    └─────────────┬─────────────┘
                                  │
                                  ▼
                    Both operations completed
                                  │
┌─────────────────────────────────────────────────────────────────────┐
│                    RESPONSE TO FRONTEND                             │
│                                                                     │
│  Status: 201 Created                                                │
│  Body:                                                              │
│  {                                                                  │
│    "status": "success",                                             │
│    "message": "Your message has been sent successfully!",           │
│    "data": {                                                        │
│      "id": "contact_id_here"                                        │
│    }                                                                │
│  }                                                                  │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  FRONTEND SUCCESS HANDLING                          │
│                                                                     │
│  • Display success message: "✅ Thanks for your message!"           │
│  • Reset form fields to empty                                       │
│  • Clear any error messages                                         │
│  • Auto-hide message after 5 seconds                                │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
                          USER SEES CONFIRMATION
```

## Error Handling Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                     ERROR SCENARIOS                                 │
└─────────────────────────────────────────────────────────────────────┘

┌───────────────────────────┐
│  Frontend Validation      │
│  Errors                   │
│                           │
│  • Name missing           │────┐
│  • Invalid email          │    │
│  • Message too short      │    │
└───────────────────────────┘    │
                                 │
                                 ▼
                    Display field-specific errors
                    (Red border + error text)
                    Don't send API request


┌───────────────────────────┐
│  Backend Validation       │
│  Errors                   │
│                           │
│  • Invalid data format    │────┐
│  • Missing required       │    │
│    fields                 │    │
└───────────────────────────┘    │
                                 │
                                 ▼
                    Return 400 Bad Request
                    {
                      "status": "fail",
                      "errors": [...]
                    }
                                 │
                                 ▼
                    Frontend displays:
                    "❌ [Error message]"
                    (Red background)


┌───────────────────────────┐
│  Database Errors          │
│                           │
│  • Connection failed      │────┐
│  • Save operation         │    │
│    failed                 │    │
└───────────────────────────┘    │
                                 │
                                 ▼
                    Return 500 Server Error
                    Log error to console
                                 │
                                 ▼
                    Frontend displays:
                    "❌ Failed to send message.
                    Please try again later."


┌───────────────────────────┐
│  Email Errors             │
│                           │
│  • SMTP connection        │────┐
│    failed                 │    │
│  • Invalid credentials    │    │
└───────────────────────────┘    │
                                 │
                                 ▼
                    Contact still saved to DB
                    Error logged (admin can
                    respond manually)
                                 │
                                 ▼
                    Return 201 Created
                    (Success - user doesn't
                    know about email issue)


┌───────────────────────────┐
│  Network Errors           │
│                           │
│  • Backend offline        │────┐
│  • Timeout               │    │
│  • CORS error            │    │
└───────────────────────────┘    │
                                 │
                                 ▼
                    JavaScript catch block
                                 │
                                 ▼
                    Frontend displays:
                    "❌ Failed to send message.
                    Please check your connection
                    and try again."
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                         DATA STRUCTURE                              │
└─────────────────────────────────────────────────────────────────────┘

Frontend Form Data:
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  skype: "john.doe",
  message: "I need help with..."
}
                    ┃
                    ▼
API Request Body:
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  skype: "john.doe",
  subject: "Contact Form Submission",  ← Added by frontend
  message: "I need help with...",
  formType: "contact"                  ← Added by frontend
}
                    ┃
                    ▼
MongoDB Document:
{
  _id: ObjectId("..."),                ← Auto-generated
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  skype: "john.doe",
  subject: "Contact Form Submission",
  message: "I need help with...",
  formType: "contact",
  createdAt: ISODate("..."),           ← Auto-generated
  responded: false,                    ← Default
  responseDate: null,                  ← Default
  responseMessage: null                ← Default
}
                    ┃
                    ▼
API Response:
{
  status: "success",
  message: "Your message has been sent successfully!",
  data: {
    id: "664f5a7c9e1b2c3d4e5f6a7b"
  }
}
```

## Admin Workflow (Future Enhancement)

```
┌─────────────────────────────────────────────────────────────────────┐
│                     ADMIN PANEL WORKFLOW                            │
└─────────────────────────────────────────────────────────────────────┘

Admin logs in
      │
      ▼
GET /api/contact
      │
      ▼
View all contact messages
(paginated, filterable)
      │
      ├─→ Filter by responded: true/false
      ├─→ Sort by date
      └─→ Search by name/email
      │
      ▼
Click on specific contact
      │
      ▼
GET /api/contact/:id
      │
      ▼
View full details:
• Name, Email, Phone, Skype
• Subject, Message
• Date submitted
• Response status
      │
      ├─→ Respond to contact ──→ POST /api/contact/:id/respond
      │                          • Type response message
      │                          • Send email to user
      │                          • Mark as responded
      │
      └─→ Delete contact ──────→ DELETE /api/contact/:id
                                 • Remove from database
```

## Environment Configuration

```
┌─────────────────────────────────────────────────────────────────────┐
│                     CONFIGURATION FLOW                              │
└─────────────────────────────────────────────────────────────────────┘

Backend .env:
┌──────────────────────────────────────┐
│ PORT=5002                            │
│ MONGODB_URI=mongodb+srv://...        │
│ EMAIL_HOST=smtp.gmail.com            │
│ EMAIL_PORT=587                       │
│ EMAIL_USER=thisisnitishyadav@...     │
│ EMAIL_PASS=vosbizzusbwdgtnt          │
│ EMAIL_FROM=beonicxgroup@gmail.com    │
│ ADMIN_EMAIL=beonicxgroup@gmail.com   │
└──────────────────────────────────────┘
           │
           ▼
Backend loads config on startup
           │
           ├─→ Connect to MongoDB
           ├─→ Configure email transport
           ├─→ Start server on port 5002
           └─→ Apply security middleware


Frontend .env:
┌──────────────────────────────────────┐
│ NEXT_PUBLIC_API_URL=                 │
│   http://localhost:5002/api          │
└──────────────────────────────────────┘
           │
           ▼
Frontend uses at build time
           │
           └─→ All API calls use this URL
```

## Security Layers

```
┌─────────────────────────────────────────────────────────────────────┐
│                     SECURITY MEASURES                               │
└─────────────────────────────────────────────────────────────────────┘

Request from user
      │
      ▼
┌─────────────────────────┐
│ 1. Rate Limiting        │  Max 100 requests per 15 minutes
└─────────────────────────┘  Prevents spam and DoS
      │
      ▼
┌─────────────────────────┐
│ 2. Helmet Security      │  Sets security HTTP headers
└─────────────────────────┘  Protects against XSS, etc.
      │
      ▼
┌─────────────────────────┐
│ 3. CORS Protection      │  Only allows configured origins
└─────────────────────────┘  Prevents unauthorized access
      │
      ▼
┌─────────────────────────┐
│ 4. Body Size Limit      │  Max 10kb request body
└─────────────────────────┘  Prevents large payload attacks
      │
      ▼
┌─────────────────────────┐
│ 5. Input Validation     │  Validates and sanitizes
└─────────────────────────┘  all input fields
      │
      ▼
┌─────────────────────────┐
│ 6. Email Validation     │  Checks email format
└─────────────────────────┘  Prevents invalid addresses
      │
      ▼
Request processed safely
```

---

## Quick Reference

**Start Development:**
```bash
./start-dev.sh
```

**Frontend URL:**
```
http://localhost:3000/contact/contactUs
```

**Backend API:**
```
http://localhost:5002/api/contact
```

**Emails Sent To:**
- Admin: beonicxgroup@gmail.com
- User: (their submitted email)

**Database:**
- MongoDB Atlas
- Collection: contacts
