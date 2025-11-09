import React, { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <Zap className="w-8 h-8 text-wezi-pink-500" />
              <div className="absolute inset-0 bg-wezi-gradient rounded-full opacity-20 blur-sm"></div>
            </div>
            <span className="text-2xl font-display font-bold gradient-text">weziweb</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-wezi-blue-500 transition-colors duration-200 font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-wezi-blue-500 transition-colors duration-200 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-wezi-blue-500 transition-colors duration-200 font-medium">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('consultation')} className="btn-primary">
                Book Consultation
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-wezi-blue-500 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-wezi-blue-500 transition-colors duration-200">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-wezi-blue-500 transition-colors duration-200">
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-wezi-blue-500 transition-colors duration-200">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('consultation')} className="block w-full text-left px-3 py-2 btn-primary mt-2">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar