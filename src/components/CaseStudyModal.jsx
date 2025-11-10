import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  if (!caseStudy) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Section */}
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {caseStudy.type}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {caseStudy.category}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    {caseStudy.title}
                  </h1>
                  <p className="text-xl text-blue-100 max-w-3xl">
                    {caseStudy.description}
                  </p>
                </div>
              </div>

              {/* Image Gallery */}
              {caseStudy.gallery?.length > 0 && (
                <div className="p-8">
                  <div className="md:grid md:grid-cols-2 gap-4 hidden">
                    {caseStudy.gallery.map((src, i) => (
                      <img key={i} src={src} alt={`${caseStudy.title} ${i+1}`} className="w-full h-64 object-cover rounded-xl" />
                    ))}
                  </div>
                  <div className="md:hidden overflow-x-auto flex gap-4 pb-2">
                    {caseStudy.gallery.map((src, i) => (
                      <img key={i} src={src} alt={`${caseStudy.title} ${i+1}`} className="w-72 h-44 object-cover rounded-xl flex-shrink-0" />
                    ))}
                  </div>
                </div>
              )}

              {/* Content Body */}
              <div className="p-8">
                {/* Project Overview */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{caseStudy.duration}</div>
                    <div className="text-gray-600">Project Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{caseStudy.teamSize}</div>
                    <div className="text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{caseStudy.impact}</div>
                    <div className="text-gray-600">Business Impact</div>
                  </div>
                </div>

                {/* Challenge Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">{caseStudy.solution}</p>
                  </div>
                  
                  {/* Implementation Steps */}
                  <div className="grid gap-4">
                    {caseStudy.implementationSteps?.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies & Tools</h2>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.technologies?.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.results?.map((result, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                {caseStudy.testimonial && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                        "{caseStudy.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold">
                          {caseStudy.testimonial.author?.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
                          <div className="text-gray-600">{caseStudy.testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    See how we can create a similar success story for your company with custom automation solutions.
                  </p>
                  <button 
                    onClick={() => {
                      onClose()
                      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CaseStudyModal