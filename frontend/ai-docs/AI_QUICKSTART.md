# 🤖 AI Agent Quick Start

## Setup in 3 Steps

### 1️⃣ Get Anthropic API Key
Visit [https://console.anthropic.com/](https://console.anthropic.com/) and create an API key.

### 2️⃣ Configure Environment
```bash
# Run the setup script
./setup-ai.sh

# Or manually:
# 1. Copy the example env file
cp backend/.env.example backend/.env

# 2. Edit backend/.env and add:
ANTHROPIC_API_KEY=sk-ant-your-api-key-here
```

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

## 📁 Files Created

```
BeonicX-Website/
├── backend/
│   ├── routes/
│   │   └── ai.js              # AI chat API endpoint
│   └── .env.example           # Environment template
├── frontend/
│   └── src/
│       └── components/
│           └── ai/
│               └── ChatWidget.jsx  # Chat widget UI
├── AI_INTEGRATION_GUIDE.md   # Detailed documentation
├── AI_QUICKSTART.md          # This file
└── setup-ai.sh               # Setup script
```

## 🎨 Customization

### Change AI Personality
Edit `backend/routes/ai.js` → `SYSTEM_PROMPT`

### Modify Widget Appearance
Edit `frontend/src/components/ai/ChatWidget.jsx`

### Add Quick Actions
In `ChatWidget.jsx`, update the `quickActions` array

## 🐛 Troubleshooting

**Widget not showing?**
- Check browser console for errors
- Verify ChatWidget is imported in `/frontend/src/app/home/page.js`

**API errors?**
- Check backend is running on port 5001
- Verify ANTHROPIC_API_KEY is set in backend/.env
- Check Anthropic Console for API credit balance

**CORS issues?**
- Ensure backend CORS allows http://localhost:3000
- Check `backend/app.js` CORS configuration

## 📚 Full Documentation

See [AI_INTEGRATION_GUIDE.md](./AI_INTEGRATION_GUIDE.md) for:
- API endpoint details
- Advanced customization
- Deployment guide
- Analytics setup
- Security best practices

## 💰 Pricing

Claude Sonnet 4 costs approximately:
- **Input**: $3 per million tokens (~750K words)
- **Output**: $15 per million tokens

Typical conversation: ~$0.01 - $0.05

Monitor usage at [https://console.anthropic.com/](https://console.anthropic.com/)

## 🚀 Ready for Production?

1. Get a production API key from Anthropic
2. Set environment variables on your hosting platform
3. Update FRONTEND_URL in backend/.env
4. Deploy backend (Railway, Heroku, etc.)
5. Deploy frontend (Vercel, Netlify, etc.)

---

**Need Help?** Check the full guide or contact the team!
