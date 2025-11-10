// FitLife Cover Page - Logo + Device Mock-up Hero

export const CoverPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="mb-12">
        <svg width="200" height="80" viewBox="0 0 200 80" fill="none">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8FF37" />
              <stop offset="50%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#FF0055" />
            </linearGradient>
          </defs>
          {/* FitLife Icon */}
          <circle cx="40" cy="40" r="30" stroke="url(#logoGradient)" strokeWidth="3" fill="none" className="neon-glow" />
          <path d="M30 40 L40 50 L55 30" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Text */}
          <text x="80" y="50" fill="#FFFFFF" fontSize="32" fontWeight="700" fontFamily="system-ui">
            FitLife
          </text>
        </svg>
      </div>

      {/* Device Mockup */}
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-[320px] h-[640px] bg-[#0A0A0A] rounded-[48px] p-3 shadow-2xl border-4 border-[#2A2A2A]">
          {/* Screen */}
          <div className="w-full h-full bg-background rounded-[36px] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#0A0A0A] rounded-b-3xl z-10" />
            
            {/* Mock Screen Content */}
            <div className="p-6 pt-12">
              <div className="text-muted-foreground mb-2">Good Morning</div>
              <h2 className="mb-6">Alex</h2>
              
              {/* Streak Card */}
              <div className="bg-surface rounded-2xl p-5 mb-4 border border-border neon-glow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-muted-foreground">Streak</span>
                  <span className="text-[#B8FF37]">🔥 12 days</span>
                </div>
                <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-[#B8FF37] to-[#00E5FF] rounded-full" />
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-surface rounded-xl p-3 text-center border border-border">
                  <div className="text-[#B8FF37] mb-1">💪</div>
                  <div className="text-muted-foreground">45min</div>
                </div>
                <div className="bg-surface rounded-xl p-3 text-center border border-border">
                  <div className="text-[#00E5FF] mb-1">🔥</div>
                  <div className="text-muted-foreground">320cal</div>
                </div>
                <div className="bg-surface rounded-xl p-3 text-center border border-border">
                  <div className="text-[#FF0055] mb-1">❤️</div>
                  <div className="text-muted-foreground">142bpm</div>
                </div>
              </div>
              
              {/* Start Workout Button */}
              <button className="w-full bg-[#B8FF37] text-[#121212] rounded-2xl py-4 neon-glow">
                Start Workout
              </button>
            </div>
          </div>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute -inset-8 bg-[#B8FF37] opacity-20 blur-[80px] -z-10" />
      </div>
      
      {/* Tagline */}
      <div className="mt-12 text-center">
        <h3 className="text-[#B8FF37] mb-2">FitLife Mobile UI Kit</h3>
        <p className="text-muted-foreground max-w-md">
          A complete dark-mode fitness app design system with neon accents, 
          custom icons, and interactive components
        </p>
      </div>
    </div>
  );
};
