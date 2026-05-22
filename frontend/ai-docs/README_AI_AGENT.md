# 🤖 BeonicX AI Agent - Complete Documentation

## 📚 Table of Contents
1. [Quick Start](#-quick-start)
2. [Features](#-features)
3. [Architecture](#-architecture)
4. [Setup Guide](#-setup-guide)
5. [Customization](#-customization)
6. [API Reference](#-api-reference)
7. [Troubleshooting](#-troubleshooting)
8. [Deployment](#-deployment)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Anthropic API key

### 3-Step Setup

```bash
# 1. Get API Key from https://console.anthropic.com/

# 2. Setup environment
./setup-ai.sh
# OR manually:
# cp backend/.env.example backend/.env
# Edit backend/.env and add your ANTHROPIC_API_KEY

# 3. Run the servers
# Terminal 1:
cd backend && npm run dev

# Terminal 2:
cd frontend && npm run dev
```

**Open http://localhost:3000** and look for the chat bubble! 🎉

---

## ✨ Features

### 🎯 Core Capabilities
- ✅ **Real-time streaming** responses using Claude Sonnet 4
- ✅ **Multi-purpose agent**: Sales, Support, General Q&A
- ✅ **Smart context awareness** about BeonicX services
- ✅ **Lead qualification** and demo scheduling
- ✅ **Technical support** guidance

### 🎨 User Interface
- ✅ **Modern chat widget** (floating, bottom-right)
- ✅ **Dark/light mode** support (auto-sync with site theme)
- ✅ **Quick action buttons** for common queries
- ✅ **Smooth animations** and transitions
- ✅ **Fully responsive** (mobile & desktop)
- ✅ **Real-time typing indicators**

### 🔒 Security & Performance
- ✅ **Secure API key storage** (environment variables)
- ✅ **Rate limiting** (100 req/15min per IP)
- ✅ **CORS protection**
- ✅ **Input validation**
- ✅ **Error handling** with graceful fallbacks
- ✅ **Optimized streaming** for fast responses

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     USER INTERFACE                       │
│  ┌───────────────────────────────────────────────────┐ │
│  │         ChatWidget.jsx (React Component)          │ │
│  │  • UI rendering                                    │ │
│  │  • State management                                │ │
│  │  • SSE stream handling                             │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                           │
                           │ HTTP POST /api/ai/chat
                           │ (messages, stream: true)
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    BACKEND API                          │
│  ┌───────────────────────────────────────────────────┐ │
│  │          Express.js (backend/routes/ai.js)        │ │
│  │  • Request validation                              │ │
│  │  • Rate limiting                                   │ │
│  │  • Message formatting                              │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                           │
                           │ Anthropic SDK
                           │ (streaming enabled)
                           ▼
┌─────────────────────────────────────────────────────────┐
│               ANTHROPIC API (Claude)                    │
│  ┌───────────────────────────────────────────────────┐ │
│  │            Claude Sonnet 4 Model                  │ │
│  │  • Natural language understanding                  │ │
│  │  • Context-aware responses                         │ │
│  │  • Real-time streaming                             │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                           │
                           │ SSE stream
                           │ (text chunks)
                           ▼
                    [Back to User]
```

### File Structure
```
BeonicX-Website/
├── backend/
│   ├── routes/
│   │   └── ai.js                    # AI API endpoint
│   ├── app.js                       # Express app (modified)
│   ├── .env                         # Environment variables
│   └── package.json                 # Dependencies
│
├── frontend/
│   └── src/
│       ├── components/
│       │   └── ai/
│       │       └── ChatWidget.jsx   # Chat UI component
│       └── app/
│           └── home/
│               └── page.js          # Integrated widget
│
└── Documentation/
    ├── AI_QUICKSTART.md            # Quick setup (START HERE!)
    ├── AI_INTEGRATION_GUIDE.md     # Detailed guide
    ├── IMPLEMENTATION_SUMMARY.md   # What was built
    ├── VISUAL_GUIDE.md            # UI/UX reference
    └── README_AI_AGENT.md         # This file
```

---

## 🛠️ Setup Guide

### 1. Get Anthropic API Key

1. Visit [https://console.anthropic.com/](https://console.anthropic.com/)
2. Create an account or log in
3. Navigate to **API Keys** section
4. Click **Create Key**
5. Copy the key (format: `sk-ant-...`)
6. Store it securely

### 2. Configure Backend

```bash
# Navigate to backend
cd backend

# Create .env from template
cp .env.example .env

# Edit .env file
nano .env  # or use your preferred editor
```

Add your API key:
```env
ANTHROPIC_API_KEY=sk-ant-your-actual-api-key-here
```

### 3. Install Dependencies

```bash
# Backend
cd backend
npm install

# Verify Anthropic SDK is installed
npm list @anthropic-ai/sdk

# Frontend
cd ../frontend
npm install
```

### 4. Start Development Servers

```bash
# Terminal 1 - Backend (port 5001)
cd backend
npm run dev

# Terminal 2 - Frontend (port 3000)
cd frontend
npm run dev
```

### 5. Test the Integration

```bash
# Run the test script
./test-ai.sh

# Or manually test:
# 1. Open http://localhost:3000
# 2. Look for chat bubble in bottom-right
# 3. Click to open chat
# 4. Send a test message
```

---

## 🎨 Customization

### Change AI Personality

Edit `backend/routes/ai.js`:

```javascript
const SYSTEM_PROMPT = `You are BeonicX's AI assistant...
// Modify this to change:
// - Tone (formal/casual)
// - Knowledge areas
// - Response style
// - Behavior rules
`;
```

### Modify Widget Appearance

Edit `frontend/src/components/ai/ChatWidget.jsx`:

**Colors:**
```jsx
// Change gradient
bg-gradient-to-br from-blue-600 to-purple-600
// To your brand colors:
bg-gradient-to-br from-[#YOUR-COLOR] to-[#YOUR-COLOR]
```

**Position:**
```jsx
// Bottom-right (default)
className="fixed bottom-6 right-6"

// Bottom-left
className="fixed bottom-6 left-6"

// Top-right
className="fixed top-20 right-6"
```

**Size:**
```jsx
// Default: w-96 h-[600px]
// Larger:
className="w-[480px] h-[700px]"
// Smaller:
className="w-80 h-[500px]"
```

### Update Quick Actions

```jsx
const quickActions = [
  { label: 'Your Custom Action', icon: '🎯' },
  { label: 'Another Action', icon: '📊' },
  { label: 'Third Action', icon: '🚀' },
  { label: 'Fourth Action', icon: '💡' },
];
```

### Change Welcome Message

```jsx
const [messages, setMessages] = useState([
  {
    role: 'assistant',
    content: "Your custom welcome message here!"
  }
]);
```

---

## 📡 API Reference

### POST `/api/ai/chat`

Send messages to the AI agent.

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "Tell me about BeonicX" }
  ],
  "stream": true
}
```

**Response (Streaming):**
```
data: {"type":"text","content":"Great"}
data: {"type":"text","content":" question"}
data: {"type":"text","content":"! BeonicX"}
data: {"type":"done"}
```

**Response (Non-streaming):**
```json
{
  "content": "Great question! BeonicX specializes in...",
  "id": "msg_..."
}
```

**Error Response:**
```json
{
  "error": "Failed to process AI request",
  "details": "Error message"
}
```

### GET `/api/ai/health`

Check API health status.

**Response:**
```json
{
  "status": "ok",
  "service": "BeonicX AI Agent"
}
```

---

## 🐛 Troubleshooting

### Widget Not Appearing

**Symptoms:**
- No chat bubble visible
- Console errors about missing component

**Solutions:**
1. ✅ Check ChatWidget is imported in `page.js`
2. ✅ Verify path: `import ChatWidget from '../../components/ai/ChatWidget'`
3. ✅ Check component is rendered: `<ChatWidget darkMode={darkMode} />`
4. ✅ Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
5. ✅ Check browser console for errors

### "Failed to get response from AI"

**Symptoms:**
- Error message in chat
- Backend shows API errors

**Solutions:**
1. ✅ Verify backend is running: `curl http://localhost:5001/api/ai/health`
2. ✅ Check API key is set: `grep ANTHROPIC_API_KEY backend/.env`
3. ✅ Verify API key format: Should start with `sk-ant-`
4. ✅ Check API credits: Visit [Anthropic Console](https://console.anthropic.com/)
5. ✅ Review backend logs for errors

### CORS Errors

**Symptoms:**
- "CORS policy" errors in browser console
- Requests blocked

**Solutions:**
1. ✅ Check backend CORS config in `app.js`
2. ✅ Verify frontend URL is allowed
3. ✅ Ensure both servers are running
4. ✅ Check ports: backend (5001), frontend (3000)

### Slow Responses

**Symptoms:**
- Long delay before AI responds
- Streaming seems slow

**Solutions:**
1. ✅ Check internet connection speed
2. ✅ Verify streaming is enabled: `stream: true`
3. ✅ Monitor Anthropic API status
4. ✅ Check backend console for delays
5. ✅ Consider reducing max_tokens

### Messages Not Streaming

**Symptoms:**
- Entire response appears at once
- No word-by-word animation

**Solutions:**
1. ✅ Verify `stream: true` in fetch request
2. ✅ Check SSE handling in ChatWidget
3. ✅ Ensure no proxy is buffering responses
4. ✅ Check browser supports Server-Sent Events

---

## 🚀 Deployment

### Production Checklist

- [ ] Get production Anthropic API key
- [ ] Set all environment variables
- [ ] Enable HTTPS
- [ ] Configure CORS for production domain
- [ ] Set up error monitoring
- [ ] Enable API usage tracking
- [ ] Test on multiple devices
- [ ] Set up backup/fallback
- [ ] Configure rate limiting
- [ ] Review security settings

### Environment Variables

**Backend (.env):**
```env
NODE_ENV=production
PORT=5001
ANTHROPIC_API_KEY=sk-ant-production-key
FRONTEND_URL=https://yourdomain.com
MONGODB_URI=your_production_db
JWT_SECRET=your_production_secret
```

**Frontend:**
```javascript
// Update API endpoint in ChatWidget.jsx
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
```

### Deploy Backend (Railway)

```bash
# 1. Install Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Initialize project
railway init

# 4. Set environment variables in Railway dashboard
# 5. Deploy
railway up
```

### Deploy Frontend (Vercel)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
cd frontend
vercel --prod

# 4. Set environment variables in Vercel dashboard
```

### Post-Deployment

1. ✅ Test chat widget on production
2. ✅ Monitor error logs
3. ✅ Check API usage in Anthropic Console
4. ✅ Set up alerts for errors
5. ✅ Monitor response times

---

## 💰 Cost Management

### Claude Sonnet 4 Pricing

| Type | Price | Notes |
|------|-------|-------|
| Input | $3 / 1M tokens | ~750K words |
| Output | $15 / 1M tokens | ~750K words |

### Typical Costs

| Usage | Conversations | Est. Cost |
|-------|--------------|-----------|
| Low | 100/month | $5-10 |
| Medium | 1,000/month | $50-100 |
| High | 10,000/month | $500-1000 |

### Cost Optimization

1. **Enable Prompt Caching**
   ```javascript
   // System prompt is automatically cached
   // Reduces repeated prompt costs by 90%
   ```

2. **Set Token Limits**
   ```javascript
   max_tokens: 2048  // Adjust based on needs
   ```

3. **Monitor Usage**
   - Check [Anthropic Console](https://console.anthropic.com/) daily
   - Set up billing alerts
   - Review popular queries

4. **Optimize Responses**
   - Keep responses concise
   - Avoid unnecessary context
   - Use efficient prompts

---

## 📊 Analytics & Monitoring

### Track Conversations

Add logging to `backend/routes/ai.js`:

```javascript
// After successful message
const conversationLog = {
  timestamp: new Date(),
  userMessage: userMessage,
  responseLength: assistantMessage.length,
  duration: Date.now() - startTime
};
console.log('Conversation:', conversationLog);
```

### Store History (Optional)

Create MongoDB model:

```javascript
const conversationSchema = new mongoose.Schema({
  sessionId: String,
  messages: [{ 
    role: String, 
    content: String, 
    timestamp: Date 
  }],
  userInfo: {
    email: String,
    name: String
  },
  metadata: {
    duration: Number,
    tokenCount: Number
  },
  createdAt: { type: Date, default: Date.now }
});
```

### Key Metrics

Track these KPIs:
- 📈 **Conversations per day**
- ⏱️ **Average response time**
- 💬 **Messages per conversation**
- 🎯 **Lead conversion rate**
- ⭐ **User satisfaction**
- 💰 **API cost per conversation**

---

## 🔐 Security Best Practices

### ✅ Implemented

- API key in environment variables
- CORS protection
- Rate limiting (100 req/15min)
- Input validation
- Helmet.js security headers
- Error handling (no sensitive data leaked)

### 🎯 Recommended Additions

1. **User Authentication**
   ```javascript
   // Add JWT verification
   router.post('/chat', authenticate, async (req, res) => {
     const userId = req.user.id;
     // Track user-specific conversations
   });
   ```

2. **Message Filtering**
   ```javascript
   // Filter inappropriate content
   const hasProfanity = checkProfanity(message);
   if (hasProfanity) {
     return res.status(400).json({error: 'Inappropriate content'});
   }
   ```

3. **Conversation Limits**
   ```javascript
   // Limit messages per session
   if (messages.length > 50) {
     return res.status(429).json({error: 'Conversation limit reached'});
   }
   ```

4. **IP Blocking**
   ```javascript
   // Block suspicious IPs
   const blockedIPs = ['1.2.3.4'];
   if (blockedIPs.includes(req.ip)) {
     return res.status(403).json({error: 'Access denied'});
   }
   ```

---

## 📚 Additional Resources

### Documentation
- [Anthropic API Docs](https://docs.anthropic.com/)
- [Claude Model Guide](https://docs.anthropic.com/claude/docs/models-overview)
- [Prompt Engineering](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Streaming Guide](https://docs.anthropic.com/claude/docs/streaming)

### Tools
- [Anthropic Console](https://console.anthropic.com/)
- [API Status Page](https://status.anthropic.com/)
- [Anthropic Community](https://community.anthropic.com/)

### Our Guides
- **Quick Start**: `AI_QUICKSTART.md` ← Begin here!
- **Integration**: `AI_INTEGRATION_GUIDE.md`
- **Summary**: `IMPLEMENTATION_SUMMARY.md`
- **Visual**: `VISUAL_GUIDE.md`
- **This File**: `README_AI_AGENT.md`

---

## 🎉 Success!

You now have a production-ready AI agent powered by Claude! 

### Next Steps

1. ✅ Test thoroughly in development
2. ✅ Customize to match your brand
3. ✅ Deploy to production
4. ✅ Monitor usage and costs
5. ✅ Gather user feedback
6. ✅ Iterate and improve

### Need Help?

- Check the troubleshooting section
- Review the documentation
- Test with `./test-ai.sh`
- Check backend logs
- Verify API key and credits

---

**Built with ❤️ using Claude Sonnet 4**

*Last updated: May 2026*
