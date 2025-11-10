import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Search, User, Star, TrendingUp, Shield, Zap } from 'lucide-react'
import TechFlowDemo from '../components/TechFlowDemo'
import ProjectNavbar from '../components/ProjectNavbar'

const TechFlowProject = () => {

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Smart Cart System",
      description: "Intelligent cart management with real-time pricing and inventory updates"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Search",
      description: "AI-powered product search with filters and recommendations"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "User Profiles",
      description: "Personalized user experience with order history and preferences"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Review System",
      description: "Comprehensive product reviews and rating system"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Real-time business insights and sales analytics"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "PCI-compliant payment processing with fraud protection"
    }
  ]

  const stats = [
    { label: "Sales Increase", value: "250%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Cart Abandonment Reduction", value: "45%", icon: <ShoppingCart className="w-5 h-5" /> },
    { label: "Uptime Achievement", value: "99.9%", icon: <Zap className="w-5 h-5" /> },
    { label: "Load Time", value: "<2s", icon: <Zap className="w-5 h-5" /> }
  ]

  const techStack = [
    { name: "React", category: "Frontend", color: "bg-blue-100 text-blue-800" },
    { name: "Node.js", category: "Backend", color: "bg-green-100 text-green-800" },
    { name: "MongoDB", category: "Database", color: "bg-green-100 text-green-800" },
    { name: "Stripe", category: "Payments", color: "bg-purple-100 text-purple-800" },
    { name: "AWS", category: "Cloud", color: "bg-orange-100 text-orange-800" },
    { name: "Redis", category: "Caching", color: "bg-red-100 text-red-800" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <ProjectNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => {
                sessionStorage.setItem('scrollToSection', 'portfolio')
                const baseUrl = import.meta.env.BASE_URL || '/'
                window.location.href = baseUrl
              }}
              className="flex items-center space-x-2 mb-8 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              TechFlow
              <span className="block text-2xl md:text-3xl font-normal text-blue-200 mt-2">
                E-commerce Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-8">
              A complete e-commerce solution that transformed online sales with intelligent features and exceptional performance.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="flex items-center space-x-2 mb-1">
                    {stat.icon}
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experience the Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interact with the fully functional e-commerce platform. Browse products, manage cart, and explore the admin dashboard.
            </p>
          </div>
          
          {/* Demo Container */}
          <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <TechFlowDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies and best practices for optimal performance and user experience.
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
                <div className="text-blue-600 mb-4">{feature.icon}</div>
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
              Built with cutting-edge technologies for scalability, performance, and maintainability.
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

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Your E-commerce Platform?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a powerful e-commerce solution that drives your business growth.
          </p>
          <button 
            onClick={() => {
              sessionStorage.setItem('scrollToSection', 'consultation')
              const baseUrl = import.meta.env.BASE_URL || '/'
              window.location.href = baseUrl
            }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  )
}

export default TechFlowProject