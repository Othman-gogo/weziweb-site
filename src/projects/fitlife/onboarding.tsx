// Onboarding - 5-step carousel (goal, body, equipment, nutrition, signup)
import { useState } from "react";
import { Button } from "../ui/button";
import { Target, User, Dumbbell, Nutrition, Trophy } from "./icons";
import { BodyHeatMap } from "./illustrations";

export const OnboardingScreens = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      icon: <Target className="w-16 h-16 text-[#B8FF37]" />,
      title: "What's Your Goal?",
      subtitle: "Tell us what you want to achieve",
      options: ["Lose Weight", "Build Muscle", "Stay Active", "Improve Endurance"],
    },
    {
      icon: <User className="w-16 h-16 text-[#00E5FF]" />,
      title: "About Your Body",
      subtitle: "Help us personalize your plan",
      content: "body-stats",
    },
    {
      icon: <Dumbbell className="w-16 h-16 text-[#FF0055]" />,
      title: "Available Equipment",
      subtitle: "What do you have access to?",
      options: ["No Equipment", "Dumbbells", "Full Gym", "Resistance Bands"],
    },
    {
      icon: <Nutrition className="w-16 h-16 text-[#B8FF37]" />,
      title: "Nutrition Tracking",
      subtitle: "Would you like to track your meals?",
      options: ["Yes, track everything", "Only log calories", "No tracking"],
    },
    {
      icon: <Trophy className="w-16 h-16 text-[#00E5FF]" />,
      title: "You're All Set!",
      subtitle: "Let's start your fitness journey",
      content: "signup",
    },
  ];

  const currentStep = steps[step];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8">Onboarding Flow</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Phone Preview */}
          <div className="flex justify-center">
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-hidden flex flex-col">
                {/* Progress Bar */}
                <div className="flex gap-2 p-6">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${
                        i <= step ? "bg-[#B8FF37]" : "bg-[#2A2A2A]"
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-center px-8">
                  <div className="mb-6">{currentStep.icon}</div>
                  <h3 className="text-center mb-2">{currentStep.title}</h3>
                  <p className="text-center text-muted-foreground mb-8">
                    {currentStep.subtitle}
                  </p>

                  {currentStep.options && (
                    <div className="w-full space-y-3 mb-8">
                      {currentStep.options.map((option, i) => (
                        <button
                          key={i}
                          className="w-full bg-surface border border-border hover:border-[#B8FF37] rounded-2xl p-4 transition-all"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                  {currentStep.content === "body-stats" && (
                    <div className="w-full space-y-4 mb-8">
                      <div className="flex items-center justify-center mb-6">
                        <BodyHeatMap activeZones={[3, 5, 6]} />
                      </div>
                      <div className="bg-surface rounded-xl p-4">
                        <label className="text-muted-foreground mb-2 block">Height (cm)</label>
                        <input
                          type="number"
                          placeholder="175"
                          className="w-full bg-background border border-border rounded-lg p-3"
                        />
                      </div>
                      <div className="bg-surface rounded-xl p-4">
                        <label className="text-muted-foreground mb-2 block">Weight (kg)</label>
                        <input
                          type="number"
                          placeholder="70"
                          className="w-full bg-background border border-border rounded-lg p-3"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep.content === "signup" && (
                    <div className="w-full space-y-4 mb-8">
                      <div className="bg-surface rounded-xl p-4">
                        <label className="text-muted-foreground mb-2 block">Email</label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full bg-background border border-border rounded-lg p-3"
                        />
                      </div>
                      <div className="bg-surface rounded-xl p-4">
                        <label className="text-muted-foreground mb-2 block">Password</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full bg-background border border-border rounded-lg p-3"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="p-6 space-y-3">
                  <Button
                    className="w-full bg-[#B8FF37] text-[#121212] hover:bg-[#A0E030] neon-glow rounded-2xl py-6"
                    onClick={() => setStep(Math.min(step + 1, steps.length - 1))}
                  >
                    {step === steps.length - 1 ? "Get Started" : "Continue"}
                  </Button>
                  {step > 0 && (
                    <Button
                      variant="ghost"
                      className="w-full text-muted-foreground"
                      onClick={() => setStep(Math.max(step - 1, 0))}
                    >
                      Back
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Step Info */}
          <div className="space-y-6">
            <div className="bg-surface p-6 rounded-2xl border border-border">
              <h3 className="mb-4">Flow Steps</h3>
              <div className="space-y-3">
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                      i === step ? "bg-[#B8FF37] bg-opacity-10 border border-[#B8FF37]" : "bg-background"
                    }`}
                    onClick={() => setStep(i)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      i <= step ? "bg-[#B8FF37] text-[#121212]" : "bg-[#2A2A2A] text-muted-foreground"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div>{s.title}</div>
                      <div className="text-muted-foreground">{s.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface p-6 rounded-2xl border border-border">
              <h4 className="mb-3">Design Notes</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Progress indicator at top</li>
                <li>• Large tap targets (44px min)</li>
                <li>• Clear visual hierarchy</li>
                <li>• Smooth transitions between steps</li>
                <li>• Back button for navigation</li>
                <li>• Welcoming illustrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
