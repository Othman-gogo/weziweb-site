import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const ProjectNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavigation = (sectionId) => {
    // Navigate to main website and then scroll to section
    const baseUrl = import.meta.env.BASE_URL || '/'
    
    // Store the target section in sessionStorage
    sessionStorage.setItem('scrollToSection', sectionId)
    
    // Navigate to main website
    window.location.href = baseUrl
  }

  const handleLogoClick = () => {
    const baseUrl = import.meta.env.BASE_URL || '/'
    window.location.href = baseUrl
  }

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={handleLogoClick}
            className="text-2xl font-bold bg-wezi-gradient bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
          >
            WeziWeb
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-gray-700 hover:text-wezi-blue-500 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-wezi-blue-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavigation(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-wezi-blue-500 hover:bg-gray-50 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  handleNavigation('consultation')
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left px-3 py-2 bg-wezi-gradient text-white rounded-lg font-medium hover:opacity-90 transition-opacity mt-2"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default ProjectNavbar