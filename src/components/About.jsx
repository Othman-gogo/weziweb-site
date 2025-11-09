import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "n8n Certified Expert",
      description: "Advanced certification in workflow automation and integration development"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "50+ Businesses Transformed",
      description: "Successfully automated processes for companies across various industries"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "500+ Workflows Created",
      description: "Designed and implemented complex automation solutions that save thousands of hours"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "3x Average ROI",
      description: "Clients typically see 300% return on investment within the first year"
    }
  ]

  const skills = [
    { name: "n8n Workflow Automation", level: 95 },
    { name: "AI Integration & APIs", level: 90 },
    { name: "Digital Marketing Strategy", level: 88 },
    { name: "Business Process Analysis", level: 85 },
    { name: "Data Analytics & Reporting", level: 92 },
    { name: "System Integration", level: 87 }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
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
            Meet <span className="gradient-text">Othman Taoufik</span>
            <br />
            <span className="text-gray-900">Your AI Automation Expert</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming businesses through intelligent automation and strategic digital marketing solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-gray-900">
                Passionate About <span className="gradient-text">Automation Excellence</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 5 years of experience in digital marketing and automation, I specialize in creating 
                  intelligent workflows that transform how businesses operate. My expertise lies in leveraging 
                  n8n's powerful automation platform to build custom solutions that scale.
                </p>
                
                <p>
                  I've helped companies across industries—from startups to enterprises—automate their most 
                  critical processes, integrate disparate systems, and unlock new levels of efficiency. 
                  Every workflow I create is designed with scalability, reliability, and ROI in mind.
                </p>
                
                <p>
                  My approach combines technical expertise with business acumen, ensuring that every automation 
                  solution not only works flawlessly but also drives measurable business outcomes.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {['n8n Expert', 'AI Workflows', 'Process Optimization', 'Digital Strategy', 'API Integration', 'Data Analytics'].map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-wezi-gradient text-white rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-display font-semibold mb-6 text-gray-900">Technical Expertise</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-wezi-blue-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-wezi-gradient h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">Proven Track Record</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-wezi-gradient rounded-full text-white mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-display font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-display font-semibold mb-4">
            <span className="gradient-text">My Mission</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            "I believe that every business deserves to operate at peak efficiency. My goal is to eliminate 
            the tedious, repetitive tasks that hold you back, so you can focus on what truly matters—growing 
            your business and serving your customers better. Let's build something amazing together."
          </p>
          <div className="mt-6">
            <span className="text-2xl font-display font-bold gradient-text">— Othman Taoufik</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About