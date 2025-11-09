// Test script to verify Gemini API connection
import { GoogleGenAI } from "@google/genai"

// Initialize Google Gemini AI
const ai = new GoogleGenAI({
  apiKey: 'AIzaSyC5VzdC7LpLHfqOLSwC7vBzdTCMPw6Llow'
})

async function testGeminiConnection() {
  try {
    console.log('Testing Gemini API connection...')
    
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-exp",
      contents: "Say hello and confirm you are WeziWeb AI Assistant working for Othman Taoufik",
    })
    
    console.log('✅ Success! Gemini API is working')
    console.log('Response:', response.text)
    return true
  } catch (error) {
    console.error('❌ Error testing Gemini API:', error.message)
    return false
  }
}

testGeminiConnection()