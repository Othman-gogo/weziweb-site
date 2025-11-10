// Dashboard - Today view with greeting, streak, session card, nutrition rings, quick log
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Dumbbell, Fire, Heart, Water, Lightning, Trophy } from "./icons";

export const DashboardScreen = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8">Today Dashboard</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Light Mode */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Dark Mode (Default)</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-y-auto">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="text-muted-foreground mb-1">Good Morning ☀️</div>
                  <h2 className="mb-0">Alex</h2>
                </div>

                {/* Streak Card */}
                <div className="px-6 mb-4">
                  <div className="bg-surface rounded-2xl p-5 border border-border neon-glow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Fire className="w-6 h-6 text-[#FF0055]" />
                        <span>Streak</span>
                      </div>
                      <span className="text-[#B8FF37]">🔥 12 days</span>
                    </div>
                    <Progress value={80} className="mb-2" />
                    <div className="text-muted-foreground">Keep going! 3 more days to beat your record</div>
                  </div>
                </div>

                {/* Today's Session */}
                <div className="px-6 mb-4">
                  <h4 className="mb-3">Today's Workout</h4>
                  <div className="bg-surface rounded-2xl p-5 border border-border">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#B8FF37] bg-opacity-20 rounded-xl flex items-center justify-center">
                        <Dumbbell className="w-6 h-6 text-[#B8FF37]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">Upper Body Strength</h4>
                        <div className="text-muted-foreground">8 exercises • 45 min</div>
                      </div>
                      <Lightning className="w-5 h-5 text-[#B8FF37]" />
                    </div>
                    <Button className="w-full bg-[#B8FF37] text-[#121212] hover:bg-[#A0E030] neon-glow rounded-xl py-5">
                      Start Workout
                    </Button>
                  </div>
                </div>

                {/* Nutrition Rings */}
                <div className="px-6 mb-4">
                  <h4 className="mb-3">Nutrition</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {/* Protein Ring */}
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle cx="32" cy="32" r="28" stroke="#2A2A2A" strokeWidth="4" fill="none" />
                          <circle 
                            cx="32" 
                            cy="32" 
                            r="28" 
                            stroke="#B8FF37" 
                            strokeWidth="4" 
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - 0.75)}`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[#B8FF37]">75%</div>
                      </div>
                      <div className="text-center text-muted-foreground">Protein</div>
                      <div className="text-center">120g</div>
                    </div>

                    {/* Carbs Ring */}
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle cx="32" cy="32" r="28" stroke="#2A2A2A" strokeWidth="4" fill="none" />
                          <circle 
                            cx="32" 
                            cy="32" 
                            r="28" 
                            stroke="#00E5FF" 
                            strokeWidth="4" 
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - 0.60)}`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[#00E5FF]">60%</div>
                      </div>
                      <div className="text-center text-muted-foreground">Carbs</div>
                      <div className="text-center">180g</div>
                    </div>

                    {/* Fats Ring */}
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg className="w-16 h-16 -rotate-90">
                          <circle cx="32" cy="32" r="28" stroke="#2A2A2A" strokeWidth="4" fill="none" />
                          <circle 
                            cx="32" 
                            cy="32" 
                            r="28" 
                            stroke="#FF0055" 
                            strokeWidth="4" 
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - 0.45)}`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[#FF0055]">45%</div>
                      </div>
                      <div className="text-center text-muted-foreground">Fats</div>
                      <div className="text-center">60g</div>
                    </div>
                  </div>
                </div>

                {/* Quick Log */}
                <div className="px-6 mb-6">
                  <h4 className="mb-3">Quick Log</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-surface border border-border rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#B8FF37] transition-all">
                      <Water className="w-6 h-6 text-[#00E5FF]" />
                      <span>Water</span>
                    </button>
                    <button className="bg-surface border border-border rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#B8FF37] transition-all">
                      <Heart className="w-6 h-6 text-[#FF0055]" />
                      <span>Weight</span>
                    </button>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#B8FF37] mb-1">💪</div>
                      <div>12</div>
                      <div className="text-muted-foreground">Workouts</div>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#00E5FF] mb-1">🔥</div>
                      <div>3,420</div>
                      <div className="text-muted-foreground">Calories</div>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#FF0055] mb-1">⏱️</div>
                      <div>540min</div>
                      <div className="text-muted-foreground">Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Notes */}
          <div className="space-y-6">
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <h3 className="mb-4">Dashboard Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#B8FF37]">✓</span>
                  <span>Personalized greeting based on time of day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8FF37]">✓</span>
                  <span>Streak tracking with progress indicator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8FF37]">✓</span>
                  <span>Quick access to today's workout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8FF37]">✓</span>
                  <span>Nutrition rings for macro tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8FF37]">✓</span>
                  <span>Quick log buttons for common actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B8FF37]">✓</span>
                  <span>Weekly stats overview</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border">
              <h4 className="mb-3">Interaction States</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>• Cards have subtle hover effects</div>
                <div>• Quick log buttons highlight on hover</div>
                <div>• Primary CTA has neon glow</div>
                <div>• Smooth scrolling for content</div>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border">
              <h4 className="mb-3">Customization</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>• User name personalization</div>
                <div>• Workout recommendations</div>
                <div>• Nutrition goals adaptation</div>
                <div>• Streak milestone celebration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
