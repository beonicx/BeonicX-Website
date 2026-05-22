# 🤖 AI Agent Quick Start (Google Gemini)

## 📚 Setup in 3 Steps

### 1️⃣ Get Google API Key
Your API key is already configured! But if you need to regenerate:
- Visit [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
- Click "Create API Key"
- Copy the key

### 2️⃣ Verify Configuration
```bash
# Check your backend/.env file
cat backend/.env | grep GOOGLE_API_KEY

# Should show:
# GOOGLE_API_KEY=AIzaSyB8W3EMmUdk2pHd5HjQ6_A4TjcmyD5bt2A
```

✅ Your key is already set!

### 3️⃣ Start the Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

## 🎉 That's it!

Open [http://localhost:3000](http://localhost:3000) and you'll see the AI chat widget in the bottom-right corner!

## 🧪 Test the AI Agent

Click the chat bubble and try:
- "Tell me about BeonicX's AI solutions"
- "I want to schedule a demo"
- "What industries do you serve?"
- "How much does it cost?"

## 🤖 Powered by Google Gemini 1.5 Pro

**Model Features:**
- ✅ 1M token context window
- ✅ Fast response times
- ✅ Superior reasoning capabilities
- ✅ Multi-turn conversations
- ✅ Real-time streaming

## 💰 Pricing

**Gemini 1.5 Pro Pricing (Free tier available!):**
- **Free tier**: 2 requests per minute, 1500 requests per day
- **Input**: $1.25 per 1M tokens (128k context)
- **Output**: $5 per 1M tokens

**Typical Usage:**
- Average conversation: ~$0.005 - $0.02 (much cheaper than Claude!)
- 1,000 conversations: ~$5 - $20

Monitor usage at: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

## 📁 Files Modified

```
BeonicX-Website/
├── backend/
│   ├── routes/
│   │   └── ai.js              # Updated for Gemini API
│   ├── .env                   # GOOGLE_API_KEY configured
│   └── package.json           # Using @google/generative-ai
├── frontend/
│   └── src/
│       └── components/
│           └── ai/
│               └── ChatWidget.jsx  # Updated branding
└── GEMINI_QUICKSTART.md      # This file
```

## 🎨 What's Different from Claude?

| Feature | Gemini 1.5 Pro | Claude Sonnet 4 |
|---------|----------------|-----------------|
| Context | 1M tokens | 200K tokens |
| Free tier | ✅ Yes | ❌ No |
| Cost | $1.25/$5 per 1M | $3/$15 per 1M |
| Speed | Very fast | Fast |
| Reasoning | Excellent | Excellent |

## 🐛 Troubleshooting

**Widget not showing?**
- Check browser console for errors
- Verify both servers are running
- Clear browser cache (Cmd+Shift+R)

**API errors?**
- Check backend is running on port 5001
- Verify GOOGLE_API_KEY is set in backend/.env
- Check quota at [Google AI Studio](https://aistudio.google.com/)

**"429 Too Many Requests"?**
- Free tier has rate limits (2 req/min, 1500 req/day)
- Wait a moment and try again
- Consider upgrading to paid tier for production

## 🔧 Advanced Configuration

### Change Gemini Model

Edit `backend/routes/ai.js`:
```javascript
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',  // or 'gemini-1.5-flash' for faster responses
  systemInstruction: SYSTEM_PROMPT
});
```

**Available models:**
- `gemini-1.5-pro` - Best quality (default)
- `gemini-1.5-flash` - Faster, more economical
- `gemini-1.5-pro-latest` - Latest version

### Adjust Generation Config

```javascript
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
  systemInstruction: SYSTEM_PROMPT,
  generationConfig: {
    temperature: 0.9,  // Creativity (0-1)
    topP: 1,
    topK: 1,
    maxOutputTokens: 2048,
  }
});
```

## 🚀 Ready for Production?

1. ✅ API key already configured
2. ✅ Test thoroughly in development
3. ✅ Consider upgrading to paid tier for higher rate limits
4. ✅ Deploy backend (Railway, Heroku, etc.)
5. ✅ Deploy frontend (Vercel, Netlify, etc.)
6. ✅ Monitor usage in Google AI Studio

## 📚 Resources

- [Gemini API Documentation](https://ai.google.dev/docs)
- [Google AI Studio](https://aistudio.google.com/)
- [Gemini Model Guide](https://ai.google.dev/models/gemini)
- [Pricing Details](https://ai.google.dev/pricing)

## ✨ Benefits of Gemini

- 💰 **Lower cost** than Claude
- 🎁 **Free tier** for testing
- ⚡ **Fast responses**
- 🧠 **Large context window** (1M tokens)
- 🔄 **Real-time streaming**
- 🌐 **Google infrastructure reliability**

---

**Need Help?** Check the backend console for errors or visit [Google AI Studio](https://aistudio.google.com/)

*Powered by Google Gemini 1.5 Pro* 🤖
