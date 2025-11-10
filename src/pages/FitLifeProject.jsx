import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Smartphone, Heart, TrendingUp, Users, Star, Download, Play } from 'lucide-react'

import FitLifeDemo from '../components/FitLifeDemo'

const FitLifeProject = () => {
  const [currentScreen, setCurrentScreen] = useState('cover')
  
  const handleNavigation = (section) => {
    window.location.href = `/#${section}`
  }

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "AI-Powered Workouts",
      description: "Personalized fitness plans based on your goals, fitness level, and preferences using machine learning"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Comprehensive analytics and progress visualization to keep you motivated and on track"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Features",
      description: "Connect with friends, join challenges, and share your fitness journey with the community"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "Seamless experience across iOS and Android with real-time synchronization"
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Video Workouts",
      description: "High-quality workout videos with step-by-step instructions and modifications"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Gamification",
      description: "Achievement badges, streaks, and rewards to keep you motivated and engaged"
    }
  ]

  const stats = [
    { label: "Downloads", value: "50K+", icon: <Download className="w-5 h-5" /> },
    { label: "App Store Rating", value: "4.8★", icon: <Star className="w-5 h-5" /> },
    { label: "User Retention", value: "85%", icon: <Users className="w-5 h-5" /> },
    { label: "Active Users", value: "35K+", icon: <TrendingUp className="w-5 h-5" /> }
  ]

  const techStack = [
    { name: "React Native", category: "Mobile", color: "bg-blue-100 text-blue-800" },
    { name: "Firebase", category: "Backend", color: "bg-orange-100 text-orange-800" },
    { name: "TensorFlow", category: "AI/ML", color: "bg-yellow-100 text-yellow-800" },
    { name: "Node.js", category: "API", color: "bg-green-100 text-green-800" },
    { name: "MongoDB", category: "Database", color: "bg-green-100 text-green-800" },
    { name: "GraphQL", category: "API", color: "bg-purple-100 text-purple-800" }
  ]

  const screens = [
    { id: 'cover', name: 'Welcome' },
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'workout', name: 'Workout' },
    { id: 'progress', name: 'Progress' },
    { id: 'profile', name: 'Profile' },
    { id: 'plan', name: 'Plan' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              onClick={() => handleNavigation('')}
              className="text-2xl font-bold bg-wezi-gradient bg-clip-text text-transparent cursor-pointer"
            >
              WeziWeb
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('services')}
                className="text-gray-700 hover:text-wezi-blue-500 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="text-gray-700 hover:text-wezi-blue-500 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('portfolio')}
                className="text-gray-700 hover:text-wezi-blue-500 transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNavigation('consultation')}
                className="bg-wezi-gradient text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Book Consultation
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => handleNavigation('')}
                className="text-gray-700 hover:text-wezi-blue-500"
              >
                ☰ Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => window.location.href = '/#portfolio'}
              className="flex items-center space-x-2 mb-8 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              FitLife
              <span className="block text-2xl md:text-3xl font-normal text-green-200 mt-2">
                AI Fitness Mobile App
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mb-8">
              A revolutionary fitness app that uses AI to create personalized workout plans and keep users motivated with intelligent recommendations.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="flex items-center space-x-2 mb-1">
                    {stat.icon}
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-green-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience the App
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through different screens and experience the complete user journey of the FitLife mobile app.
            </p>
          </div>

          {/* Screen Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => {
                  setCurrentScreen(screen.id)
                  // Trigger a re-render of the demo component
                  window.dispatchEvent(new CustomEvent('fitlife-screen-change', { detail: screen.id }))
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentScreen === screen.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {screen.name}
              </button>
            ))}
          </div>
          
          {/* Mobile Demo Container */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[640px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <FitLifeDemo currentScreen={currentScreen} />
                </div>
                
                {/* Phone Details */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full"></div>
              </div>
              
              {/* Screen Labels */}
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Current Screen:</h3>
                  <p className="text-green-600 font-medium">{screens.find(s => s.id === currentScreen)?.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              App Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge features designed to revolutionize your fitness journey with intelligent recommendations and seamless user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern mobile technologies and AI/ML frameworks for optimal performance and intelligent features.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full font-medium ${tech.color}`}
              >
                <span className="font-semibold">{tech.name}</span>
                <span className="text-sm ml-2 opacity-75">({tech.category})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              User Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From onboarding to achieving fitness goals - a seamless experience designed for motivation and results.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Onboarding & Goals",
                description: "Users set their fitness goals, preferences, and current fitness level through an intuitive onboarding process."
              },
              {
                step: "02", 
                title: "AI Assessment",
                description: "Our AI analyzes user data to create a personalized fitness plan tailored to their specific needs and goals."
              },
              {
                step: "03",
                title: "Daily Workouts",
                description: "Users receive daily workout recommendations with video guidance and real-time progress tracking."
              },
              {
                step: "04",
                title: "Progress & Motivation",
                description: "Continuous progress tracking, achievements, and AI-powered motivation keeps users engaged and committed."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's create a powerful mobile solution that engages users and drives your business forward.
          </p>
          <button 
            onClick={() => window.location.href = '/#consultation'}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  )
}

export default FitLifeProject