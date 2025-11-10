// Progress - Strength chart, body photo slider, nutrition radar
import { Chart, Trophy, Fire } from "./icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { ProgressGraph } from "./illustrations";

export const ProgressScreen = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8">Progress Tracking</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress View */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Stats & Charts</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-y-auto">
                {/* Header */}
                <div className="p-6">
                  <h2 className="mb-2">Your Progress</h2>
                  <p className="text-muted-foreground">Track your fitness journey</p>
                </div>

                {/* Tabs */}
                <div className="px-6 mb-6">
                  <Tabs defaultValue="strength" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-surface">
                      <TabsTrigger 
                        value="strength" 
                        className="data-[state=active]:bg-[#B8FF37] data-[state=active]:text-[#121212]"
                      >
                        Strength
                      </TabsTrigger>
                      <TabsTrigger 
                        value="body" 
                        className="data-[state=active]:bg-[#B8FF37] data-[state=active]:text-[#121212]"
                      >
                        Body
                      </TabsTrigger>
                      <TabsTrigger 
                        value="nutrition" 
                        className="data-[state=active]:bg-[#B8FF37] data-[state=active]:text-[#121212]"
                      >
                        Nutrition
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Strength Chart */}
                <div className="px-6 mb-6">
                  <div className="bg-surface rounded-2xl p-5 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h4>Bench Press</h4>
                      <Chart className="w-5 h-5 text-[#B8FF37]" />
                    </div>
                    
                    <div className="mb-4">
                      <ProgressGraph data={[30, 45, 60, 75, 85]} />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#B8FF37]">85kg</div>
                        <div className="text-muted-foreground">Current</div>
                      </div>
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#00E5FF]">+15kg</div>
                        <div className="text-muted-foreground">Gain</div>
                      </div>
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#FF0055]">100kg</div>
                        <div className="text-muted-foreground">Goal</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exercise List */}
                <div className="px-6 mb-6">
                  <h4 className="mb-3">Other Lifts</h4>
                  <div className="space-y-3">
                    <div className="bg-surface rounded-xl p-4 border border-border flex items-center justify-between">
                      <div>
                        <div className="mb-1">Squat</div>
                        <div className="text-muted-foreground">120kg</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#B8FF37]">+8%</div>
                        <div className="text-muted-foreground">vs last month</div>
                      </div>
                    </div>
                    <div className="bg-surface rounded-xl p-4 border border-border flex items-center justify-between">
                      <div>
                        <div className="mb-1">Deadlift</div>
                        <div className="text-muted-foreground">140kg</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#B8FF37]">+12%</div>
                        <div className="text-muted-foreground">vs last month</div>
                      </div>
                    </div>
                    <div className="bg-surface rounded-xl p-4 border border-border flex items-center justify-between">
                      <div>
                        <div className="mb-1">Overhead Press</div>
                        <div className="text-muted-foreground">55kg</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#00E5FF]">+5%</div>
                        <div className="text-muted-foreground">vs last month</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weekly Summary */}
                <div className="px-6 pb-6">
                  <div className="bg-surface rounded-2xl p-5 border border-border">
                    <h4 className="mb-4">This Week</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Total Volume</span>
                        <span className="text-[#B8FF37]">12,450 kg</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Workouts</span>
                        <span>5</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">PRs Set</span>
                        <span className="text-[#FF0055]">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body & Nutrition View */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Body & Nutrition</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-y-auto">
                {/* Header */}
                <div className="p-6">
                  <h2 className="mb-6">Body Progress</h2>

                  {/* Photo Slider */}
                  <div className="bg-surface rounded-2xl p-4 border border-border mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-muted-foreground">Progress Photos</span>
                      <span className="text-[#B8FF37]">Week 12</span>
                    </div>
                    
                    {/* Photo Placeholder */}
                    <div className="bg-[#2A2A2A] rounded-xl mb-3 flex items-center justify-center" style={{ height: '240px' }}>
                      <div className="text-center text-muted-foreground">
                        <Trophy className="w-12 h-12 mx-auto mb-2" />
                        <div>Front View</div>
                      </div>
                    </div>

                    {/* Photo Carousel Dots */}
                    <div className="flex justify-center gap-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#B8FF37]' : 'bg-[#2A2A2A]'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Body Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="text-muted-foreground mb-1">Weight</div>
                      <div className="text-[#B8FF37]" style={{ fontSize: '24px' }}>72.5kg</div>
                      <div className="text-muted-foreground">-2.5kg</div>
                    </div>
                    <div className="bg-surface rounded-xl p-4 border border-border">
                      <div className="text-muted-foreground mb-1">Body Fat</div>
                      <div className="text-[#00E5FF]" style={{ fontSize: '24px' }}>15.2%</div>
                      <div className="text-muted-foreground">-3.8%</div>
                    </div>
                  </div>

                  {/* Measurements */}
                  <h4 className="mb-3">Measurements</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Chest</span>
                      <span>102 cm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Waist</span>
                      <span>82 cm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Arms</span>
                      <span>38 cm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Legs</span>
                      <span>58 cm</span>
                    </div>
                  </div>

                  {/* Nutrition Radar */}
                  <h4 className="mb-3">Nutrition Balance</h4>
                  <div className="bg-surface rounded-2xl p-5 border border-border mb-6">
                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <svg width="192" height="192" viewBox="0 0 192 192">
                        {/* Background hexagon */}
                        <polygon
                          points="96,20 150,58 150,134 96,172 42,134 42,58"
                          fill="none"
                          stroke="#2A2A2A"
                          strokeWidth="2"
                        />
                        {/* Data hexagon */}
                        <polygon
                          points="96,35 135,63 130,125 96,150 62,125 57,63"
                          fill="#B8FF37"
                          fillOpacity="0.2"
                          stroke="#B8FF37"
                          strokeWidth="2"
                        />
                        {/* Labels */}
                        <text x="96" y="15" textAnchor="middle" fill="#A0A0A0" fontSize="12">Protein</text>
                        <text x="160" y="60" textAnchor="start" fill="#A0A0A0" fontSize="12">Carbs</text>
                        <text x="160" y="140" textAnchor="start" fill="#A0A0A0" fontSize="12">Fats</text>
                        <text x="96" y="185" textAnchor="middle" fill="#A0A0A0" fontSize="12">Fiber</text>
                        <text x="32" y="140" textAnchor="end" fill="#A0A0A0" fontSize="12">Water</text>
                        <text x="32" y="60" textAnchor="end" fill="#A0A0A0" fontSize="12">Vitamins</text>
                      </svg>
                    </div>
                    <div className="text-center text-muted-foreground">
                      Great balance this week!
                    </div>
                  </div>

                  {/* Weekly Nutrition */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#B8FF37]">2,100</div>
                      <div className="text-muted-foreground">Avg Cals</div>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#00E5FF]">150g</div>
                      <div className="text-muted-foreground">Protein</div>
                    </div>
                    <div className="bg-surface rounded-xl p-3 text-center border border-border">
                      <div className="text-[#FF0055]">3.2L</div>
                      <div className="text-muted-foreground">Water</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Notes */}
        <div className="mt-8 bg-surface p-6 rounded-2xl border border-border">
          <h3 className="mb-4">Progress Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
            <div>
              <h4 className="text-foreground mb-2">Strength Tracking</h4>
              <ul className="space-y-1">
                <li>• Interactive progress charts</li>
                <li>• Multiple exercise tracking</li>
                <li>• Personal records highlight</li>
                <li>• Goal progress indicators</li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-2">Body Progress</h4>
              <ul className="space-y-1">
                <li>• Photo comparison slider</li>
                <li>• Weight & body fat tracking</li>
                <li>• Measurement history</li>
                <li>• Visual progress timeline</li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-2">Nutrition</h4>
              <ul className="space-y-1">
                <li>• Radar chart visualization</li>
                <li>• Macro balance tracking</li>
                <li>• Weekly averages</li>
                <li>• Hydration monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
