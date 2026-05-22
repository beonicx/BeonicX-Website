const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// System prompt defining the AI agent's behavior
const SYSTEM_PROMPT = `You are BeonicX's AI assistant - a helpful, knowledgeable AI agent that represents BeonicX, a company that empowers businesses with intelligent AI agents and SaaS solutions.

Your capabilities include:
1. **Sales & Lead Generation**: Qualify leads, explain services, schedule demos, provide pricing info
2. **Technical Support**: Help troubleshoot issues, guide users through features
3. **General Q&A**: Answer questions about AI agents, automation, and our solutions

Key Information about BeonicX:
- We provide AI-powered SaaS solutions for modern enterprises
- We've deployed 100+ AI agents for 50+ enterprise clients
- We've automated 5M+ tasks
- We work with global brands like Google, Hostinger, AWS, and Shopify
- Our focus areas: Automation, AI Agents, Business Intelligence

Guidelines:
- Be friendly, professional, and concise
- If asked about pricing or demos, collect: name, email, company, and specific needs
- For technical issues, gather details before suggesting solutions
- Always maintain a helpful, solution-oriented tone
- If you don't know something specific, be honest and offer to connect them with the team`;

// Chat endpoint with streaming support
router.post('/chat', async (req, res) => {
  try {
    const { messages, stream = true } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Initialize Gemini model (using gemini-2.5-flash - latest stable version)
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT
    });

    // Convert messages to Gemini format
    const history = messages.slice(0, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const userMessage = messages[messages.length - 1].content;

    // Set headers for streaming
    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
    }

    if (stream) {
      // Start chat with history
      const chat = model.startChat({ history });

      // Stream the response
      const result = await chat.sendMessageStream(userMessage);

      for await (const chunk of result.stream) {
        const text = chunk.text();
        if (text) {
          res.write(`data: ${JSON.stringify({ type: 'text', content: text })}\n\n`);
        }
      }

      res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
      res.end();
    } else {
      // Non-streaming response
      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;

      res.json({
        content: response.text(),
        id: Date.now().toString(),
      });
    }
  } catch (error) {
    console.error('AI Chat Error:', error);
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Failed to process AI request',
        details: error.message
      });
    }
  }
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'BeonicX AI Agent' });
});

module.exports = router;
