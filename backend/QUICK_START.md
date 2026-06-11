# 🚀 Quick Start Guide - BeonicX Backend

## Prerequisites
- Node.js v18+ installed
- MongoDB Atlas account (or local MongoDB)
- Gmail account for email sending

---

## 🏃 Quick Start (Development)

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
# Create .env file (copy from .env.example)
cp .env.example .env
# Then edit .env with your values

# 3. Start development server
npm run dev
```

Server will start on: **http://localhost:5002**

---

## 🛠️ Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Start** | `npm start` | Start production server |
| **Dev** | `npm run dev` | Start development server with nodemon |
| **Check Port** | `npm run check-port` | Check if port 5002 is available |
| **Kill Port** | `npm run kill-port` | Kill process on port 5002 |
| **Clean Start** | `npm run clean-start` | Kill old processes and start fresh |
| **Production Check** | `node scripts/production-check.js` | Verify production readiness |

---

## 🔧 Troubleshooting

### Problem: `EADDRINUSE: address already in use`

**Solution:**
```bash
npm run kill-port
npm run dev
```

Or manually:
```bash
lsof -ti:5002 | xargs kill -9
npm run dev
```

---

### Problem: Server keeps restarting

**Solution:**
- Check `nodemon.json` is present
- Ensure log files are in `.gitignore`
- Check you're not editing files in watched directories

---

### Problem: Database connection failed

**Solution:**
1. Check `MONGODB_URI` in `.env`
2. Ensure MongoDB Atlas allows your IP
3. Verify credentials are correct

---

### Problem: Email not sending

**Solution:**
1. Check `EMAIL_USER` and `EMAIL_PASS` in `.env`
2. For Gmail: Enable "Less secure app access" or use App Password
3. Check email service is not blocking
4. Emails are logged to console - check logs

---

## 📍 API Endpoints

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "skype": "johndoe",
  "subject": "Inquiry",
  "message": "I'm interested in your services...",
  "formType": "contact"
}

Response: 201 Created
{
  "status": "success",
  "message": "Your message has been sent successfully!",
  "data": { "id": "..." }
}
```

### Query Form (No DB save)
```
POST /api/contact/query

Same payload, but doesn't save to database
Only sends emails
```

---

## 🔐 Environment Variables

Required variables in `.env`:

```bash
# Server
NODE_ENV=development
PORT=5002

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# JWT
JWT_SECRET=your-secret-key-min-32-characters
JWT_EXPIRES_IN=30d

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
ADMIN_EMAIL=admin@beonicx.com

# CORS
FRONTEND_URL=http://localhost:3000
```

---

## 📊 Monitoring

### Check Server Status
```bash
# Check if running
lsof -i :5002

# View logs (if using PM2)
pm2 logs beonicx-backend

# Check process
ps aux | grep "node server.js"
```

### Test Contact Endpoint
```bash
curl -X POST http://localhost:5002/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

---

## 🎯 Production Deployment

### Step 1: Pre-Deployment Check
```bash
node scripts/production-check.js
```

### Step 2: Update .env for Production
```bash
NODE_ENV=production
PORT=5002
MONGODB_URI=<production-mongodb-uri>
FRONTEND_URL=https://beonicx.com
```

### Step 3: Deploy with PM2 (Recommended)
```bash
# Install PM2 globally
npm install -g pm2

# Start app
pm2 start server.js --name beonicx-backend

# Save process list
pm2 save

# Setup auto-restart on reboot
pm2 startup
```

### Step 4: Verify Deployment
```bash
pm2 status
pm2 logs beonicx-backend
```

---

## 🔄 Graceful Shutdown

The server handles these signals gracefully:
- `SIGTERM` - Standard termination signal
- `SIGINT` - Ctrl+C in terminal  
- `SIGQUIT` - Quit signal

**What happens during shutdown:**
1. Stop accepting new connections
2. Close existing connections (10s timeout)
3. Close database connections
4. Exit cleanly

---

## 📚 Project Structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   └── contactcontroller.js  # Contact form logic
├── middleware/
│   ├── auth.js              # Authentication
│   ├── errorHandler.js      # Error handling
│   └── validateRequest.js   # Input validation
├── models/
│   └── contact.js           # Contact schema
├── routes/
│   └── contactRoutes.js     # API routes
├── scripts/
│   ├── check-port.js        # Port checker
│   └── production-check.js  # Pre-deployment check
├── utils/
│   └── email.js             # Email service
├── app.js                   # Express app
├── server.js                # Server startup
├── nodemon.json             # Nodemon config
├── .env                     # Environment variables
└── package.json             # Dependencies
```

---

## 💡 Tips

1. **Always use `npm run clean-start`** if you encounter port issues
2. **Check logs** - Everything is logged to console for debugging
3. **Run production check** before deploying
4. **Use PM2** in production for auto-restart and monitoring
5. **Monitor email sending** - Failures are logged but don't crash

---

## 📞 Need Help?

- Check logs: Everything is logged to console
- Run production check: `node scripts/production-check.js`
- Test endpoint: `curl http://localhost:5002/api/contact`
- Check port: `npm run check-port`

---

**Last Updated:** June 9, 2026
