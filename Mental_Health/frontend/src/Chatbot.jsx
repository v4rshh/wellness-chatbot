import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI mental health companion. How are you feeling today? I'm here to listen and provide support.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const predefinedResponses = {
    greetings: [
      "I'm here for you. What's on your mind today?",
      "Thank you for reaching out. How can I support you?",
      "I'm glad you're taking time to check in with yourself. What would you like to talk about?"
    ],
    stress: [
      "I understand you're feeling stressed. That's completely normal. Can you tell me what's causing you the most stress right now?",
      "Stress can be overwhelming. Have you tried any breathing exercises or meditation recently?",
      "It sounds like you're dealing with a lot. Remember, it's okay to take breaks and ask for help."
    ],
    anxiety: [
      "Anxiety can feel very intense, but you're not alone. What specific situations make you feel most anxious?",
      "Thank you for sharing that with me. Anxiety is treatable, and there are many strategies that can help.",
      "I hear you. When you feel anxious, try the 4-7-8 breathing technique: breathe in for 4, hold for 7, exhale for 8."
    ],
    depression: [
      "I'm sorry you're feeling this way. Depression is real and valid, and seeking help shows strength.",
      "These feelings are difficult, but they don't define you. Have you been able to talk to a counselor about this?",
      "Thank you for trusting me with this. Remember, there are people who want to help, including professional counselors."
    ],
    default: [
      "I appreciate you sharing that with me. Can you tell me more about how you're feeling?",
      "That sounds important to you. How is this affecting your daily life?",
      "I'm listening. What would be most helpful for you right now?",
      "Thank you for opening up. What do you think might help you feel better?",
      "I understand this is difficult. Have you considered speaking with a professional counselor about this?"
    ]
  };

  const getResponseCategory = (text) => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return 'greetings';
    }
    if (lowerText.includes('stress') || lowerText.includes('pressure') || lowerText.includes('overwhelm')) {
      return 'stress';
    }
    if (lowerText.includes('anxious') || lowerText.includes('anxiety') || lowerText.includes('worry')) {
      return 'anxiety';
    }
    if (lowerText.includes('depress') || lowerText.includes('sad') || lowerText.includes('hopeless')) {
      return 'depression';
    }
    return 'default';
  };

  const generateBotResponse = (userMessage) => {
    const category = getResponseCategory(userMessage);
    const responses = predefinedResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses = [
    "I'm feeling stressed about studies",
    "I'm feeling anxious",
    "I need someone to talk to",
    "How can I manage my emotions?",
    "I want to book a counselor"
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="w-full bg-white shadow-sm border-b">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-[var(--pastel-blue)] hover:text-[#96b9d8] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">AI Assistant Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 py-6">
        {/* Chat Header */}
        <div className="bg-white rounded-t-xl p-6 border-b">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">AI Mental Health Companion</h1>
              <p className="text-sm text-gray-600">Your safe space for mental wellness support</p>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 bg-white px-6 py-4 overflow-y-auto space-y-4 max-h-96">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-[var(--pastel-blue)] text-white'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Response Buttons */}
        <div className="bg-white px-6 py-4 border-t">
          <p className="text-sm text-gray-600 mb-3">Quick responses:</p>
          <div className="flex flex-wrap gap-2">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => setInputText(response)}
                className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
              >
                {response}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white rounded-b-xl p-6 border-t">
          <div className="flex gap-3">
            <textarea
              ref={inputRef}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here... Press Enter to send"
              className="flex-1 resize-none rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[var(--pastel-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--pastel-blue)] focus:ring-opacity-50"
              rows={2}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isLoading}
              className="px-6 py-2 bg-[var(--pastel-blue)] text-white rounded-lg hover:bg-[#96b9d8] focus:outline-none focus:ring-2 focus:ring-[var(--pastel-blue)] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Helpful Resources */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              to="/counselors"
              className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">person</span>
              Book Counselor
            </Link>
            <Link
              to="/phq9"
              className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">psychology</span>
              Mental Health Assessment
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">library_books</span>
              Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mx-4 mb-4 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              <strong>Crisis Support:</strong> If you're experiencing a mental health emergency, please call{' '}
              <a href="tel:112" className="font-medium underline">112</a> or contact{' '}
              <a href="tel:9152987821" className="font-medium underline">AASRA: 91-9820466726</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;