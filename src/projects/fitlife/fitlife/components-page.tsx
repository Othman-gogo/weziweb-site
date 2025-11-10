// Components Page - All UI components showcase
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { Dumbbell, Running, Fire, Heart, Trophy } from "./icons";
import { AIOrb } from "./ai-orb";

export const ComponentsPage = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-2">Components</h1>
        <p className="text-muted-foreground mb-12">Complete UI component library</p>

        {/* Buttons */}
        <section className="mb-12">
          <h3 className="mb-6">Buttons</h3>
          <div className="flex flex-wrap gap-4 bg-surface p-6 rounded-2xl border border-border">
            <Button className="bg-[#B8FF37] text-[#121212] hover:bg-[#A0E030] neon-glow">
              Primary
            </Button>
            <Button className="bg-[#00E5FF] text-[#121212] hover:bg-[#00CCE6] neon-glow-cyan">
              Secondary
            </Button>
            <Button variant="outline" className="border-[#B8FF37] text-[#B8FF37] hover:bg-[#B8FF37] hover:text-[#121212]">
              Outline
            </Button>
            <Button variant="ghost" className="text-[#B8FF37] hover:bg-[#2A2A2A]">
              Ghost
            </Button>
            <Button disabled className="bg-[#2A2A2A] text-[#666666]">
              Disabled
            </Button>
            <Button className="bg-[#FF0055] text-white hover:bg-[#E0004D] neon-glow-magenta">
              Destructive
            </Button>
          </div>
        </section>

        {/* Chips & Badges */}
        <section className="mb-12">
          <h3 className="mb-6">Chips & Badges</h3>
          <div className="flex flex-wrap gap-3 bg-surface p-6 rounded-2xl border border-border">
            <Badge className="bg-[#B8FF37] text-[#121212]">Active</Badge>
            <Badge className="bg-[#00E5FF] text-[#121212]">Cardio</Badge>
            <Badge className="bg-[#FF0055] text-white">High Intensity</Badge>
            <Badge variant="outline" className="border-[#B8FF37] text-[#B8FF37]">Beginner</Badge>
            <Badge variant="outline" className="border-[#00E5FF] text-[#00E5FF]">Intermediate</Badge>
            <Badge className="bg-[#2A2A2A] text-[#A0A0A0]">Rest Day</Badge>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-12">
          <h3 className="mb-6">Icons (24px, 2px stroke)</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-6 bg-surface p-6 rounded-2xl border border-border">
            <Dumbbell className="w-6 h-6 text-[#B8FF37]" />
            <Running className="w-6 h-6 text-[#00E5FF]" />
            <Fire className="w-6 h-6 text-[#FF0055]" />
            <Heart className="w-6 h-6 text-[#FF0055]" />
            <Trophy className="w-6 h-6 text-[#B8FF37]" />
          </div>
        </section>

        {/* Toggles & Switches */}
        <section className="mb-12">
          <h3 className="mb-6">Toggles & Switches</h3>
          <div className="space-y-4 bg-surface p-6 rounded-2xl border border-border">
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Notifications</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span>Auto-track Workouts</span>
              <Switch />
            </div>
          </div>
        </section>

        {/* Sliders */}
        <section className="mb-12">
          <h3 className="mb-6">Sliders</h3>
          <div className="space-y-6 bg-surface p-6 rounded-2xl border border-border">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Intensity</span>
                <span>75%</span>
              </div>
              <Slider defaultValue={[75]} max={100} step={1} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Duration</span>
                <span>45 min</span>
              </div>
              <Slider defaultValue={[45]} max={120} step={5} />
            </div>
          </div>
        </section>

        {/* Progress Rings */}
        <section className="mb-12">
          <h3 className="mb-6">Progress Rings</h3>
          <div className="flex flex-wrap gap-8 bg-surface p-6 rounded-2xl border border-border">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="#2A2A2A" strokeWidth="8" fill="none" />
                <circle 
                  cx="64" 
                  cy="64" 
                  r="56" 
                  stroke="#B8FF37" 
                  strokeWidth="8" 
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.75)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-[#B8FF37]">75%</div>
                <div className="text-muted-foreground">Protein</div>
              </div>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="#2A2A2A" strokeWidth="8" fill="none" />
                <circle 
                  cx="64" 
                  cy="64" 
                  r="56" 
                  stroke="#00E5FF" 
                  strokeWidth="8" 
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.60)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-[#00E5FF]">60%</div>
                <div className="text-muted-foreground">Carbs</div>
              </div>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="#2A2A2A" strokeWidth="8" fill="none" />
                <circle 
                  cx="64" 
                  cy="64" 
                  r="56" 
                  stroke="#FF0055" 
                  strokeWidth="8" 
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.45)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-[#FF0055]">45%</div>
                <div className="text-muted-foreground">Fats</div>
              </div>
            </div>
          </div>
        </section>

        {/* Avatars */}
        <section className="mb-12">
          <h3 className="mb-6">Avatars</h3>
          <div className="flex flex-wrap gap-4 bg-surface p-6 rounded-2xl border border-border">
            <Avatar className="w-16 h-16 border-2 border-[#B8FF37]">
              <AvatarFallback className="bg-[#B8FF37] text-[#121212]">AK</AvatarFallback>
            </Avatar>
            <Avatar className="w-16 h-16 border-2 border-[#00E5FF]">
              <AvatarFallback className="bg-[#00E5FF] text-[#121212]">SM</AvatarFallback>
            </Avatar>
            <Avatar className="w-16 h-16 border-2 border-[#FF0055]">
              <AvatarFallback className="bg-[#FF0055] text-white">JD</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-12">
          <h3 className="mb-6">Tabs</h3>
          <div className="bg-surface p-6 rounded-2xl border border-border">
            <Tabs defaultValue="today" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#2A2A2A]">
                <TabsTrigger value="today" className="data-[state=active]:bg-[#B8FF37] data-[state=active]:text-[#121212]">
                  Today
                </TabsTrigger>
                <TabsTrigger value="week" className="data-[state=active]:bg-[#B8FF37] data-[state=active]:text-[#121212]">
                  Week
                </TabsTrigger>
                <TabsTrigger value="month" className="data-[state=active]:bg-[#B8FF37] data-[state=active]:text-[#121212]">
                  Month
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h3 className="mb-6">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Dumbbell className="w-6 h-6 text-[#B8FF37]" />
                <h4>Upper Body</h4>
              </div>
              <p className="text-muted-foreground mb-4">8 exercises • 45 min</p>
              <Progress value={65} className="mb-2" />
              <div className="text-muted-foreground">65% complete</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Running className="w-6 h-6 text-[#00E5FF]" />
                <h4>Cardio Blast</h4>
              </div>
              <p className="text-muted-foreground mb-4">5 exercises • 30 min</p>
              <Progress value={30} className="mb-2" />
              <div className="text-muted-foreground">30% complete</div>
            </div>
          </div>
        </section>

        {/* AI Orb */}
        <section className="mb-12">
          <h3 className="mb-6">AI Orb (Animated)</h3>
          <div className="flex items-center gap-8 bg-surface p-6 rounded-2xl border border-border">
            <AIOrb size={64} />
            <AIOrb size={48} />
            <AIOrb size={32} />
          </div>
        </section>

        {/* Loading */}
        <section className="mb-12">
          <h3 className="mb-6">Loading States</h3>
          <div className="space-y-4 bg-surface p-6 rounded-2xl border border-border">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#B8FF37] rounded-full animate-pulse" />
              <span>Loading...</span>
            </div>
            <div className="flex items-center gap-3">
              <AIOrb size={24} />
              <span>AI Processing...</span>
            </div>
            <Progress value={45} />
          </div>
        </section>

        {/* Toast Examples */}
        <section>
          <h3 className="mb-6">Toast & Modals</h3>
          <div className="space-y-4">
            <div className="bg-[#B8FF37] text-[#121212] p-4 rounded-xl flex items-center gap-3">
              <span>✓</span>
              <span>Workout completed!</span>
            </div>
            <div className="bg-[#FF0055] text-white p-4 rounded-xl flex items-center gap-3">
              <span>!</span>
              <span>Failed to save progress</span>
            </div>
            <div className="bg-[#00E5FF] text-[#121212] p-4 rounded-xl flex items-center gap-3">
              <span>ℹ</span>
              <span>New workout available</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
