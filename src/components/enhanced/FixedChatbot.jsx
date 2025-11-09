import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react'

const FixedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      const welcomeMsg = {
        id: 1,
        message: "👋 Hi! I'm WeziWeb AI Assistant. I help businesses discover automation opportunities. What would you like to know about our n8n automation services?",
        timestamp: new Date().toISOString(),
        isUser: false
      }
      setMessages([welcomeMsg])
    }
  }, [isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Simulate AI responses for demo
  const getAIResponse = (userMessage) => {
    const responses = {
      default: "Great question! Othman specializes in n8n workflow automation and has helped 50+ businesses save 80% of their time through intelligent automation. Would you like to book a free 30-minute consultation to discuss your specific needs?",
      services: "WeziWeb offers three main services: 1) AI Workflow Automation using n8n, 2) Digital Marketing Automation, and 3) Business Process Optimization. Each solution is custom-built for your specific business needs. What area interests you most?",
      consultation: "Absolutely! Othman offers free 30-minute strategy sessions where he'll analyze your business processes and identify automation opportunities. You can book directly through the consultation form on this page. Would you like me to guide you there?",
      experience: "Othman has 5+ years of experience in automation, has completed 500+ workflow projects, and helped 50+ businesses achieve an average 3x ROI. His expertise includes n8n, API integrations, and end-to-end process automation.",
      pricing: "Pricing depends on the complexity of your automation needs. Most projects range from $5,000 to $50,000+, but Othman provides detailed quotes after understanding your requirements. The free consultation will give you a clear roadmap and pricing estimate.",
      n8n: "n8n is a powerful workflow automation platform that Othman specializes in. It connects your apps, databases, and services to create intelligent workflows that run 24/7. Think of it as having a digital assistant that handles all your repetitive tasks automatically!"
    }

    const message = userMessage.toLowerCase()
    
    if (message.includes('service') || message.includes('offer') || message.includes('do')) {
      return responses.services
    } else if (message.includes('consultation') || message.includes('book') || message.includes('meeting') || message.includes('call')) {
      return responses.consultation
    } else if (message.includes('experience') || message.includes('othman') || message.includes('expert')) {
      return responses.experience
    } else if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return responses.pricing
    } else if (message.includes('n8n') || message.includes('workflow')) {
      return responses.n8n
    } else {
      return responses.default
    }
  }

  const handleSendMessage = async () => {
    const message = inputMessage.trim()
    if (!message) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      message: message,
      timestamp: new Date().toISOString(),
      isUser: true
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        message: getAIResponse(message),
        timestamp: new Date().toISOString(),
        isUser: false
      }
      
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickReplies = [
    "What services do you offer?",
    "Can I book a consultation?",
    "Tell me about n8n automation",
    "What's your experience?"
  ]

  const handleQuickReply = (reply) => {
    setInputMessage(reply)
    setTimeout(() => handleSendMessage(), 100)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => {
          console.log('Chatbot clicked, current state:', isOpen)
          setIsOpen(!isOpen)
        }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ 
          display: 'flex', 
          visibility: isOpen ? 'hidden' : 'visible',
          opacity: isOpen ? 0 : 1,
          pointerEvents: 'auto',
          transform: isOpen ? 'scale(0)' : 'scale(1)',
          transition: 'all 0.3s ease'
        }}
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
        
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 animate-ping"></div>
        
        {/* AI Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
          AI
        </div>
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          style={{ 
            height: '500px',
            display: 'block',
            visibility: 'visible'
          }}
        >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">WeziWeb AI Assistant</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-80 flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      msg.isUser
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {!msg.isUser && (
                        <div className="flex items-center space-x-2 mb-1">
                          <Bot className="w-3 h-3 text-blue-500" />
                          <span className="text-xs font-medium text-gray-500">WeziWeb AI</span>
                        </div>
                      )}
                      <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                      <p className={`text-xs mt-1 ${
                        msg.isUser ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        {new Date(msg.timestamp).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                      <div className="flex items-center space-x-1">
                        <Bot className="w-3 h-3 text-blue-500" />
                        <span className="text-xs font-medium text-gray-500">WeziWeb AI is typing</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.slice(0, 2).map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="border-t border-gray-100 p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about automation services..."
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Powered by */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                <Sparkles className="w-3 h-3" />
                <span>Powered by WeziWeb AI</span>
              </div>
            </div>
        </div>
      )}
    </>
  )
}

export default FixedChatbot