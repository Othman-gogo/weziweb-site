import React, { useState, useEffect } from 'react'
import { chatbotService } from '../../services/chatbotService'

const LeadsAdmin = () => {
  const [leads, setLeads] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const ADMIN_PASSWORD = 'weziweb2024' // Simple password protection

  useEffect(() => {
    if (isAuthenticated) {
      loadLeads()
    }
  }, [isAuthenticated])

  const loadLeads = () => {
    const collectedLeads = chatbotService.getCollectedLeads()
    setLeads(collectedLeads.reverse()) // Show newest first
  }

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      alert('Incorrect password')
    }
  }

  const exportLeads = () => {
    const csvContent = [
      'Name,Email,Phone,Company,Challenge,Date',
      ...leads.map(lead => 
        `"${lead.name}","${lead.email}","${lead.phone || ''}","${lead.company || ''}","${lead.businessChallenge || ''}","${new Date(lead.timestamp).toLocaleString()}"`
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `weziweb-leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const clearAllLeads = () => {
    if (window.confirm('Are you sure you want to clear all leads? This cannot be undone.')) {
      localStorage.removeItem('weziweb_leads')
      setLeads([])
    }
  }

  const sendEmailToLead = (email) => {
    window.open(`mailto:${email}?subject=Follow-up from WeziWeb&body=Hi,\n\nThank you for your interest in WeziWeb's automation services. I'd love to discuss how we can help your business.\n\nBest regards,\nOthman Taoufik`)
  }

  if (!isVisible) {
    return (
      <div 
        className="fixed bottom-4 left-4 z-50"
        style={{ fontSize: '12px' }}
      >
        <button
          onClick={() => setIsVisible(true)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          title="Admin Panel"
        >
          ⚙️
        </button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">WeziWeb Leads Admin Panel</h2>
          <button
            onClick={() => {
              setIsVisible(false)
              setIsAuthenticated(false)
              setPassword('')
            }}
            className="text-white hover:text-gray-200 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {!isAuthenticated ? (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Admin Login</h3>
              <div className="max-w-sm mx-auto">
                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button
                  onClick={handleLogin}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Login
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Total Leads</h4>
                  <p className="text-2xl font-bold text-blue-700">{leads.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">With Email</h4>
                  <p className="text-2xl font-bold text-green-700">
                    {leads.filter(lead => lead.email).length}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900">With Phone</h4>
                  <p className="text-2xl font-bold text-purple-700">
                    {leads.filter(lead => lead.phone).length}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={loadLeads}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  🔄 Refresh
                </button>
                <button
                  onClick={exportLeads}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  disabled={leads.length === 0}
                >
                  📊 Export CSV
                </button>
                <button
                  onClick={clearAllLeads}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  disabled={leads.length === 0}
                >
                  🗑️ Clear All
                </button>
              </div>

              {/* Leads Table */}
              <div className="overflow-auto max-h-96">
                {leads.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <p className="text-lg">No leads collected yet</p>
                    <p className="text-sm">Leads will appear here when visitors provide their information in the chatbot</p>
                  </div>
                ) : (
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Phone</th>
                        <th className="p-3 text-left">Company</th>
                        <th className="p-3 text-left">Challenge</th>
                        <th className="p-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 text-xs">
                            {new Date(lead.timestamp).toLocaleDateString()}<br/>
                            {new Date(lead.timestamp).toLocaleTimeString()}
                          </td>
                          <td className="p-3 font-medium">{lead.name || '-'}</td>
                          <td className="p-3">
                            {lead.email ? (
                              <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                                {lead.email}
                              </a>
                            ) : '-'}
                          </td>
                          <td className="p-3">
                            {lead.phone ? (
                              <a href={`tel:${lead.phone}`} className="text-green-600 hover:underline">
                                {lead.phone}
                              </a>
                            ) : '-'}
                          </td>
                          <td className="p-3">{lead.company || '-'}</td>
                          <td className="p-3 max-w-xs truncate" title={lead.businessChallenge}>
                            {lead.businessChallenge || '-'}
                          </td>
                          <td className="p-3">
                            {lead.email && (
                              <button
                                onClick={() => sendEmailToLead(lead.email)}
                                className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                                title="Send email"
                              >
                                📧
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LeadsAdmin