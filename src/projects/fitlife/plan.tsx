// Plan - Weekly view with pager, heat map, adapt modal
import { Calendar, Lightning, Dumbbell, Running, Fire } from "./icons";
import { Button } from "../ui/button";
import { AIOrb } from "./ai-orb";

export const PlanScreen = () => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const heatMapData = [3, 5, 4, 0, 6, 4, 2]; // Intensity levels 0-6

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8">Weekly Plan</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plan View */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Weekly Overview</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-y-auto">
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <button className="text-muted-foreground">‹</button>
                    <div className="text-center">
                      <h3>This Week</h3>
                      <div className="text-muted-foreground">Nov 10 - Nov 16</div>
                    </div>
                    <button className="text-muted-foreground">›</button>
                  </div>

                  {/* Heat Map */}
                  <div className="bg-surface rounded-2xl p-4 border border-border mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-muted-foreground">Activity</span>
                      <Fire className="w-4 h-4 text-[#FF0055]" />
                    </div>
                    <div className="flex gap-2">
                      {weekDays.map((day, i) => (
                        <div key={day} className="flex-1 text-center">
                          <div className="text-muted-foreground mb-2">{day}</div>
                          <div 
                            className="h-12 rounded-lg"
                            style={{
                              backgroundColor: heatMapData[i] === 0 ? '#2A2A2A' : 
                                heatMapData[i] <= 2 ? '#B8FF37' :
                                heatMapData[i] <= 4 ? '#00E5FF' : '#FF0055',
                              opacity: heatMapData[i] === 0 ? 0.3 : 0.3 + (heatMapData[i] * 0.1)
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Week Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#B8FF37] mb-1">5</div>
                      <div className="text-muted-foreground">Workouts</div>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#00E5FF] mb-1">225min</div>
                      <div className="text-muted-foreground">Active</div>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#FF0055] mb-1">1,420</div>
                      <div className="text-muted-foreground">Calories</div>
                    </div>
                  </div>
                </div>

                {/* Workout List */}
                <div className="px-6 pb-6 space-y-3">
                  {/* Monday */}
                  <div className="bg-surface rounded-2xl p-4 border border-[#B8FF37]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#B8FF37] rounded-full" />
                        <span className="text-muted-foreground">Monday</span>
                      </div>
                      <span className="text-[#B8FF37]">✓ Completed</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#B8FF37] bg-opacity-20 rounded-xl flex items-center justify-center">
                        <Dumbbell className="w-5 h-5 text-[#B8FF37]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">Upper Body Strength</h4>
                        <div className="text-muted-foreground">8 exercises • 45 min</div>
                      </div>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className="bg-surface rounded-2xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#00E5FF] rounded-full" />
                        <span className="text-muted-foreground">Tuesday</span>
                      </div>
                      <Lightning className="w-4 h-4 text-[#00E5FF]" />
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#00E5FF] bg-opacity-20 rounded-xl flex items-center justify-center">
                        <Running className="w-5 h-5 text-[#00E5FF]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">Cardio Blast</h4>
                        <div className="text-muted-foreground">5 exercises • 30 min</div>
                      </div>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className="bg-surface rounded-2xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#2A2A2A] rounded-full" />
                        <span className="text-muted-foreground">Wednesday</span>
                      </div>
                      <span className="text-muted-foreground">Rest Day</span>
                    </div>
                    <div className="text-muted-foreground">Active recovery recommended</div>
                  </div>

                  {/* Thursday */}
                  <div className="bg-surface rounded-2xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#B8FF37] rounded-full" />
                        <span className="text-muted-foreground">Thursday</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#B8FF37] bg-opacity-20 rounded-xl flex items-center justify-center">
                        <Dumbbell className="w-5 h-5 text-[#B8FF37]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">Lower Body Power</h4>
                        <div className="text-muted-foreground">6 exercises • 40 min</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Adapt Button */}
                <div className="px-6 pb-6">
                  <Button className="w-full bg-gradient-to-r from-[#B8FF37] to-[#00E5FF] text-[#121212] hover:opacity-90 rounded-2xl py-6 flex items-center justify-center gap-2">
                    <Lightning className="w-5 h-5" />
                    AI Adapt Plan
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Adapt Modal */}
          <div>
            <h4 className="mb-4 text-muted-foreground">AI Adaptation Modal</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-hidden glass-card flex flex-col p-8">
                {/* AI Orb */}
                <div className="flex justify-center mb-8">
                  <AIOrb size={96} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-center mb-3">AI Plan Adaptation</h2>
                  <p className="text-center text-muted-foreground mb-8">
                    Based on your recent activity and recovery, I suggest:
                  </p>

                  {/* Suggestions */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-surface rounded-2xl p-4 border border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#B8FF37] bg-opacity-20 rounded-lg flex items-center justify-center">
                          <span>1</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1 text-[#B8FF37]">Reduce Intensity</h4>
                          <p className="text-muted-foreground">Your recovery score is low. Let's reduce Thursday's workout intensity by 20%</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-surface rounded-2xl p-4 border border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#00E5FF] bg-opacity-20 rounded-lg flex items-center justify-center">
                          <span>2</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1 text-[#00E5FF]">Add Rest Day</h4>
                          <p className="text-muted-foreground">Consider adding a rest day on Saturday to optimize recovery</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-surface rounded-2xl p-4 border border-border">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#FF0055] bg-opacity-20 rounded-lg flex items-center justify-center">
                          <span>3</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="mb-1 text-[#FF0055]">Focus Area</h4>
                          <p className="text-muted-foreground">Your core exercises are progressing well. Let's add progressive overload</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full bg-[#B8FF37] text-[#121212] hover:bg-[#A0E030] neon-glow rounded-2xl py-6">
                    Apply Changes
                  </Button>
                  <Button variant="outline" className="w-full border-border rounded-2xl py-6">
                    Keep Current Plan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Notes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface p-6 rounded-2xl border border-border">
            <h3 className="mb-4">Plan Features</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Weekly navigation pager</li>
              <li>• Activity heat map visualization</li>
              <li>• Completed workouts marked</li>
              <li>• Color-coded workout types</li>
              <li>• Quick stats overview</li>
              <li>• AI-powered adaptations</li>
            </ul>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-border">
            <h3 className="mb-4">AI Adaptation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Animated AI orb indicator</li>
              <li>• Personalized suggestions</li>
              <li>• Recovery-based adjustments</li>
              <li>• Progressive overload recommendations</li>
              <li>• Glass card modal overlay</li>
              <li>• Clear accept/decline actions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
