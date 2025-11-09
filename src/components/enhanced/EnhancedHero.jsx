import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, Workflow, TrendingUp, Play, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import TypewriterEffect from './TypewriterEffect'
import ParticleBackground from './ParticleBackground'

const EnhancedHero = () => {
  const heroRef = useRef(null)
  const tl = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create GSAP timeline
      tl.current = gsap.timeline()
      
      // Advanced hero animations
      tl.current
        .fromTo('.hero-bg', 
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
        )
        .fromTo('.hero-title-main', 
          { y: 100, opacity: 0, rotationX: 90 },
          { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: 'power3.out' },
          0.3
        )
        .fromTo('.hero-title-typewriter', 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
          0.6
        )
        .fromTo('.hero-subtitle', 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.9
        )
        .fromTo('.hero-features', 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.1 },
          1.2
        )
        .fromTo('.hero-cta', 
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
          1.5
        )

      // Floating elements animation
      gsap.to('.floating-1', {
        y: -20,
        x: 10,
        rotation: 5,
        duration: 4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })

      gsap.to('.floating-2', {
        y: -15,
        x: -8,
        rotation: -3,
        duration: 3.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.5
      })

      gsap.to('.floating-3', {
        y: -25,
        x: 5,
        rotation: 8,
        duration: 5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1
      })

      // Sparkle animation
      gsap.to('.sparkle', {
        rotation: 360,
        duration: 10,
        ease: 'none',
        repeat: -1
      })

      // Glowing effect
      gsap.to('.glow-pulse', {
        opacity: 0.3,
        scale: 1.1,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Enhanced Background */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50"></div>
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div className="floating-1 absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-wezi-blue-500/20 to-wezi-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="floating-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-wezi-green-500/20 to-wezi-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="floating-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-wezi-pink-500/10 to-wezi-blue-500/10 rounded-full blur-3xl"></div>
        
        {/* Geometric Shapes */}
        <div className="floating-1 absolute top-20 right-20 w-16 h-16 border-2 border-wezi-cyan-500/30 rounded-lg rotate-45"></div>
        <div className="floating-2 absolute bottom-32 left-16 w-12 h-12 bg-wezi-green-500/20 rounded-full"></div>
        <div className="floating-3 absolute top-1/3 right-1/3 w-8 h-8 bg-wezi-pink-500/30 rotate-45"></div>
        
        {/* Sparkles */}
        <div className="sparkle absolute top-24 left-1/4 text-wezi-pink-500/40 hidden md:block">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="sparkle absolute bottom-32 right-1/5 text-wezi-cyan-500/40 hidden md:block" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="sparkle absolute top-1/2 right-16 text-wezi-green-500/40 hidden lg:block" style={{ animationDelay: '4s' }}>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="space-y-4 mb-8">
          <h1 className="hero-title-main text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            <span className="block">Transform Your Business</span>
            <span className="block text-gray-900">with</span>
          </h1>
          
          <div className="hero-title-typewriter text-4xl md:text-6xl lg:text-7xl font-display font-bold">
            <TypewriterEffect
              words={['AI Workflows', 'Smart Automation', 'n8n Expertise', 'Digital Growth']}
              className="gradient-text"
              speed={120}
              deleteSpeed={80}
              delayBetweenWords={2500}
            />
          </div>
        </div>

        {/* Enhanced Subheadline */}
        <div className="hero-subtitle space-y-4 mb-10">
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm <span className="font-semibold gradient-text">Othman Taoufik</span>, 
            your expert in AI workflow automation and digital marketing solutions.
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Specializing in n8n automation that scales your business and eliminates repetitive tasks—
            so you can focus on what matters most.
          </p>
        </div>

        {/* Enhanced Feature Icons */}
        <div className="hero-features flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          <motion.div 
            className="flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="w-8 md:w-10 h-8 md:h-10 bg-wezi-gradient rounded-full flex items-center justify-center">
              <Bot className="w-4 md:w-5 h-4 md:h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">AI Automation Expert</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="w-8 md:w-10 h-8 md:h-10 bg-wezi-gradient rounded-full flex items-center justify-center">
              <Workflow className="w-4 md:w-5 h-4 md:h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">n8n Certified</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 md:space-x-3 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="w-8 md:w-10 h-8 md:h-10 bg-wezi-gradient rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 md:w-5 h-4 md:h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base">500+ Workflows Built</span>
          </motion.div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button 
            onClick={scrollToConsultation}
            className="magnetic-btn btn-primary text-lg px-8 py-4 flex items-center space-x-3 group shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button glow effect */}
            <div className="glow-pulse absolute inset-0 bg-wezi-gradient opacity-20 rounded-lg blur-xl"></div>
            <span className="relative z-10">Book Free 30-Min Strategy Call</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <motion.button 
            onClick={scrollToPortfolio}
            className="magnetic-btn btn-secondary text-lg px-8 py-4 flex items-center space-x-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>View Success Stories</span>
          </motion.button>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 space-y-4"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>✅ Available for new projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-wezi-blue-500 rounded-full"></div>
              <span>⚡ 50+ satisfied clients worldwide</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-wezi-green-500 rounded-full"></div>
              <span>🚀 Average 3x ROI achieved</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400">
            Join the businesses already automating their success with WeziWeb
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center relative bg-white/10 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-wezi-gradient rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default EnhancedHero