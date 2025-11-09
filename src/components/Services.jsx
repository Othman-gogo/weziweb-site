import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Workflow, BarChart3, Zap, Globe, Users, Clock, Target } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Workflow Automation",
      description: "Custom n8n workflows that automate your repetitive tasks, integrate your tools, and scale your operations without additional headcount.",
      features: ["Data Processing", "API Integrations", "Email Automation", "Lead Management"],
      gradient: "from-wezi-blue-500 to-wezi-cyan-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Digital Marketing Automation",
      description: "Intelligent marketing funnels that nurture leads, engage customers, and drive conversions using AI-powered personalization.",
      features: ["Lead Scoring", "Campaign Automation", "Social Media Management", "Analytics Dashboards"],
      gradient: "from-wezi-cyan-500 to-wezi-green-500"
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Business Process Optimization",
      description: "End-to-end process analysis and automation to eliminate bottlenecks, reduce costs, and improve efficiency across your organization.",
      features: ["Process Mapping", "Workflow Design", "System Integration", "Performance Monitoring"],
      gradient: "from-wezi-green-500 to-wezi-blue-500"
    }
  ]

  const stats = [
    { icon: <Clock className="w-6 h-6" />, number: "80%", label: "Time Saved" },
    { icon: <Target className="w-6 h-6" />, number: "3x", label: "ROI Increase" },
    { icon: <Users className="w-6 h-6" />, number: "50+", label: "Happy Clients" },
    { icon: <Zap className="w-6 h-6" />, number: "500+", label: "Workflows Built" }
  ]

  return (
    <section id="services" className="section-padding bg-white">
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
            <span className="gradient-text">Expert Services</span> That
            <br />
            <span className="text-gray-900">Drive Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a certified n8n specialist and digital marketing expert, I help businesses automate 
            their workflows and scale their operations with intelligent AI solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px]`}>
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-wezi-gradient rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold mb-4">
              <span className="gradient-text">Proven Results</span> You Can Trust
            </h3>
            <p className="text-gray-600">Real metrics from real businesses we've transformed</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-wezi-gradient rounded-full text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Automation Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services