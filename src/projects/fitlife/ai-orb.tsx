// AI Thinking Orb - Animated gradient component

export const AIOrb = ({ size = 64, className = "" }: { size?: number; className?: string }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div className="absolute inset-0 orb-animate">
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
          <defs>
            <radialGradient id="orb-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B8FF37" stopOpacity="0.8">
                <animate attributeName="stopColor" values="#B8FF37;#00E5FF;#FF0055;#B8FF37" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.6">
                <animate attributeName="stopColor" values="#00E5FF;#FF0055;#B8FF37;#00E5FF" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#FF0055" stopOpacity="0.2">
                <animate attributeName="stopColor" values="#FF0055;#B8FF37;#00E5FF;#FF0055" dur="3s" repeatCount="indefinite" />
              </stop>
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="32" cy="32" r="28" fill="url(#orb-gradient)" filter="url(#glow)" />
          <circle cx="32" cy="32" r="20" fill="none" stroke="#B8FF37" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="32" cy="32" r="12" fill="none" stroke="#00E5FF" strokeWidth="0.5" opacity="0.5">
            <animate attributeName="r" values="10;14;10" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

// Mini version for loading states
export const AIThinking = () => (
  <div className="flex items-center gap-2">
    <AIOrb size={24} />
    <span className="text-muted-foreground">AI thinking...</span>
  </div>
);
