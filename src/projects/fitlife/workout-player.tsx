// Workout Player - Timer, exercise GIF card, rest overlay, finish celebration
import { useState } from "react";
import { Button } from "../ui/button";
import { Timer, Heart, Fire } from "./icons";
import { WorkoutSilhouette } from "./illustrations";

export const WorkoutPlayerScreen = () => {
  const [showRest, setShowRest] = useState(false);
  const [showFinish, setShowFinish] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8">Workout Player</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Workout */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Active Exercise</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-6 flex items-center justify-between">
                  <button className="text-muted-foreground">✕</button>
                  <div className="text-center">
                    <div>Exercise 3 of 8</div>
                    <div className="text-muted-foreground">Upper Body</div>
                  </div>
                  <button className="text-muted-foreground">⋮</button>
                </div>

                {/* Progress */}
                <div className="px-6 mb-4">
                  <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-gradient-to-r from-[#B8FF37] to-[#00E5FF] rounded-full" />
                  </div>
                </div>

                {/* Exercise Card */}
                <div className="flex-1 px-6">
                  <div className="bg-surface rounded-3xl p-6 border border-border h-full flex flex-col">
                    {/* Exercise Illustration */}
                    <div className="bg-[#2A2A2A] rounded-2xl mb-6 flex items-center justify-center" style={{ height: '240px' }}>
                      <WorkoutSilhouette type="pushup" />
                    </div>

                    {/* Exercise Info */}
                    <div className="mb-6">
                      <h2 className="mb-2">Push-ups</h2>
                      <p className="text-muted-foreground">
                        Keep your body straight and lower yourself until your chest nearly touches the floor
                      </p>
                    </div>

                    {/* Timer */}
                    <div className="mb-6">
                      <div className="relative w-48 h-48 mx-auto">
                        <svg className="w-48 h-48 -rotate-90">
                          <circle cx="96" cy="96" r="88" stroke="#2A2A2A" strokeWidth="8" fill="none" />
                          <circle 
                            cx="96" 
                            cy="96" 
                            r="88" 
                            stroke="#B8FF37" 
                            strokeWidth="8" 
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 88}`}
                            strokeDashoffset={`${2 * Math.PI * 88 * 0.3}`}
                            strokeLinecap="round"
                            className="neon-glow"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div style={{ fontSize: '48px', fontWeight: 700 }} className="text-[#B8FF37]">0:42</div>
                          <div className="text-muted-foreground">of 1:00</div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#B8FF37] mb-1">15</div>
                        <div className="text-muted-foreground">Reps</div>
                      </div>
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#00E5FF] mb-1">3</div>
                        <div className="text-muted-foreground">Sets</div>
                      </div>
                      <div className="bg-background rounded-xl p-3 text-center">
                        <div className="text-[#FF0055] mb-1">120</div>
                        <div className="text-muted-foreground">Cals</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="p-6 flex items-center justify-center gap-6">
                  <button className="w-16 h-16 bg-surface border border-border rounded-full flex items-center justify-center">
                    ⏮
                  </button>
                  <button className="w-20 h-20 bg-[#B8FF37] text-[#121212] rounded-full flex items-center justify-center neon-glow">
                    ⏸
                  </button>
                  <button 
                    className="w-16 h-16 bg-surface border border-border rounded-full flex items-center justify-center"
                    onClick={() => setShowRest(true)}
                  >
                    ⏭
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rest Overlay */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Rest Period</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-hidden glass-card flex flex-col items-center justify-center p-8">
                {/* Rest Timer */}
                <div className="mb-8">
                  <div className="relative w-56 h-56 mx-auto">
                    <svg className="w-56 h-56 -rotate-90">
                      <circle cx="112" cy="112" r="104" stroke="#2A2A2A" strokeWidth="8" fill="none" />
                      <circle 
                        cx="112" 
                        cy="112" 
                        r="104" 
                        stroke="#00E5FF" 
                        strokeWidth="8" 
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 104}`}
                        strokeDashoffset={`${2 * Math.PI * 104 * 0.5}`}
                        strokeLinecap="round"
                        className="neon-glow-cyan"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div style={{ fontSize: '64px', fontWeight: 700 }} className="text-[#00E5FF]">0:30</div>
                      <div className="text-muted-foreground">Rest</div>
                    </div>
                  </div>
                </div>

                {/* Next Exercise */}
                <div className="text-center mb-8">
                  <div className="text-muted-foreground mb-2">Next Exercise</div>
                  <h3>Dumbbell Rows</h3>
                  <p className="text-muted-foreground">12 reps × 3 sets</p>
                </div>

                {/* Buttons */}
                <div className="space-y-3 w-full">
                  <Button 
                    className="w-full bg-[#00E5FF] text-[#121212] hover:bg-[#00CCE6] neon-glow-cyan rounded-2xl py-6"
                    onClick={() => setShowRest(false)}
                  >
                    Skip Rest
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-border text-muted-foreground rounded-2xl py-6"
                  >
                    Add 30s
                  </Button>
                </div>

                {/* Heart Rate */}
                <div className="mt-8 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#FF0055] animate-pulse" />
                  <span className="text-[#FF0055]">142 BPM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Finish Celebration */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Workout Complete</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-hidden flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#B8FF37]/10 to-background">
                {/* Celebration */}
                <div className="mb-8 text-center">
                  <div style={{ fontSize: '80px' }} className="mb-4">🎉</div>
                  <h2 className="mb-2">Workout Complete!</h2>
                  <p className="text-muted-foreground">Great job on your upper body workout</p>
                </div>

                {/* Stats Summary */}
                <div className="w-full bg-surface rounded-3xl p-6 border border-border mb-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Timer className="w-5 h-5 text-[#B8FF37]" />
                        <span className="text-[#B8FF37]" style={{ fontSize: '32px', fontWeight: 700 }}>45</span>
                      </div>
                      <div className="text-muted-foreground">Minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Fire className="w-5 h-5 text-[#FF0055]" />
                        <span className="text-[#FF0055]" style={{ fontSize: '32px', fontWeight: 700 }}>320</span>
                      </div>
                      <div className="text-muted-foreground">Calories</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-background rounded-xl p-3 text-center">
                      <div className="text-[#B8FF37]">8</div>
                      <div className="text-muted-foreground">Exercises</div>
                    </div>
                    <div className="bg-background rounded-xl p-3 text-center">
                      <div className="text-[#00E5FF]">142</div>
                      <div className="text-muted-foreground">Avg BPM</div>
                    </div>
                    <div className="bg-background rounded-xl p-3 text-center">
                      <div className="text-[#FF0055]">3</div>
                      <div className="text-muted-foreground">Sets/Ex</div>
                    </div>
                  </div>
                </div>

                {/* Confetti Animation */}
                <div className="mb-8 text-muted-foreground text-center">
                  <div className="flex gap-2 justify-center mb-2">
                    {['🎊', '✨', '🎉', '⭐', '💫'].map((emoji, i) => (
                      <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                        {emoji}
                      </span>
                    ))}
                  </div>
                  <div>Streak: 13 days 🔥</div>
                </div>

                {/* Actions */}
                <div className="space-y-3 w-full">
                  <Button className="w-full bg-[#B8FF37] text-[#121212] hover:bg-[#A0E030] neon-glow rounded-2xl py-6">
                    Share Achievement
                  </Button>
                  <Button variant="outline" className="w-full border-border rounded-2xl py-6">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Notes */}
        <div className="mt-8 bg-surface p-6 rounded-2xl border border-border">
          <h3 className="mb-4">Player Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
            <div>
              <h4 className="text-foreground mb-2">Active State</h4>
              <ul className="space-y-1">
                <li>• Visual exercise demonstration</li>
                <li>• Large circular timer</li>
                <li>• Progress indicator</li>
                <li>• Quick navigation controls</li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-2">Rest Overlay</h4>
              <ul className="space-y-1">
                <li>• Glass card effect</li>
                <li>• Countdown timer</li>
                <li>• Next exercise preview</li>
                <li>• Skip or extend options</li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-2">Completion</h4>
              <ul className="space-y-1">
                <li>• Celebration animation</li>
                <li>• Workout summary stats</li>
                <li>• Share achievement CTA</li>
                <li>• Streak milestone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
