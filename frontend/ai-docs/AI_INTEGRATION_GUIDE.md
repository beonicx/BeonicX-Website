# BeonicX AI Agent Integration Guide

This guide explains how to set up and use the Claude-powered AI agent integrated into your website.

## 🚀 Features

Your AI agent can:
- **Sales & Lead Generation**: Qualify leads, explain services, schedule demos, provide pricing info
- **Technical Support**: Help troubleshoot issues, guide users through features
- **General Q&A**: Answer questions about AI agents, automation, and your solutions
- **Real-time Streaming**: Fast, conversational responses powered by Claude Sonnet 4

## 📋 Setup Instructions

### 1. Get Your Anthropic API Key

1. Visit [https://console.anthropic.com/](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to "API Keys" section
4. Create a new API key
5. Copy the key (it starts with `sk-ant-`)

### 2. Configure Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a `.env` file (use `.env.example` as template):
   ```bash
   cp .env.example .env
   ```

3. Add your Anthropic API key to `.env`:
   ```env
   ANTHROPIC_API_KEY=sk-ant-your-actual-api-key-here
   ```

4. Make sure other required environment variables are set (MongoDB, JWT, etc.)

### 3. Start the Backend Server

```bash
# Install dependencies (if not already done)
npm install

# Start the server
npm run dev
```

The backend should now be running on `${process.env.NEXT_PUBLIC_BASE_URL}`

### 4. Start the Frontend

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

The frontend should now be running on `http://localhost:3000`

## 🎨 UI Components

### Chat Widget (`ChatWidget.jsx`)
- **Location**: Bottom-right corner of the page
- **Features**:
  - Floating chat bubble with online status indicator
  - Expandable chat window
  - Real-time streaming responses
  - Quick action buttons for common queries
  - Dark/light mode support
  - Smooth animations and transitions

### Customization

#### Change Widget Position
Edit `/frontend/src/components/ai/ChatWidget.jsx`:
```jsx
// Change from bottom-6 right-6 to your preferred position
className="fixed bottom-6 right-6 z-50"
```

#### Modify Quick Actions
In `ChatWidget.jsx`, update the `quickActions` array:
```jsx
const quickActions = [
  { label: 'Your Custom Action', icon: '🎯' },
  // Add more actions...
];
```

#### Customize AI Behavior
Edit `/backend/routes/ai.js` and modify the `SYSTEM_PROMPT`:
```javascript
const SYSTEM_PROMPT = `You are BeonicX's AI assistant...
// Add your custom instructions here
`;
```

## 🔧 API Endpoints

### POST `/api/ai/chat`
Send messages to the AI agent.

**Request Body:**
```json
{
  "messages": [
    { "role": "user", "content": "How can I schedule a demo?" }
  ],
  "stream": true
}
```

**Response:**
- Streaming: Server-Sent Events (SSE) with incremental text
- Non-streaming: JSON with complete response

### GET `/api/ai/health`
Check if the AI service is running.

**Response:**
```json
{
  "status": "ok",
  "service": "BeonicX AI Agent"
}
```

## 📊 Monitoring & Analytics

### Track Conversations
You can add logging to track:
- Number of conversations
- Common user queries
- Response times
- User satisfaction

Example implementation in `/backend/routes/ai.js`:
```javascript
// Add after successful message
console.log({
  timestamp: new Date(),
  userMessage: userMessage,
  responseLength: assistantMessage.length
});
```

### Store Conversations (Optional)
Create a MongoDB model to store chat history:
```javascript
const conversationSchema = new mongoose.Schema({
  sessionId: String,
  messages: [{ role: String, content: String, timestamp: Date }],
  userInfo: { email: String, name: String },
  createdAt: { type: Date, default: Date.now }
});
```

## 🎯 Best Practices

### 1. Rate Limiting
The backend already has rate limiting configured. For AI-specific limits:
```javascript
const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30, // 30 requests per 15 minutes per IP
});
router.post('/chat', aiLimiter, async (req, res) => { ... });
```

### 2. Error Handling
The widget handles connection errors gracefully. Monitor backend logs for:
- API key issues
- Rate limit errors
- Network timeouts

### 3. Cost Management
- Claude Sonnet 4 costs approximately $3 per million input tokens
- Enable prompt caching for repeated system prompts
- Monitor usage in Anthropic Console

### 4. Security
- ✅ API key stored in environment variables
- ✅ CORS configured
- ✅ Rate limiting enabled
- ✅ Input validation in place

Consider adding:
- User authentication for personalized responses
- Message filtering for inappropriate content
- Conversation history limits

## 🚀 Deployment

### Environment Variables for Production

Update your production `.env`:
```env
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
ANTHROPIC_API_KEY=your_production_api_key
```

### Vercel (Frontend)
```bash
cd frontend
vercel --prod
```

### Railway/Heroku (Backend)
Set environment variables in your hosting platform dashboard.

## 🐛 Troubleshooting

### "Failed to get response from AI"
- ✅ Check if backend is running on port 5001
- ✅ Verify `ANTHROPIC_API_KEY` is set correctly
- ✅ Check backend console for error messages
- ✅ Ensure you have API credits in your Anthropic account

### Widget Not Appearing
- ✅ Check browser console for errors
- ✅ Verify `ChatWidget` is imported and rendered
- ✅ Check z-index conflicts with other elements

### CORS Errors
- ✅ Verify backend CORS settings allow your frontend URL
- ✅ Check if backend is running and accessible

### Streaming Not Working
- ✅ Ensure `stream: true` is set in the request
- ✅ Check if server supports SSE (Server-Sent Events)
- ✅ Verify no proxy is buffering the response

## 📚 Additional Resources

- [Anthropic API Documentation](https://docs.anthropic.com/)
- [Claude Model Comparison](https://docs.anthropic.com/claude/docs/models-overview)
- [Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)

## 🎉 Success!

Your AI agent is now live! Test it by:
1. Opening your website
2. Clicking the chat bubble in the bottom-right
3. Asking questions like:
   - "Tell me about BeonicX's AI solutions"
   - "I'd like to schedule a demo"
   - "What pricing plans do you offer?"

Need help? The AI agent itself can guide users through common questions!
