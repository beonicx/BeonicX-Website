# 🤖 AI Agent Integration Documentation

This folder contains all documentation and scripts related to the Google Gemini-powered AI chat agent integrated into the BeonicX website.

---

## 📚 Documentation Files

### Quick Start
| File | Purpose | When to Read |
|------|---------|--------------|
| **START_HERE.md** | 🚀 Begin here! Quick setup guide | First time setup |
| **GEMINI_QUICKSTART.md** | Quick start specifically for Gemini | After initial setup |

### Implementation Details
| File | Purpose | When to Read |
|------|---------|--------------|
| **IMPLEMENTATION_SUMMARY.md** | What was built and how | Understanding the implementation |
| **GEMINI_MIGRATION.md** | Claude → Gemini migration details | Understanding the changes |
| **AI_INTEGRATION_GUIDE.md** | Comprehensive integration guide | Detailed customization |

### Reference Guides
| File | Purpose | When to Read |
|------|---------|--------------|
| **README_GEMINI.md** | Complete Gemini reference | Full documentation |
| **README_AI_AGENT.md** | General AI agent reference | Architecture & API details |
| **VISUAL_GUIDE.md** | UI/UX design reference | Understanding the interface |

### Other
| File | Purpose | When to Read |
|------|---------|--------------|
| **AI_QUICKSTART.md** | Original Claude quickstart | Historical reference |

---

## 🛠️ Scripts

### setup-ai.sh
Automated setup script for the AI agent.

**Usage:**
```bash
cd ../../  # Go to project root
./frontend/ai-docs/setup-ai.sh
```

**What it does:**
- Checks for .env file
- Installs backend dependencies
- Installs frontend dependencies
- Provides setup instructions

---

### test-ai.sh
Integration testing script.

**Usage:**
```bash
cd ../../  # Go to project root
./frontend/ai-docs/test-ai.sh
```

**What it checks:**
- Backend files exist
- Frontend files exist
- API key is configured
- Dependencies installed
- Servers running
- API health

---

## 🚀 Quick Start Guide

### 1. Read Documentation
Start with: **START_HERE.md**

### 2. Setup (If Needed)
```bash
cd ../../  # Go to project root
./frontend/ai-docs/setup-ai.sh
```

### 3. Start Servers
```bash
# Terminal 1 - Backend
cd ../../backend
npm run dev

# Terminal 2 - Frontend  
cd ../frontend
npm run dev
```

### 4. Test
```bash
# From project root
./frontend/ai-docs/test-ai.sh
```

Open: http://localhost:3000

---

## 📁 Related Files

### Backend
```
backend/
├── routes/
│   └── ai.js              # Gemini API integration
├── app.js                 # Routes configured
├── .env                   # GOOGLE_API_KEY
└── package.json           # @google/generative-ai
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   └── ai/
│   │       └── ChatWidget.jsx  # Chat UI component
│   └── app/
│       └── home/
│           └── page.js         # Widget integrated
└── ai-docs/                    # This folder
    └── [All documentation]
```

---

## 🤖 What's Integrated

### AI Model
- **Google Gemini 1.5 Pro**
- 1M token context window
- Real-time streaming responses
- Multi-turn conversations

### Features
- ✅ Floating chat widget (bottom-right)
- ✅ Real-time streaming
- ✅ Dark/light mode support
- ✅ Quick action buttons
- ✅ Mobile responsive
- ✅ Multi-purpose (sales, support, Q&A)

### Technical
- ✅ Express.js backend API
- ✅ React chat component
- ✅ Server-Sent Events streaming
- ✅ Rate limiting
- ✅ Error handling
- ✅ Security features

---

## 💰 Cost

**Gemini 1.5 Pro:**
- Free tier: 1,500 requests/day
- Input: $1.25 per 1M tokens
- Output: $5 per 1M tokens

**Typical conversation:** ~$0.005 - $0.02

---

## 🔑 API Key

Your API key is configured in:
```
backend/.env
GOOGLE_API_KEY=AIzaSyB8W3EMmUdk2pHd5HjQ6_A4TjcmyD5bt2A
```

**Regenerate at:** https://aistudio.google.com/app/apikey

---

## 🐛 Troubleshooting

### Widget not showing?
→ Read: **START_HERE.md** → "Having Issues?"

### API errors?
→ Read: **README_GEMINI.md** → "Troubleshooting"

### Need complete reference?
→ Read: **README_GEMINI.md**

---

## 📊 Monitoring

**Google AI Studio:** https://aistudio.google.com/app/apikey

Monitor:
- Request count
- Token usage
- Rate limits
- API key status

---

## 🎨 Customization

### Change AI Personality
Edit: `../../backend/routes/ai.js` → `SYSTEM_PROMPT`

### Modify Widget Appearance
Edit: `../src/components/ai/ChatWidget.jsx`

### Update Quick Actions
Edit: `../src/components/ai/ChatWidget.jsx` → `quickActions` array

**Full customization guide:** See **AI_INTEGRATION_GUIDE.md**

---

## 📖 Documentation Structure

```
frontend/ai-docs/
├── README.md                    ← You are here
│
├── Quick Start Guides
│   ├── START_HERE.md           # Begin here!
│   └── GEMINI_QUICKSTART.md    # Gemini-specific
│
├── Implementation Docs
│   ├── IMPLEMENTATION_SUMMARY.md
│   ├── GEMINI_MIGRATION.md
│   └── AI_INTEGRATION_GUIDE.md
│
├── Reference Guides
│   ├── README_GEMINI.md        # Complete reference
│   ├── README_AI_AGENT.md      # Technical details
│   └── VISUAL_GUIDE.md         # UI/UX reference
│
├── Scripts
│   ├── setup-ai.sh
│   └── test-ai.sh
│
└── Archive
    └── AI_QUICKSTART.md        # Original Claude guide
```

---

## ✨ Key Benefits

- 💰 **60% cheaper** than Claude
- 🎁 **Free tier** for development
- 🧠 **1M token** context window
- ⚡ **Fast** real-time responses
- 🔒 **Secure** implementation
- 🎨 **Beautiful** UI/UX

---

## 🆘 Support

1. **Check documentation** in this folder
2. **Run test script:** `./test-ai.sh`
3. **Review backend logs**
4. **Check Google AI Studio**

---

## 📝 Notes

- All documentation is up to date as of May 2026
- Scripts are executable (chmod +x already set)
- API key is pre-configured and ready to use
- Free tier provides 1,500 requests/day

---

**Ready to get started?** Open **START_HERE.md**! 🚀

*Your AI agent is powered by Google Gemini 1.5 Pro* 🤖
