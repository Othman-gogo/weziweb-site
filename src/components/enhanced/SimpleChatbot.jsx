import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)

  console.log('SimpleChatbot rendered, isOpen:', isOpen)

  return (
    <>
      {/* Simple Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        style={{ display: 'block' }}
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Simple Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200">
          <div className="bg-blue-500 px-4 py-3 flex items-center justify-between rounded-t-lg">
            <h3 className="text-white font-semibold">WeziWeb AI</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-100 p-3 rounded-lg mb-4">
              <p className="text-sm">Hi! I'm WeziWeb AI Assistant. How can I help you with automation today?</p>
            </div>
            
            <div className="flex">
              <input
                type="text"
                placeholder="Ask about automation..."
                className="flex-1 px-3 py-2 border rounded-l-lg"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SimpleChatbot