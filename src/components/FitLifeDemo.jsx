import React, { useState } from 'react'
import { Heart, TrendingUp, Users, Star, Play, Target, Calendar } from 'lucide-react'

const FitLifeDemo = () => {
  const [currentScreen, setCurrentScreen] = useState('cover')

  const screens = [
    { id: 'cover', name: 'Welcome' },
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'workout', name: 'Workout' },
    { id: 'progress', name: 'Progress' },
    { id: 'profile', name: 'Profile' },
    { id: 'plan', name: 'Plan' }
  ]

  const CoverScreen = () => (
    <div className="h-full bg-gradient-to-br from-green-500 to-blue-600 flex flex-col justify-center items-center text-white p-8">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
        <Heart className="w-10 h-10 text-green-500" />
      </div>
      <h1 className="text-4xl font-bold mb-4">FitLife</h1>
      <p className="text-xl text-center mb-8">Your AI-Powered Fitness Journey Starts Here</p>
      <button 
        onClick={() => setCurrentScreen('dashboard')}
        className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Started
      </button>
    </div>
  )

  const DashboardScreen = () => (
    <div className="h-full bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good Morning!</h1>
          <p className="text-gray-600">Ready for today's workout?</p>
        </div>
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded-xl">
          <Target className="w-6 h-6 mb-2" />
          <div className="text-2xl font-bold">8,500</div>
          <div className="text-sm opacity-90">Today's Goal</div>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-xl">
          <TrendingUp className="w-6 h-6 mb-2" />
          <div className="text-2xl font-bold">1,240</div>
          <div className="text-sm opacity-90">Calories Burned</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 mb-4">
        <h3 className="font-semibold mb-3 flex items-center">
          <span className="mr-2">🤖</span>
          AI Recommendation
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          Great progress yesterday! Try a 15-minute HIIT session today to boost your metabolism.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
          Start Workout
        </button>
      </div>

      <div className="bg-white rounded-xl p-4">
        <h3 className="font-semibold mb-3">This Week's Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Workouts Completed</span>
            <span className="font-semibold">5/7</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Average Duration</span>
            <span className="font-semibold">35 min</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Streak</span>
            <span className="font-semibold text-green-600">12 days</span>
          </div>
        </div>
      </div>
    </div>
  )

  const WorkoutScreen = () => (
    <div className="h-full bg-black text-white relative">
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <button 
          onClick={() => setCurrentScreen('dashboard')}
          className="text-white hover:text-gray-300"
        >
          ← Back
        </button>
        <div className="bg-red-500 px-3 py-1 rounded-full text-sm">
          LIVE
        </div>
      </div>

      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Play className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold mb-2">HIIT Cardio Blast</h2>
          <p className="text-gray-300 mb-6">15 minutes • High Intensity</p>
          
          <div className="mb-8">
            <div className="text-4xl font-bold mb-2">00:45</div>
            <div className="text-sm text-gray-300">Next: Jump Squats</div>
          </div>

          <div className="space-y-2">
            <div className="bg-white bg-opacity-10 rounded-lg p-3 flex justify-between">
              <span>Heart Rate</span>
              <span className="text-red-400">142 BPM</span>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-3 flex justify-between">
              <span>Calories</span>
              <span className="text-green-400">85 kcal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex justify-center space-x-4">
          <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">⏸</span>
          </button>
        </div>
      </div>
    </div>
  )

  const ProgressScreen = () => (
    <div className="h-full bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h1>
      
      <div className="bg-white rounded-xl p-6 mb-4">
        <h3 className="font-semibold mb-4">Weekly Goal</h3>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div className="bg-green-500 h-3 rounded-full" style={{width: '75%'}}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>75% Complete</span>
          <span>3/4 Goals</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-500 mb-1">12</div>
          <div className="text-sm text-gray-600">Day Streak</div>
        </div>
        <div className="bg-white rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-500 mb-1">4.2</div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 mb-4">
        <h3 className="font-semibold mb-3">Recent Achievements</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              🏆
            </div>
            <div>
              <div className="font-medium text-sm">7-Day Streak</div>
              <div className="text-xs text-gray-500">Completed 2 days ago</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              💪
            </div>
            <div>
              <div className="font-medium text-sm">First HIIT Session</div>
              <div className="text-xs text-gray-500">Completed 5 days ago</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4">
        <h3 className="font-semibold mb-3">This Month</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">28</div>
            <div className="text-xs text-gray-500">Workouts</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">14h</div>
            <div className="text-xs text-gray-500">Total Time</div>
          </div>
        </div>
      </div>
    </div>
  )

  const ProfileScreen = () => (
    <div className="h-full bg-gray-50 p-6">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white font-bold">A</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Alex Johnson</h2>
        <p className="text-gray-600">Fitness Enthusiast</p>
      </div>

      <div className="bg-white rounded-xl p-4 mb-4">
        <h3 className="font-semibold mb-3">Stats</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">156</div>
            <div className="text-xs text-gray-500">Workouts</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">65kg</div>
            <div className="text-xs text-gray-500">Weight</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">5'8"</div>
            <div className="text-xs text-gray-500">Height</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="bg-white rounded-xl p-4 flex justify-between items-center">
          <span className="font-medium">Notifications</span>
          <div className="w-12 h-6 bg-green-500 rounded-full relative">
            <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 flex justify-between items-center">
          <span className="font-medium">Privacy Settings</span>
          <span className="text-gray-400">→</span>
        </div>
        
        <div className="bg-white rounded-xl p-4 flex justify-between items-center">
          <span className="font-medium">Help & Support</span>
          <span className="text-gray-400">→</span>
        </div>
        
        <div className="bg-white rounded-xl p-4 flex justify-between items-center">
          <span className="font-medium text-red-600">Sign Out</span>
          <span className="text-gray-400">→</span>
        </div>
      </div>
    </div>
  )

  const PlanScreen = () => (
    <div className="h-full bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Workout Plan</h1>
      
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold mb-2">🔥 Fat Burn Challenge</h3>
        <p className="text-sm opacity-90 mb-4">4-week intensive program designed by AI</p>
        <div className="flex justify-between items-center">
          <span className="text-sm">Week 2 of 4</span>
          <span className="text-sm">Progress: 45%</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Today - HIIT Cardio</h4>
            <span className="text-sm text-green-600 font-medium">15 min</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">High-intensity interval training</p>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg">
            Start Workout
          </button>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-gray-400">Tomorrow - Strength</h4>
            <span className="text-sm text-gray-400">25 min</span>
          </div>
          <p className="text-sm text-gray-500 mb-3">Upper body resistance training</p>
          <div className="w-full bg-gray-200 py-2 rounded-lg text-center text-gray-500">
            Locked
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-gray-400">Wed - Yoga Flow</h4>
            <span className="text-sm text-gray-400">30 min</span>
          </div>
          <p className="text-sm text-gray-500 mb-3">Flexibility and mindfulness</p>
          <div className="w-full bg-gray-200 py-2 rounded-lg text-center text-gray-500">
            Locked
          </div>
        </div>
      </div>
    </div>
  )

  const renderScreen = () => {
    switch(currentScreen) {
      case 'cover': return <CoverScreen />
      case 'dashboard': return <DashboardScreen />
      case 'workout': return <WorkoutScreen />
      case 'progress': return <ProgressScreen />
      case 'profile': return <ProfileScreen />
      case 'plan': return <PlanScreen />
      default: return <CoverScreen />
    }
  }

  return (
    <div className="w-full h-full">
      {renderScreen()}
    </div>
  )
}

export default FitLifeDemo