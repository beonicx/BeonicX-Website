'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FiMessageCircle, FiX, FiSend, FiUser, FiCpu } from 'react-icons/fi';

export default function ChatWidget({ darkMode = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm BeonicX's AI assistant. I can help you with:\n\n• Learning about our AI solutions\n• Booking a demo or discussing pricing\n• Technical support and guidance\n\nHow can I help you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    // Add user message
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // ✅ FIX: Check if BASE_URL is defined
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
      const apiUrl = `${baseUrl}/api/ai/chat`;

      console.log('[ChatWidget] Sending request to:', apiUrl);
      console.log('[ChatWidget] NEXT_PUBLIC_BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL);

      // Prepare messages for API (exclude first welcome message)
      const apiMessages = newMessages.slice(1).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      console.log('[ChatWidget] API messages count:', apiMessages.length);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
          stream: true
        }),
      });

      console.log('[ChatWidget] Response status:', response.status, response.statusText);

      // ✅ FIX: Read the actual error body before throwing
      if (!response.ok) {
        let errorDetails = '';
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const errorJson = await response.json();
            errorDetails = JSON.stringify(errorJson);
            console.error('[ChatWidget] API error (JSON):', response.status, errorJson);
          } else {
            errorDetails = await response.text();
            console.error('[ChatWidget] API error (text):', response.status, errorDetails);
          }
        } catch (parseErr) {
          console.error('[ChatWidget] Could not parse error response:', parseErr);
        }

        // Show specific error messages based on status code
        if (response.status === 401) {
          throw new Error('API key is missing or invalid (401). Check your GEMINI_API_KEY in .env.local');
        } else if (response.status === 403) {
          throw new Error('Access forbidden (403). Gemini API may not be enabled for this key.');
        } else if (response.status === 429) {
          throw new Error('Rate limit exceeded (429). Too many requests to Gemini API.');
        } else if (response.status === 500) {
          throw new Error(`Server error (500): ${errorDetails || 'Check your API route handler.'}`);
        } else {
          throw new Error(`API request failed (${response.status}): ${errorDetails || response.statusText}`);
        }
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      // Add empty assistant message that we'll update
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const rawData = line.slice(6).trim();

              // ✅ FIX: Skip empty data lines
              if (!rawData || rawData === '[DONE]') continue;

              const data = JSON.parse(rawData);

              if (data.type === 'text') {
                assistantMessage += data.content;
                // Update the last message (assistant's) with accumulated content
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: 'assistant',
                    content: assistantMessage
                  };
                  return updated;
                });
              } else if (data.type === 'done') {
                console.log('[ChatWidget] Stream complete. Total chars:', assistantMessage.length);
                break;
              } else if (data.type === 'error') {
                console.error('[ChatWidget] Stream error from server:', data.content);
                throw new Error(`Stream error: ${data.content}`);
              }
            } catch (e) {
              // Only log if it's a real parse error, not empty lines
              if (e.message !== 'Unexpected end of JSON input') {
                console.error('[ChatWidget] Error parsing SSE data:', e, '| Raw line:', line);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error('[ChatWidget] Full error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });

      // ✅ Show the specific error message in chat for easier debugging
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: process.env.NODE_ENV === 'development'
            ? `⚠️ Debug Error: ${error.message}\n\nCheck browser console for full details.`
            : "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact our team directly."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    { label: 'Schedule Demo', icon: '📅' },
    { label: 'View Pricing', icon: '💰' },
    { label: 'Technical Support', icon: '🔧' },
    { label: 'AI Solutions', icon: '🤖' },
  ];

  const handleQuickAction = (action) => {
    setInputMessage(action.label);
  };

  return (
    <>
      {/* Chat bubble button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            darkMode
              ? 'bg-gradient-to-br from-purple-600 to-blue-600'
              : 'bg-gradient-to-br from-blue-600 to-purple-600'
          } text-white group`}
          aria-label="Open chat"
        >
          <FiMessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] rounded-2xl shadow-2xl flex flex-col ${
            darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'
          } overflow-hidden transition-all duration-300 animate-slideUp`}
        >
          {/* Header */}
          <div className={`p-4 ${darkMode ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'} text-white flex items-center justify-between`}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FiCpu className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold">BeonicX AI Assistant</h3>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatContainerRef}
            className={`flex-1 overflow-y-auto p-4 space-y-4 ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  } gap-2`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                      message.role === 'user'
                        ? darkMode ? 'bg-blue-600' : 'bg-blue-500'
                        : darkMode ? 'bg-purple-600' : 'bg-purple-500'
                    } text-white`}
                  >
                    {message.role === 'user' ? (
                      <FiUser className="w-4 h-4" />
                    ) : (
                      <FiCpu className="w-4 h-4" />
                    )}
                  </div>

                  {/* Message bubble */}
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.role === 'user'
                        ? darkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-500 text-white'
                        : darkMode
                        ? 'bg-gray-700 text-white'
                        : 'bg-white text-gray-900'
                    } shadow-sm whitespace-pre-wrap`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-purple-600' : 'bg-purple-500'} text-white`}>
                    <FiCpu className="w-4 h-4" />
                  </div>
                  <div className={`px-4 py-2 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}>
                    <div className="flex space-x-2">
                      <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`}></div>
                      <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                      <div className={`w-2 h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-500'} rounded-full animate-bounce`} style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          {messages.length === 1 && (
            <div className={`px-4 py-3 border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
              <p className={`text-xs mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                      darkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <span className="mr-1">{action.icon}</span>
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className={`p-4 border-t ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isLoading}
                className={`flex-1 px-4 py-2 rounded-xl ${
                  darkMode
                    ? 'bg-gray-800 text-white border-gray-700'
                    : 'bg-gray-100 text-gray-900 border-gray-200'
                } border focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50`}
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className={`p-2 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
                aria-label="Send message"
              >
                <FiSend className="w-5 h-5" />
              </button>
            </div>
            <p className={`text-xs mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Powered by Google Gemini
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
