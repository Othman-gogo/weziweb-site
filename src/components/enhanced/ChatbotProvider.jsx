import React, { createContext, useContext, useState, useEffect } from 'react'
import { chatbotService } from '../../services/chatbotService'

const ChatbotContext = createContext()

export const useChatbot = () => {
  const context = useContext(ChatbotContext)
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider')
  }
  return context
}

export const ChatbotProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true)
  const [analytics, setAnalytics] = useState({
    totalChats: 0,
    averageSessionLength: 0,
    commonQuestions: [],
    conversionRate: 0
  })

  useEffect(() => {
    // Load analytics on component mount
    loadAnalytics()
  }, [])

  const loadAnalytics = () => {
    try {
      const storedAnalytics = localStorage.getItem('weziweb_chat_analytics')
      if (storedAnalytics) {
        const interactions = JSON.parse(storedAnalytics)
        
        // Calculate basic analytics
        const chats = interactions.filter(i => i.type === 'chat_opened').length
        const messages = interactions.filter(i => i.type === 'message_sent')
        
        setAnalytics({
          totalChats: chats,
          totalMessages: messages.length,
          averageSessionLength: chats > 0 ? Math.round(messages.length / chats) : 0,
          lastUpdated: new Date().toISOString()
        })
      }
    } catch (error) {
      console.warn('Error loading chatbot analytics:', error)
    }
  }

  const trackEvent = (eventType, data = {}) => {
    chatbotService.trackInteraction(eventType, data)
    loadAnalytics() // Refresh analytics
  }

  const getChatAnalytics = () => {
    loadAnalytics()
    return analytics
  }

  const clearChatData = () => {
    localStorage.removeItem('weziweb_chat_analytics')
    setAnalytics({
      totalChats: 0,
      averageSessionLength: 0,
      commonQuestions: [],
      conversionRate: 0
    })
  }

  const value = {
    isEnabled,
    setIsEnabled,
    analytics,
    trackEvent,
    getChatAnalytics,
    clearChatData,
    chatbotService
  }

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  )
}