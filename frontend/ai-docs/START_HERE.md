# 🚀 START HERE - BeonicX AI Agent

## Welcome! 👋

Your website now has a Claude-powered AI agent integrated. This guide will get you up and running in minutes.

---

## ✅ What's Already Done

✓ Backend API endpoint created  
✓ Frontend chat widget built  
✓ Dependencies installed  
✓ Documentation written  
✓ Test scripts ready  

**You just need to add your API key and start the servers!**

---

## 🎯 3 Steps to Launch

### Step 1: Get Your API Key (2 minutes)

1. Visit: **https://console.anthropic.com/**
2. Sign up or log in
3. Click "API Keys" → "Create Key"
4. Copy the key (starts with `sk-ant-`)

### Step 2: Add API Key (1 minute)

```bash
# Edit the .env file
nano backend/.env

# Change this line:
ANTHROPIC_API_KEY=your_anthropic_api_key_here

# To your actual key:
ANTHROPIC_API_KEY=sk-ant-your-actual-key-here

# Save and exit (Ctrl+X, then Y, then Enter)
```

### Step 3: Start the Servers (1 minute)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Open:** http://localhost:3000

---

## 🎉 Test It!

1. Look for a **floating chat bubble** in the bottom-right corner
2. Click it to open the chat
3. Try these questions:
   - "Tell me about BeonicX's AI solutions"
   - "I'd like to schedule a demo"
   - "What pricing plans do you offer?"

---

## 📚 Documentation Guide

| Document | When to Read |
|----------|-------------|
| **START_HERE.md** | You are here! Quick setup |
| **AI_QUICKSTART.md** | Next → Setup details |
| **AI_INTEGRATION_GUIDE.md** | For customization & deployment |
| **VISUAL_GUIDE.md** | To understand the UI |
| **README_AI_AGENT.md** | Complete reference |
| **IMPLEMENTATION_SUMMARY.md** | What was built |

---

## 🔧 Quick Commands

```bash
# Test the integration
./test-ai.sh

# Run setup script (if needed)
./setup-ai.sh

# Check backend health
curl http://localhost:5001/api/ai/health

# View backend logs
cd backend && npm run dev

# View frontend logs
cd frontend && npm run dev
```

---

## 🐛 Having Issues?

### Chat bubble not showing?
→ Check `./test-ai.sh` output  
→ Verify frontend is running on port 3000  
→ Clear browser cache (Cmd+Shift+R)

### "Failed to get response from AI"?
→ Check API key is set in `backend/.env`  
→ Verify backend is running on port 5001  
→ Confirm you have API credits at console.anthropic.com

### CORS errors?
→ Ensure both servers are running  
→ Frontend: http://localhost:3000  
→ Backend: http://localhost:5001

**More help:** See `README_AI_AGENT.md` → Troubleshooting section

---

## 💰 What It Costs

- **Per conversation:** ~$0.01 - $0.05
- **1,000 conversations:** ~$10 - $50
- **Free tier:** Available for testing

Monitor usage at: https://console.anthropic.com/

---

## 🎨 Customize It

Want to change colors, position, or behavior?

1. **AI personality:** Edit `backend/routes/ai.js` → `SYSTEM_PROMPT`
2. **Widget look:** Edit `frontend/src/components/ai/ChatWidget.jsx`
3. **Quick actions:** Change `quickActions` array in ChatWidget

**Full customization guide:** See `AI_INTEGRATION_GUIDE.md`

---

## 📂 File Overview

```
Your Project/
├── backend/
│   ├── routes/ai.js          ← AI API endpoint
│   ├── app.js                ← Added AI routes
│   └── .env                  ← Add API key here!
│
├── frontend/
│   └── src/
│       ├── components/ai/
│       │   └── ChatWidget.jsx ← Chat UI
│       └── app/home/
│           └── page.js        ← Widget integrated
│
└── Documentation/
    ├── START_HERE.md         ← You are here
    ├── AI_QUICKSTART.md
    ├── AI_INTEGRATION_GUIDE.md
    └── README_AI_AGENT.md
```

---

## ✨ What the AI Can Do

Your agent is pre-configured to handle:

✓ **Sales & Lead Generation**
  - Answer pricing questions
  - Schedule demos
  - Qualify leads
  - Provide service info

✓ **Technical Support**
  - Guide through features
  - Troubleshoot issues
  - Answer technical questions

✓ **General Assistance**
  - Company information
  - Industry insights
  - Use cases

---

## 🚀 Ready for Production?

Once tested locally:

1. Get production API key from Anthropic
2. Deploy backend (Railway, Heroku, etc.)
3. Deploy frontend (Vercel, Netlify, etc.)
4. Update environment variables
5. Test on production

**Deployment guide:** See `AI_INTEGRATION_GUIDE.md` → Deployment section

---

## 🎯 Next Steps

1. ✅ Add your API key to `backend/.env`
2. ✅ Start both servers
3. ✅ Test the chat widget
4. ✅ Read `AI_QUICKSTART.md` for more details
5. ✅ Customize to match your brand
6. ✅ Deploy to production!

---

## 📞 Need Help?

- Run `./test-ai.sh` for diagnostics
- Check `README_AI_AGENT.md` → Troubleshooting
- Review backend console logs
- Verify API key at console.anthropic.com

---

## 🎉 You're All Set!

Your AI agent is ready to engage visitors 24/7!

**Quick start:** Add API key → Start servers → Test at http://localhost:3000

**Questions?** Check the documentation files listed above.

---

*Built with Claude Sonnet 4 • May 2026*
