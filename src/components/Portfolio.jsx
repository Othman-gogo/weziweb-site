import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-commerce Order Automation",
      category: "ecommerce",
      description: "Automated order processing, inventory management, and customer notifications for a growing online retailer.",
      image: "/api/placeholder/400/250",
      results: ["80% faster order processing", "99.9% accuracy rate", "$50k annual savings"],
      technologies: ["n8n", "Shopify API", "Gmail", "Slack", "Google Sheets"],
      type: "Workflow Automation"
    },
    {
      id: 2,
      title: "Lead Qualification & CRM Integration",
      category: "marketing",
      description: "Intelligent lead scoring and automated CRM data enrichment for a B2B software company.",
      image: "/api/placeholder/400/250",
      results: ["300% increase in qualified leads", "70% reduction in manual work", "15x ROI achieved"],
      technologies: ["n8n", "HubSpot", "LinkedIn API", "OpenAI", "Webhook"],
      type: "Marketing Automation"
    },
    {
      id: 3,
      title: "Social Media Content Pipeline",
      category: "marketing",
      description: "Automated content creation, scheduling, and performance tracking across multiple social platforms.",
      image: "/api/placeholder/400/250",
      results: ["5x content output", "60% engagement increase", "90% time savings"],
      technologies: ["n8n", "OpenAI", "Buffer", "Instagram API", "Analytics"],
      type: "Content Automation"
    },
    {
      id: 4,
      title: "Customer Support Automation",
      category: "support",
      description: "AI-powered ticket routing, auto-responses, and escalation workflows for improved customer satisfaction.",
      image: "/api/placeholder/400/250",
      results: ["50% faster response time", "95% customer satisfaction", "40% cost reduction"],
      technologies: ["n8n", "Zendesk", "OpenAI", "Twilio", "MongoDB"],
      type: "Support Automation"
    },
    {
      id: 5,
      title: "Financial Reporting Dashboard",
      category: "analytics",
      description: "Real-time financial data aggregation and automated reporting for a multi-location business.",
      image: "/api/placeholder/400/250",
      results: ["Daily automated reports", "100% accuracy", "20 hours saved weekly"],
      technologies: ["n8n", "QuickBooks", "Google Sheets", "Power BI", "Email"],
      type: "Data Analytics"
    },
    {
      id: 6,
      title: "HR Onboarding Workflow",
      category: "hr",
      description: "Streamlined employee onboarding process from application to first day, improving new hire experience.",
      image: "/api/placeholder/400/250",
      results: ["90% faster onboarding", "Perfect compliance rate", "Enhanced experience"],
      technologies: ["n8n", "BambooHR", "DocuSign", "Slack", "Calendar"],
      type: "HR Automation"
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'marketing', label: 'Marketing' },
    { key: 'support', label: 'Support' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'hr', label: 'HR' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-wezi-gradient rounded-2xl flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {project.type}
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
                <button className="w-full bg-gray-50 hover:bg-wezi-gradient hover:text-white text-gray-700 py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
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
    </section>
  )
}

export default Portfolio