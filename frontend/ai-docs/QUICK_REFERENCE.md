# 🚀 Quick Reference Card

## 📍 You Are Here
```
frontend/ai-docs/
```

---

## ⚡ Quick Commands

### Test Integration
```bash
./test-ai.sh
```

### Setup AI Agent
```bash
./setup-ai.sh
```

### Start Backend
```bash
cd ../../backend && npm run dev
```

### Start Frontend
```bash
cd ../../frontend && npm run dev
```

### Open App
```
http://localhost:3000
```

---

## 📚 Documentation Quick Links

| Need | Read This |
|------|-----------|
| **Getting Started** | [START_HERE.md](START_HERE.md) |
| **Gemini Setup** | [GEMINI_QUICKSTART.md](GEMINI_QUICKSTART.md) |
| **Full Guide** | [README_GEMINI.md](README_GEMINI.md) |
| **UI Reference** | [VISUAL_GUIDE.md](VISUAL_GUIDE.md) |
| **Migration Info** | [GEMINI_MIGRATION.md](GEMINI_MIGRATION.md) |
| **Overview** | [README.md](README.md) |

---

## 🔑 Key Information

### API Key Location
```
../../backend/.env
GOOGLE_API_KEY=AIzaSyB8W3EMmUdk2pHd5HjQ6_A4TjcmyD5bt2A
```

### Get New Key
https://aistudio.google.com/app/apikey

### Model Used
```
Google Gemini 1.5 Pro
```

### Monitor Usage
https://aistudio.google.com/app/apikey

---

## 📁 File Locations

### Backend API
```
../../backend/routes/ai.js
```

### Frontend Widget
```
../src/components/ai/ChatWidget.jsx
```

### Integration Point
```
../src/app/home/page.js
```

---

## 🎯 Quick Customization

### Change AI Personality
Edit: `../../backend/routes/ai.js`  
Line: 8-27 (SYSTEM_PROMPT)

### Modify Widget Colors
Edit: `../src/components/ai/ChatWidget.jsx`  
Search for: `bg-gradient-to-br from-blue-600 to-purple-600`

### Update Quick Actions
Edit: `../src/components/ai/ChatWidget.jsx`  
Search for: `const quickActions`

---

## 🐛 Troubleshooting One-Liners

### Widget not showing?
```bash
# Check if integrated
grep -n "ChatWidget" ../src/app/home/page.js
```

### API key set?
```bash
# Check API key
grep GOOGLE_API_KEY ../../backend/.env
```

### Dependencies installed?
```bash
# Check Gemini SDK
cd ../../backend && npm list @google/generative-ai
```

### Backend running?
```bash
# Test health endpoint
curl http://localhost:5001/api/ai/health
```

### Frontend running?
```bash
# Check port 3000
curl -I http://localhost:3000
```

---

## 💰 Pricing Quick Reference

### Free Tier
- 2 requests/minute
- 1,500 requests/day

### Paid Tier
- Input: $1.25 / 1M tokens
- Output: $5.00 / 1M tokens

### Cost per 1,000 conversations
- Estimated: $5-20

---

## 🚀 Deployment Checklist

- [ ] Get production API key
- [ ] Update backend/.env
- [ ] Test locally
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Update CORS settings
- [ ] Test production
- [ ] Monitor usage

---

## 📊 Health Check URLs

### Local
- Backend: http://localhost:5001/api/ai/health
- Frontend: http://localhost:3000

### Production (Update these)
- Backend: https://your-backend.com/api/ai/health
- Frontend: https://yourdomain.com

---

## 🎨 Features List

- [x] Real-time streaming
- [x] Multi-turn conversations
- [x] Dark/light mode
- [x] Quick actions
- [x] Mobile responsive
- [x] Error handling
- [x] Rate limiting
- [x] Security features

---

## 🔗 Useful Links

- **Google AI Studio**: https://aistudio.google.com/
- **Gemini Docs**: https://ai.google.dev/docs
- **Pricing**: https://ai.google.dev/pricing
- **Model Info**: https://ai.google.dev/models/gemini

---

## 💡 Pro Tips

1. **Use free tier for development**
2. **Monitor usage daily**
3. **Consider Gemini Flash for high-volume**
4. **Cache common responses**
5. **Set appropriate token limits**

---

## 📞 Quick Help

### Issue: "Failed to get response from AI"
→ Check backend is running: `curl http://localhost:5001/api/ai/health`

### Issue: "Rate limit exceeded"
→ Free tier: wait a moment, or upgrade

### Issue: Widget not appearing
→ Run: `./test-ai.sh` and check output

### Issue: CORS errors
→ Verify both servers running on correct ports

---

## 🎯 Test Queries

Try these in the chat:

```
"Tell me about BeonicX's AI solutions"
"I'd like to schedule a demo"
"What pricing plans are available?"
"How can AI agents help my business?"
```

---

## ⚡ Speed Commands

```bash
# From ai-docs folder:
./test-ai.sh              # Test integration
./setup-ai.sh             # Run setup

# Quick test backend health
curl http://localhost:5001/api/ai/health | jq

# Check logs
cd ../../backend && npm run dev 2>&1 | tee backend.log

# Build for production
cd ../../frontend && npm run build
```

---

## 📝 Environment Variables

### Backend (.env)
```env
NODE_ENV=development
PORT=5001
GOOGLE_API_KEY=your_key_here
MONGODB_URI=your_mongodb_uri
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

---

**Keep this card handy for quick reference!** 📌

*Last updated: May 2026*
