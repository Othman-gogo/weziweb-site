import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react'
import CaseStudyModal from './CaseStudyModal'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: "TechFlow E-commerce Platform",
      category: "web-development",
      description: "Complete e-commerce solution with inventory management, payment processing, and customer analytics.",
      image: "/api/placeholder/400/250",
      results: ["250% increase in online sales", "45% reduction in cart abandonment", "99.9% uptime achieved"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      type: "Web Development",
      duration: "12 weeks",
      teamSize: "3 developers",
      impact: "+250% sales",
      challenge: "TechFlow needed a modern e-commerce platform to replace their outdated system that was causing lost sales due to poor user experience and frequent crashes during peak traffic.",
      solution: "Developed a scalable React-based e-commerce platform with microservices architecture, implementing advanced caching, CDN optimization, and real-time inventory management.",
      implementationSteps: [
        {
          title: "Requirements Analysis & Architecture Design",
          description: "Conducted thorough analysis of existing system bottlenecks and designed scalable microservices architecture."
        },
        {
          title: "Frontend Development with React",
          description: "Built responsive, mobile-first interface with optimized checkout flow and real-time product search."
        },
        {
          title: "Backend API Development",
          description: "Developed RESTful APIs with Node.js for inventory, payments, and user management."
        },
        {
          title: "Payment Integration & Security",
          description: "Integrated Stripe payments with PCI compliance and fraud detection mechanisms."
        },
        {
          title: "Performance Optimization",
          description: "Implemented caching strategies, CDN, and database optimization for sub-2-second load times."
        }
      ],
      testimonial: {
        quote: "Othman transformed our online business. The new platform handles 10x more traffic and our sales have increased dramatically. The user experience is exceptional.",
        author: "Sarah Chen",
        position: "CEO, TechFlow"
      }
    },
    {
      id: 2,
      title: "AutoLead CRM Integration System",
      category: "automation",
      description: "Intelligent lead scoring and automated CRM data enrichment for a B2B software company.",
      image: "/api/placeholder/400/250",
      results: ["300% increase in qualified leads", "70% reduction in manual work", "15x ROI achieved"],
      technologies: ["n8n", "HubSpot", "LinkedIn API", "OpenAI", "Webhook"],
      type: "Marketing Automation",
      duration: "8 weeks",
      teamSize: "2 specialists",
      impact: "+300% leads",
      challenge: "The sales team was spending 60% of their time on manual lead qualification and data entry, missing follow-up opportunities and losing potential customers.",
      solution: "Built an intelligent automation system that captures leads from multiple sources, enriches data using AI, scores leads automatically, and triggers personalized follow-up sequences.",
      implementationSteps: [
        {
          title: "Lead Source Integration",
          description: "Connected website forms, LinkedIn, and email campaigns to centralized lead capture system."
        },
        {
          title: "AI-Powered Data Enrichment",
          description: "Implemented OpenAI integration to research and enrich lead profiles with company information."
        },
        {
          title: "Automated Lead Scoring",
          description: "Developed scoring algorithm based on company size, industry, and engagement metrics."
        },
        {
          title: "CRM Synchronization",
          description: "Built seamless HubSpot integration for automatic lead creation and task assignment."
        }
      ],
      testimonial: {
        quote: "Our sales team can now focus on selling instead of data entry. The lead quality has improved dramatically and our conversion rates have tripled.",
        author: "Michael Rodriguez",
        position: "Sales Director, AutoLead Solutions"
      }
    },
    {
      id: 3,
      title: "FitLife Mobile Fitness App",
      category: "mobile",
      description: "Cross-platform mobile app for fitness tracking with AI-powered workout recommendations.",
      image: "/api/placeholder/400/250",
      results: ["50K+ downloads in first month", "4.8/5 app store rating", "85% user retention rate"],
      technologies: ["React Native", "Firebase", "TensorFlow", "Node.js", "MongoDB"],
      type: "Mobile Development",
      duration: "16 weeks",
      teamSize: "4 developers",
      impact: "50K+ users",
      challenge: "FitLife wanted to enter the competitive fitness app market with a unique AI-driven approach to personalized workout and nutrition recommendations.",
      solution: "Developed a cross-platform mobile app with machine learning capabilities that provides personalized fitness plans based on user goals, preferences, and progress tracking.",
      implementationSteps: [
        {
          title: "User Experience Design",
          description: "Created intuitive UI/UX designs with focus on motivation and ease of use for fitness tracking."
        },
        {
          title: "Cross-Platform Development",
          description: "Built React Native app for both iOS and Android with native performance optimization."
        },
        {
          title: "AI Recommendation Engine",
          description: "Implemented TensorFlow-based ML model for personalized workout and nutrition suggestions."
        },
        {
          title: "Real-time Sync & Analytics",
          description: "Built Firebase backend for real-time data sync and comprehensive user analytics."
        }
      ],
      testimonial: {
        quote: "The app exceeded all our expectations. Users love the AI recommendations and the engagement metrics are phenomenal. Othman delivered exactly what we envisioned.",
        author: "Jennifer Park",
        position: "Founder, FitLife"
      }
    },
    {
      id: 4,
      title: "CloudSecure DevOps Pipeline",
      category: "devops",
      description: "Complete CI/CD pipeline with automated testing, deployment, and monitoring for a fintech startup.",
      image: "/api/placeholder/400/250",
      results: ["90% faster deployments", "Zero downtime releases", "50% reduction in bugs"],
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform", "Prometheus"],
      type: "DevOps Solutions",
      duration: "10 weeks",
      teamSize: "2 engineers",
      impact: "90% faster deploy",
      challenge: "The fintech startup was struggling with manual deployments, frequent downtime, and lack of monitoring, which was affecting their ability to compete in the fast-moving fintech market.",
      solution: "Implemented a complete DevOps transformation with Infrastructure as Code, automated CI/CD pipelines, comprehensive monitoring, and security scanning integrated into the development workflow.",
      implementationSteps: [
        {
          title: "Infrastructure as Code Setup",
          description: "Migrated entire infrastructure to Terraform for consistent, reproducible deployments."
        },
        {
          title: "CI/CD Pipeline Implementation",
          description: "Built automated Jenkins pipelines with testing, security scanning, and deployment stages."
        },
        {
          title: "Containerization & Orchestration",
          description: "Dockerized applications and deployed on Kubernetes for scalability and reliability."
        },
        {
          title: "Monitoring & Alerting",
          description: "Implemented Prometheus and Grafana for comprehensive monitoring and alerting."
        }
      ],
      testimonial: {
        quote: "Our deployment process went from hours to minutes, and we haven't had a single outage since implementation. The monitoring gives us complete visibility into our systems.",
        author: "David Thompson",
        position: "CTO, CloudSecure"
      }
    },
    {
      id: 5,
      title: "EduConnect Learning Platform",
      category: "web-development",
      description: "Comprehensive online learning management system with video streaming and progress tracking.",
      image: "/api/placeholder/400/250",
      results: ["10K+ active students", "95% course completion rate", "4.9/5 user satisfaction"],
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS CloudFront"],
      type: "Educational Platform",
      duration: "14 weeks",
      teamSize: "5 developers",
      impact: "10K+ students",
      challenge: "EduConnect needed a robust learning platform that could handle thousands of concurrent video streams while providing an engaging learning experience with progress tracking and interactive features.",
      solution: "Built a scalable learning management system with optimized video delivery, interactive quizzes, progress tracking, and instructor tools for content management and student engagement.",
      implementationSteps: [
        {
          title: "Platform Architecture Design",
          description: "Designed scalable architecture to handle high-traffic video streaming and user interactions."
        },
        {
          title: "Video Streaming Optimization",
          description: "Implemented CDN-based video delivery with adaptive streaming for optimal performance."
        },
        {
          title: "Learning Management Features",
          description: "Built comprehensive LMS with progress tracking, quizzes, assignments, and certification."
        },
        {
          title: "Instructor Dashboard",
          description: "Created advanced instructor tools for content management, analytics, and student engagement."
        }
      ],
      testimonial: {
        quote: "The platform has transformed how we deliver education. Students are more engaged, completion rates are higher, and instructors have all the tools they need to succeed.",
        author: "Dr. Amanda Foster",
        position: "Academic Director, EduConnect"
      }
    },
    {
      id: 6,
      title: "HealthTracker API Ecosystem",
      category: "backend",
      description: "Robust backend API system for healthcare data management with HIPAA compliance and real-time analytics.",
      image: "/api/placeholder/400/250",
      results: ["HIPAA compliant architecture", "99.99% uptime", "Sub-200ms response times"],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
      type: "Backend Development",
      duration: "12 weeks",
      teamSize: "3 backend engineers",
      impact: "99.99% uptime",
      challenge: "HealthTracker needed a secure, HIPAA-compliant backend system that could handle sensitive medical data while providing real-time analytics and integration with multiple healthcare providers.",
      solution: "Developed a microservices-based API ecosystem with end-to-end encryption, audit logging, and real-time data processing capabilities that meets all healthcare compliance requirements.",
      implementationSteps: [
        {
          title: "Security & Compliance Framework",
          description: "Implemented HIPAA-compliant architecture with encryption, audit trails, and access controls."
        },
        {
          title: "Microservices Architecture",
          description: "Built modular API services for patient data, analytics, and healthcare provider integrations."
        },
        {
          title: "Real-time Data Processing",
          description: "Implemented streaming data pipelines for real-time health monitoring and alerts."
        },
        {
          title: "Third-party Integrations",
          description: "Built secure connectors for major EHR systems and medical device APIs."
        }
      ],
      testimonial: {
        quote: "Othman delivered a world-class backend system that exceeded our security requirements. The API performance is exceptional and has enabled us to scale rapidly.",
        author: "Dr. Robert Kim",
        position: "Chief Medical Officer, HealthTracker"
      }
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web-development', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'backend', label: 'Backend/API' },
    { key: 'automation', label: 'Automation' },
    { key: 'devops', label: 'DevOps' }
  ]

  const handleViewCaseStudy = (project) => {
    setSelectedCaseStudy(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCaseStudy(null)
  }

  const handleViewProject = (project) => {
    if (project.id === 1) {
      // TechFlow E-commerce Platform
      window.open('#/projects/techflow', '_blank')
    } else if (project.id === 3) {
      // FitLife Mobile App
      window.open('#/projects/fitlife', '_blank')
    }
  }

  const getProjectIcon = (id) => {
    switch(id) {
      case 1: return '🛒' // TechFlow
      case 2: return '🤖' // AutoLead
      case 3: return '💪' // FitLife
      case 4: return '🎓' // EduConnect
      case 5: return '🏥' // HealthTracker
      case 6: return '☁️' // CloudSecure
      default: return '💼'
    }
  }

  // Map real images and galleries to projects
  const imageMap = {
    1: { image: "/portfolio/techflow-1.svg", gallery: ["/portfolio/techflow-1.svg", "/portfolio/techflow-2.svg", "/portfolio/techflow-3.svg"] },
    2: { image: "/portfolio/autolead-1.svg", gallery: ["/portfolio/autolead-1.svg", "/portfolio/autolead-2.svg", "/portfolio/autolead-3.svg"] },
    3: { image: "/portfolio/fitlife-1.svg", gallery: ["/portfolio/fitlife-1.svg", "/portfolio/fitlife-2.svg", "/portfolio/fitlife-3.svg"] },
    4: { image: "/portfolio/cloudsecure-1.svg", gallery: ["/portfolio/cloudsecure-1.svg", "/portfolio/cloudsecure-3.svg"] },
    5: { image: "/portfolio/educonnect-1.svg", gallery: ["/portfolio/educonnect-1.svg", "/portfolio/educonnect-2.svg", "/portfolio/educonnect-3.svg"] },
    6: { image: "/portfolio/healthtracker-1.svg", gallery: ["/portfolio/healthtracker-1.svg", "/portfolio/healthtracker-2.svg", "/portfolio/healthtracker-3.svg"] },
  }
  const projectsWithImages = projects.map(p => ({ ...p, ...(imageMap[p.id] || {}) }))
  const baseProjects = projectsWithImages
  const filteredProjects = activeFilter === 'all' 
    ? baseProjects 
    : baseProjects.filter(project => project.category === activeFilter)

  const resolveAsset = (p) => (p && p.startsWith('/')) ? `${import.meta.env.BASE_URL}${p.slice(1)}` : p

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Portfolio</span> of
            <br />
            <span className="text-gray-900">Automated Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real workflows, real results. See how I've transformed businesses with intelligent automation solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-wezi-gradient text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Mobile Carousel - Touch Swipeable */}
        <div className="md:hidden mb-8">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 px-4" style={{scrollSnapType: 'x mandatory'}}>
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="flex-shrink-0 w-80" style={{scrollSnapAlign: 'start'}}>
                  <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
                    <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-green-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">{getProjectIcon(project.id)}</div>
                        <div className="text-lg font-semibold">{project.title.split(' ')[0]}</div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                        {project.results[0]?.split(':')[1]?.trim() || 'Success'}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-wezi-blue-500 transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                        <div className="space-y-1">
                          {project.results.slice(0, 2).map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-wezi-green-500 rounded-full"></div>
                              <span className="line-clamp-1">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mb-4">
                        <button 
                          onClick={() => handleViewCaseStudy(project)} 
                          className="flex-1 bg-gray-50 hover:bg-wezi-gradient hover:text-white text-gray-700 py-2 px-3 rounded-lg font-medium transition-all duration-300 text-sm"
                        >
                          Case Study
                        </button>
                        {(project.id === 1 || project.id === 3) && (
                          <button 
                            onClick={() => handleViewProject(project)} 
                            className="flex-1 bg-wezi-gradient text-white py-2 px-3 rounded-lg font-medium transition-all duration-300 text-sm hover:opacity-90"
                          >
                            View Project
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Header - Beautiful Icons & Gradients */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-green-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-3">{getProjectIcon(project.id)}</div>
                  <div className="text-2xl font-bold">{project.title.split(' ')[0]}</div>
                  <div className="text-sm opacity-90">{project.type}</div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                  {project.results[0]?.split(':')[1]?.trim() || 'Success'}
                </div>
              </div>

              <div className="p-6">
                {/* Project Title & Description */}
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3 group-hover:text-wezi-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <div className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-wezi-green-500 rounded-full"></div>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleViewCaseStudy(project)}
                    className="flex-1 bg-gray-50 hover:bg-wezi-gradient hover:text-white text-gray-700 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  {(project.id === 1 || project.id === 3) && (
                    <button 
                      onClick={() => handleViewProject(project)}
                      className="flex-1 bg-wezi-gradient text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 hover:opacity-90"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Ready to <span className="gradient-text">Automate Your Success?</span>
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            These are just a few examples of what's possible. Let's discuss how we can transform your business processes.
          </p>
          <button 
            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Schedule Your Strategy Call
          </button>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        caseStudy={selectedCaseStudy}
      />
    </section>
  )
}

export default Portfolio