import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enhanced Components
import LoadingScreen from './components/enhanced/LoadingScreen'
import NotificationSystem from './components/enhanced/NotificationSystem'
import { GSAPProvider } from './components/enhanced/GSAPAnimations'
import EnhancedHero from './components/enhanced/EnhancedHero'
import EnhancedConsultation from './components/enhanced/EnhancedConsultation'
import SimpleBrandedChatbot from './components/enhanced/SimpleBrandedChatbot'
import { ChatbotProvider } from './components/enhanced/ChatbotProvider'

// Original Components
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Consultation from './components/Consultation'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Project Pages
import TechFlowProject from './pages/TechFlowProject'
import FitLifeProject from './pages/FitLifeProject'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // Simulate resource loading
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsReady(true)
    }

    preloadResources()
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    
    // Initialize page-wide animations
    setTimeout(() => {
      gsap.fromTo('body', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
    }, 100)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <ChatbotProvider>
      <GSAPProvider>
        <Router>
          <div className="min-h-screen bg-white overflow-x-hidden">
            {/* Global Notification System */}
            <NotificationSystem />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main Routes */}
          <Routes>
            <Route path="/" element={
              <main>
                {/* Enhanced Hero Section */}
                <section id="home">
                  <EnhancedHero />
                </section>
                
                {/* Services Section with GSAP classes */}
                <section id="services" className="services-section">
                  <Services />
                </section>
                
                {/* About Section */}
                <section id="about" className="about-section">
                  <About />
                </section>
                
                {/* Portfolio Section with GSAP classes */}
                <section id="portfolio" className="portfolio-section">
                  <Portfolio />
                </section>
                
                {/* Consultation Section */}
                <section id="consultation" className="consultation-section">
                  <Consultation />
                </section>
                
                {/* Contact Section */}
                <section id="contact" className="contact-section">
                  <Contact />
                </section>
              </main>
            } />
            
            {/* Project Showcase Routes - Only these use separate pages */}
            <Route path="/projects/techflow" element={<TechFlowProject />} />
            <Route path="/projects/fitlife" element={<FitLifeProject />} />
          </Routes>
          
          {/* Footer */}
          <Footer />
          
          {/* Floating AI Chatbot */}
          <SimpleBrandedChatbot />
          
          {/* Scroll to top functionality */}
          <ScrollToTopButton />
        </div>
      </Router>
    </GSAPProvider>
    </ChatbotProvider>
  )
}

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-24 z-40 w-12 h-12 bg-wezi-gradient text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

export default App