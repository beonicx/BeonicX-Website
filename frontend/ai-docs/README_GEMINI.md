# 🤖 BeonicX AI Agent - Powered by Google Gemini

## ✨ Overview

Your website now features a fully functional AI chat agent powered by **Google Gemini 1.5 Pro** - Google's most advanced AI model with a massive 1M token context window.

---

## 🚀 Quick Start

### Prerequisites Met ✅
- ✅ Node.js installed
- ✅ Dependencies installed
- ✅ API key configured
- ✅ Code updated

### Start in 2 Commands

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

**Open:** http://localhost:3000

---

## 🎯 Key Features

### AI Capabilities
- ✅ **Real-time streaming** responses
- ✅ **Multi-turn conversations** with context
- ✅ **Sales & lead generation** assistance
- ✅ **Technical support** guidance
- ✅ **General Q&A** about services
- ✅ **1M token context** window (5x Claude)

### User Interface
- ✅ **Floating chat widget** (bottom-right)
- ✅ **Dark/light mode** auto-sync
- ✅ **Quick action buttons**
- ✅ **Mobile responsive**
- ✅ **Smooth animations**
- ✅ **Professional design**

### Technical
- ✅ **Google Gemini 1.5 Pro** model
- ✅ **@google/generative-ai** SDK
- ✅ **Server-Sent Events** streaming
- ✅ **Rate limiting** protection
- ✅ **Error handling**
- ✅ **Secure API key storage**

---

## 💰 Pricing & Cost

### Google Gemini 1.5 Pro

**Free Tier (Perfect for Development!):**
- 2 requests per minute
- 1,500 requests per day
- No credit card required

**Paid Tier:**
- Input: $1.25 per 1M tokens
- Output: $5.00 per 1M tokens

### Cost Examples

| Usage | Conversations | Estimated Cost |
|-------|--------------|----------------|
| Development | 100/month | **FREE** |
| Small business | 1,000/month | $5-20 |
| Medium business | 10,000/month | $50-200 |
| Enterprise | 100,000/month | $500-2000 |

**Monitor usage:** https://aistudio.google.com/app/apikey

---

## 🎨 How It Works

### User Flow

```
1. User visits website
   ↓
2. Sees pulsing chat bubble (bottom-right)
   ↓
3. Clicks bubble → Chat window opens
   ↓
4. Types message or clicks quick action
   ↓
5. Message sent to backend API
   ↓
6. Backend calls Gemini API
   ↓
7. Response streams back in real-time
   ↓
8. User sees response appear word-by-word
   ↓
9. Conversation continues with full context
```

### Architecture

```
Frontend (ChatWidget.jsx)
    ↓ HTTP POST
Backend (routes/ai.js)
    ↓ Gemini SDK
Google Gemini API
    ↓ SSE Stream
Backend
    ↓ SSE Stream
Frontend
    ↓ Display
User sees response
```

---

## 📁 File Structure

```
BeonicX-Website/
├── backend/
│   ├── routes/
│   │   └── ai.js              # Gemini API integration ✨
│   ├── app.js                 # Routes configured
│   ├── .env                   # GOOGLE_API_KEY set ✅
│   ├── .env.example           # Template
│   └── package.json           # @google/generative-ai installed
│
├── frontend/
│   └── src/
│       ├── components/
│       │   └── ai/
│       │       └── ChatWidget.jsx  # Chat UI ✨
│       └── app/
│           └── home/
│               └── page.js         # Widget integrated
│
└── Documentation/
    ├── GEMINI_QUICKSTART.md    # Quick start guide
    ├── GEMINI_MIGRATION.md     # Migration details
    ├── AI_INTEGRATION_GUIDE.md # Still relevant
    └── README_GEMINI.md        # This file
```

---

## 🛠️ Configuration

### Current Setup

**Model:** Gemini 1.5 Pro
**API Key:** Configured in `.env`
**Streaming:** Enabled
**Context Window:** 1M tokens

### API Configuration (backend/routes/ai.js)

```javascript
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
  systemInstruction: SYSTEM_PROMPT
});
```

### Alternative: Use Gemini Flash (Faster & Cheaper)

```javascript
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',  // 2x faster, 70% cheaper
  systemInstruction: SYSTEM_PROMPT
});
```

### Advanced Configuration

```javascript
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
  systemInstruction: SYSTEM_PROMPT,
  generationConfig: {
    temperature: 0.9,      // Creativity (0-1)
    topP: 1,               // Nucleus sampling
    topK: 1,               // Top-k sampling
    maxOutputTokens: 2048, // Max response length
  }
});
```

---

## 🎨 Customization

### Change AI Personality

Edit `backend/routes/ai.js` → `SYSTEM_PROMPT`:

```javascript
const SYSTEM_PROMPT = `You are [Your Custom Personality]...`;
```

### Modify Widget Appearance

Edit `frontend/src/components/ai/ChatWidget.jsx`:

**Colors:**
```jsx
// Change gradient colors
bg-gradient-to-br from-blue-600 to-purple-600
```

**Position:**
```jsx
// Move to bottom-left
className="fixed bottom-6 left-6"
```

**Size:**
```jsx
// Make larger
className="w-[480px] h-[700px]"
```

### Update Quick Actions

```jsx
const quickActions = [
  { label: 'Your Action', icon: '🎯' },
  { label: 'Another Action', icon: '📊' },
];
```

---

## 🧪 Testing

### Manual Testing

1. **Start servers** (both terminals)
2. **Open** http://localhost:3000
3. **Click** chat bubble (bottom-right)
4. **Test** these queries:
   - "Tell me about BeonicX's AI solutions"
   - "I want to schedule a demo"
   - "What pricing plans do you offer?"
   - "How can AI agents help my business?"

### Test Scenarios

- [ ] Simple question
- [ ] Multi-turn conversation
- [ ] Quick action buttons
- [ ] Dark/light mode toggle
- [ ] Mobile view
- [ ] Error handling (invalid input)
- [ ] Streaming works smoothly
- [ ] Context maintained across messages

### Check Health Endpoint

```bash
curl http://localhost:5001/api/ai/health
```

Expected response:
```json
{"status":"ok","service":"BeonicX AI Agent"}
```

---

## 🐛 Troubleshooting

### Chat Widget Not Showing

**Check:**
1. Frontend is running on port 3000
2. ChatWidget imported in `page.js`
3. Browser console for errors
4. Clear cache (Cmd+Shift+R / Ctrl+Shift+R)

### "Failed to get response from AI"

**Check:**
1. Backend running on port 5001
2. `GOOGLE_API_KEY` set in `.env`
3. API key is valid (regenerate if needed)
4. Backend console for error details

### Rate Limit (429) Error

**Free Tier Limits:**
- 2 requests per minute
- 1,500 requests per day

**Solutions:**
1. Wait a moment between requests
2. Check quota at Google AI Studio
3. Upgrade to paid tier for production

### Streaming Not Working

**Check:**
1. `stream: true` in request
2. Browser supports Server-Sent Events
3. No proxy buffering responses
4. Backend console for errors

### CORS Errors

**Check:**
1. Backend CORS config in `app.js`
2. Frontend URL allowed
3. Both servers running
4. Ports correct (3000/5001)

---

## 📊 Monitoring

### Google AI Studio Dashboard

Visit: https://aistudio.google.com/app/apikey

**Monitor:**
- API key status
- Request count
- Rate limits
- Token usage
- Error rates

### Backend Logging

Add to `backend/routes/ai.js`:

```javascript
// After successful message
console.log({
  timestamp: new Date(),
  tokensUsed: result.usageMetadata,
  responseTime: Date.now() - startTime
});
```

### Key Metrics to Track

- 📈 Conversations per day
- ⏱️ Average response time
- 💬 Messages per conversation
- 🎯 Lead conversion rate
- 💰 API cost per conversation
- ⭐ User satisfaction

---

## 🚀 Production Deployment

### Pre-Deployment Checklist

- [ ] Test thoroughly in development
- [ ] Upgrade to paid tier (if needed)
- [ ] Set production environment variables
- [ ] Configure error monitoring
- [ ] Test on multiple devices
- [ ] Set up rate limiting
- [ ] Review security settings
- [ ] Prepare rollback plan

### Environment Variables

**Production `.env`:**
```env
NODE_ENV=production
PORT=5001
GOOGLE_API_KEY=your_production_api_key
FRONTEND_URL=https://yourdomain.com
```

### Deploy Backend

**Railway:**
```bash
railway login
railway init
railway up
# Set GOOGLE_API_KEY in Railway dashboard
```

**Heroku:**
```bash
heroku create your-app-name
heroku config:set GOOGLE_API_KEY=your_key
git push heroku main
```

### Deploy Frontend

**Vercel:**
```bash
vercel login
cd frontend
vercel --prod
# Set NEXT_PUBLIC_API_URL in Vercel dashboard
```

### Post-Deployment

1. ✅ Test chat widget works
2. ✅ Monitor error logs
3. ✅ Check API usage
4. ✅ Set up alerts
5. ✅ Monitor response times

---

## 🔒 Security

### Implemented

- ✅ API key in environment variables
- ✅ CORS protection
- ✅ Rate limiting (100 req/15min)
- ✅ Input validation
- ✅ Error handling
- ✅ Helmet.js security headers

### Recommended Additions

**1. User Authentication**
```javascript
router.post('/chat', authenticate, async (req, res) => {
  const userId = req.user.id;
  // Track per user
});
```

**2. Conversation Limits**
```javascript
if (messages.length > 50) {
  return res.status(429).json({
    error: 'Conversation limit reached'
  });
}
```

**3. Content Filtering**
```javascript
const containsInappropriate = checkContent(message);
if (containsInappropriate) {
  return res.status(400).json({
    error: 'Inappropriate content'
  });
}
```

---

## 💡 Tips & Best Practices

### Cost Optimization

1. **Use free tier** for development
2. **Monitor usage** regularly
3. **Set token limits** appropriately
4. **Consider Gemini Flash** for high-volume
5. **Implement caching** for common queries

### Performance

1. **Enable streaming** for better UX
2. **Optimize prompts** for shorter responses
3. **Use conversation history** efficiently
4. **Monitor response times**

### User Experience

1. **Keep responses concise**
2. **Provide clear error messages**
3. **Show loading indicators**
4. **Test on mobile devices**
5. **Gather user feedback**

---

## 📚 Resources

### Google Gemini

- [API Documentation](https://ai.google.dev/docs)
- [Model Guide](https://ai.google.dev/models/gemini)
- [Pricing Details](https://ai.google.dev/pricing)
- [Google AI Studio](https://aistudio.google.com/)

### SDKs

- [Node.js SDK](https://github.com/google/generative-ai-js)
- [Python SDK](https://github.com/google/generative-ai-python)

### Community

- [Google AI Community](https://developers.googleblog.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/gemini-api)

---

## 🎉 What Makes This Special

### 1. Cost-Effective
- 60% cheaper than Claude
- Free tier available
- Transparent pricing

### 2. Powerful
- 1M token context window
- Advanced reasoning
- Multi-turn conversations

### 3. Fast
- Real-time streaming
- Low latency
- Google infrastructure

### 4. Easy to Use
- Simple API
- Great documentation
- Active community

### 5. Production-Ready
- Rate limiting
- Error handling
- Security features

---

## 🆘 Support

### Getting Help

1. Check this documentation
2. Review backend console logs
3. Test with health endpoint
4. Visit Google AI Studio
5. Check API key validity

### Common Issues

| Issue | Solution |
|-------|----------|
| Rate limit | Wait or upgrade tier |
| API error | Check key & backend logs |
| No response | Verify servers running |
| CORS error | Check backend config |

---

## ✨ Summary

**Status:** ✅ Ready to use  
**Model:** Google Gemini 1.5 Pro  
**API Key:** Configured  
**Cost:** ~60% less than Claude  
**Free Tier:** Available  
**Context:** 1M tokens  

**Next Step:** Start the servers and test!

```bash
cd backend && npm run dev
cd frontend && npm run dev
# Open: http://localhost:3000
```

Your AI agent is ready to engage visitors 24/7! 🚀

---

*Last updated: May 2026*  
*Powered by Google Gemini 1.5 Pro*
