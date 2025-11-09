import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Minimize2, RotateCcw, User, Bot, Sparkles } from 'lucide-react'
import { chatbotService, CHATBOT_CONFIG } from '../../services/chatbotService'
import { notify } from './NotificationSystem'

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [quickReplies, setQuickReplies] = useState(chatbotService.getQuickReplies())
  
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send welcome message when chat first opens
      const welcomeMsg = chatbotService.getWelcomeMessage()
      setMessages([welcomeMsg])
    }
  }, [isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async (messageText = null) => {
    const message = messageText || inputMessage.trim()
    if (!message || isLoading) return

    // Add user message immediately
    const userMessage = {
      success: true,
      message: message,
      timestamp: new Date().toISOString(),
      isUser: true
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)
    setIsTyping(true)

    // Track interaction
    chatbotService.trackInteraction('message_sent', { message })

    try {
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Get AI response
      const response = await chatbotService.sendMessage(message)
      
      if (response.success) {
        setMessages(prev => [...prev, { ...response, isUser: false }])
        
        // Update quick replies with suggested questions
        const suggestions = chatbotService.getSuggestedQuestions()
        setQuickReplies(suggestions)
      } else {
        // Handle error response
        const errorMessage = {
          success: true,
          message: response.message,
          timestamp: new Date().toISOString(),
          isUser: false,
          isError: true
        }
        setMessages(prev => [...prev, errorMessage])
        
        if (response.error === 'API_KEY_ERROR') {
          notify.error('Chatbot service unavailable. Please contact directly.')
        }
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage = {
        success: true,
        message: "I'm sorry, I'm having trouble responding right now. Please contact Othman directly at othman@weziweb.com or book a consultation.",
        timestamp: new Date().toISOString(),
        isUser: false,
        isError: true
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleClearChat = () => {
    chatbotService.clearHistory()
    const clearMessage = chatbotService.getWelcomeMessage()
    setMessages([clearMessage])
    setQuickReplies(chatbotService.getQuickReplies())
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      chatbotService.trackInteraction('chat_opened')
    } else {
      chatbotService.trackInteraction('chat_closed')
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-wezi-gradient text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: isOpen ? 0 : 1, 
          rotate: isOpen ? 180 : 0 
        }}
        transition={{ duration: 0.3, ease: 'back.out(1.7)' }}
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
        
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-wezi-gradient rounded-full opacity-30 animate-ping"></div>
        
        {/* Notification badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
        >
          AI
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 60 : 500
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'back.out(1.7)' }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-wezi-gradient px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{CHATBOT_CONFIG.name}</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClearChat}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                  title="Clear chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleChat}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <div className="h-80 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        msg.isUser
                          ? 'bg-wezi-gradient text-white'
                          : msg.isError
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {!msg.isUser && (
                          <div className="flex items-center space-x-2 mb-1">
                            <Bot className="w-3 h-3 text-wezi-blue-500" />
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
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                        <div className="flex items-center space-x-1">
                          <Bot className="w-3 h-3 text-wezi-blue-500" />
                          <span className="text-xs font-medium text-gray-500">WeziWeb AI is typing</span>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {quickReplies.length > 0 && (
                  <div className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.slice(0, 3).map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(reply)}
                          className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200"
                          disabled={isLoading}
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
                      ref={inputRef}
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about automation services..."
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-wezi-blue-500 focus:border-transparent text-sm"
                      disabled={isLoading}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputMessage.trim() || isLoading}
                      className="px-3 py-2 bg-wezi-gradient text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Powered by */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                <Sparkles className="w-3 h-3" />
                <span>Powered by WeziWeb AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingChatbot