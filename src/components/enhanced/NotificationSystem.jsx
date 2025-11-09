import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { CheckCircle, AlertCircle, X, Info } from 'lucide-react'

// Custom notification functions
export const notify = {
  success: (message, options = {}) => {
    toast.success(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: 'linear-gradient(135deg, #00FF88 0%, #00CC66 100%)',
        color: 'white',
        borderRadius: '12px',
        padding: '16px',
        fontWeight: '500',
        ...options.style
      },
      icon: '🎉',
      ...options
    })
  },

  error: (message, options = {}) => {
    toast.error(message, {
      duration: 5000,
      position: 'top-right',
      style: {
        background: 'linear-gradient(135deg, #FF4B4B 0%, #FF1744 100%)',
        color: 'white',
        borderRadius: '12px',
        padding: '16px',
        fontWeight: '500',
        ...options.style
      },
      icon: '⚠️',
      ...options
    })
  },

  info: (message, options = {}) => {
    toast(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: 'linear-gradient(135deg, #0066FF 0%, #00CCFF 100%)',
        color: 'white',
        borderRadius: '12px',
        padding: '16px',
        fontWeight: '500',
        ...options.style
      },
      icon: 'ℹ️',
      ...options
    })
  },

  loading: (message, options = {}) => {
    return toast.loading(message, {
      position: 'top-right',
      style: {
        background: 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)',
        color: 'white',
        borderRadius: '12px',
        padding: '16px',
        fontWeight: '500',
        ...options.style
      },
      ...options
    })
  },

  custom: (component, options = {}) => {
    toast.custom(component, {
      duration: 4000,
      position: 'top-right',
      ...options
    })
  }
}

// Custom Toast Component
const CustomToast = ({ t, message, type, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5" />
      case 'error':
        return <AlertCircle className="w-5 h-5" />
      case 'info':
        return <Info className="w-5 h-5" />
      default:
        return null
    }
  }

  const getGradient = () => {
    switch (type) {
      case 'success':
        return 'from-green-500 to-green-600'
      case 'error':
        return 'from-red-500 to-red-600'
      case 'info':
        return 'from-blue-500 to-blue-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 overflow-hidden`}
    >
      <div className={`flex-shrink-0 w-2 bg-gradient-to-b ${getGradient()}`} />
      <div className="flex-1 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getGradient()} flex items-center justify-center text-white`}>
              {getIcon()}
            </div>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                toast.dismiss(t.id)
                onClose?.()
              }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Notification System Component
const NotificationSystem = () => {
  return (
    <>
      <Toaster
        position="top-right"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          // Default options for specific types
          success: {
            style: {
              background: 'linear-gradient(135deg, #00FF88 0%, #00CC66 100%)',
            },
          },
          error: {
            style: {
              background: 'linear-gradient(135deg, #FF4B4B 0%, #FF1744 100%)',
            },
          },
        }}
      />
      <style jsx>{`
        @keyframes enter {
          0% {
            transform: translate3d(0, -200%, 0) scale(.6);
            opacity: 0.5;
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
          }
        }
        @keyframes leave {
          0% {
            transform: translate3d(0, 0, -1px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate3d(0, -150%, -1px) scale(.6);
            opacity: 0;
          }
        }
        .animate-enter {
          animation: enter 0.35s cubic-bezier(.21,1.02,.73,1) forwards;
        }
        .animate-leave {
          animation: leave 0.4s cubic-bezier(.06,.71,.55,1) forwards;
        }
      `}</style>
    </>
  )
}

// Advanced notification presets
export const notificationPresets = {
  consultationBooked: () => {
    notify.success(
      "🎉 Consultation booked! I'll contact you within 24 hours to confirm your session.",
      { duration: 6000 }
    )
  },

  messageConfirmed: (senderName) => {
    notify.success(
      `Thank you ${senderName}! Your message has been sent successfully. I'll get back to you within 24 hours.`,
      { duration: 5000 }
    )
  },

  formError: (field) => {
    notify.error(
      `Please check the ${field} field and try again.`,
      { duration: 4000 }
    )
  },

  networkError: () => {
    notify.error(
      "Connection error. Please check your internet and try again.",
      { duration: 5000 }
    )
  },

  validationError: (message) => {
    notify.error(message, { duration: 4000 })
  },

  portfolioLiked: () => {
    notify.info("Thanks for the interest! Want to discuss a similar project?")
  },

  newsletterSignup: () => {
    notify.success("🚀 Welcome aboard! You'll receive automation tips and insights.")
  }
}

export default NotificationSystem