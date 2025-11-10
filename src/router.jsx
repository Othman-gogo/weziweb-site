import React from 'react'
import { createHashRouter } from 'react-router-dom'
import App from './App'
import TechFlowProject from './pages/TechFlowProject'
import FitLifeProject from './pages/FitLifeProject'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/projects/techflow',
    element: <TechFlowProject />
  },
  {
    path: '/projects/fitlife', 
    element: <FitLifeProject />
  }
])

export default router