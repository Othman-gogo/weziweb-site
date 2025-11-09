import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export const useGSAPAnimation = () => {
  useEffect(() => {
    // Hero section animations
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 100, rotationX: 90 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0,
        duration: 1.2, 
        ease: 'power3.out',
        stagger: 0.2 
      }
    )

    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.5,
        ease: 'power2.out' 
      }
    )

    gsap.fromTo('.hero-cta', 
      { opacity: 0, scale: 0.8, y: 30 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.8,
        ease: 'back.out(1.7)' 
      }
    )

    // Floating animation for background elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    })

    // Service cards scroll animations
    gsap.fromTo('.service-card', 
      { opacity: 0, y: 100, rotationY: 45 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        stagger: 0.2
      }
    )

    // Portfolio items reveal
    gsap.fromTo('.portfolio-item', 
      { opacity: 0, scale: 0.8, rotationY: 20 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        stagger: 0.15
      }
    )

    // Stats counter animation
    gsap.fromTo('.stat-number', 
      { textContent: 0 },
      {
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        textContent: (i, target) => {
          const finalValue = target.dataset.finalValue
          return finalValue
        },
        snap: { textContent: 1 },
        stagger: 0.2
      }
    )

    // Parallax scrolling effects
    gsap.to('.parallax-slow', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    gsap.to('.parallax-fast', {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    // Text reveal animations
    gsap.fromTo('.text-reveal', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.text-reveal',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        stagger: 0.1
      }
    )

    // Magnetic button effect
    const magneticButtons = document.querySelectorAll('.magnetic-btn')
    
    magneticButtons.forEach(btn => {
      btn.addEventListener('mouseenter', magneticEnter)
      btn.addEventListener('mousemove', magneticMove)
      btn.addEventListener('mouseleave', magneticLeave)
    })

    function magneticEnter(e) {
      gsap.to(e.currentTarget, { scale: 1.03, duration: 0.3, ease: 'power2.out' })
    }

    function magneticMove(e) {
      const { currentTarget: target } = e
      const rect = target.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(target, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
    }

    function magneticLeave(e) {
      gsap.to(e.currentTarget, { x: 0, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      magneticButtons.forEach(btn => {
        btn.removeEventListener('mouseenter', magneticEnter)
        btn.removeEventListener('mousemove', magneticMove)
        btn.removeEventListener('mouseleave', magneticLeave)
      })
    }
  }, [])
}

export const GSAPProvider = ({ children }) => {
  useGSAPAnimation()
  return children
}