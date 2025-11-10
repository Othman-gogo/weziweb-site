// FitLife Illustrations - Heat maps, muscle groups, workout silhouettes

export const BodyHeatMap = ({ activeZones = [1, 3, 5] }: { activeZones?: number[] }) => {
  const isActive = (zone: number) => activeZones.includes(zone);
  
  return (
    <svg width="120" height="240" viewBox="0 0 120 240" fill="none">
      {/* Head */}
      <ellipse cx="60" cy="20" rx="15" ry="18" fill={isActive(1) ? "#FF0055" : "#2A2A2A"} opacity={isActive(1) ? "0.8" : "0.3"} />
      
      {/* Shoulders */}
      <ellipse cx="38" cy="48" rx="12" ry="8" fill={isActive(2) ? "#FF0055" : "#2A2A2A"} opacity={isActive(2) ? "0.7" : "0.3"} />
      <ellipse cx="82" cy="48" rx="12" ry="8" fill={isActive(2) ? "#FF0055" : "#2A2A2A"} opacity={isActive(2) ? "0.7" : "0.3"} />
      
      {/* Chest */}
      <rect x="42" y="50" width="36" height="25" rx="8" fill={isActive(3) ? "#B8FF37" : "#2A2A2A"} opacity={isActive(3) ? "0.8" : "0.3"} />
      
      {/* Core */}
      <rect x="45" y="78" width="30" height="30" rx="6" fill={isActive(4) ? "#B8FF37" : "#2A2A2A"} opacity={isActive(4) ? "0.7" : "0.3"} />
      
      {/* Arms */}
      <rect x="20" y="50" width="10" height="50" rx="5" fill={isActive(5) ? "#00E5FF" : "#2A2A2A"} opacity={isActive(5) ? "0.8" : "0.3"} />
      <rect x="90" y="50" width="10" height="50" rx="5" fill={isActive(5) ? "#00E5FF" : "#2A2A2A"} opacity={isActive(5) ? "0.8" : "0.3"} />
      
      {/* Legs */}
      <rect x="45" y="110" width="12" height="60" rx="6" fill={isActive(6) ? "#B8FF37" : "#2A2A2A"} opacity={isActive(6) ? "0.7" : "0.3"} />
      <rect x="63" y="110" width="12" height="60" rx="6" fill={isActive(6) ? "#B8FF37" : "#2A2A2A"} opacity={isActive(6) ? "0.7" : "0.3"} />
      
      {/* Calves */}
      <rect x="46" y="175" width="10" height="45" rx="5" fill={isActive(7) ? "#00E5FF" : "#2A2A2A"} opacity={isActive(7) ? "0.6" : "0.3"} />
      <rect x="64" y="175" width="10" height="45" rx="5" fill={isActive(7) ? "#00E5FF" : "#2A2A2A"} opacity={isActive(7) ? "0.6" : "0.3"} />
    </svg>
  );
};

export const MuscleGroupIcon = ({ group }: { group: 'chest' | 'back' | 'legs' | 'arms' | 'shoulders' | 'core' }) => {
  const icons = {
    chest: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="15" r="8" fill="#B8FF37" opacity="0.3" />
        <path d="M25 30 Q25 25, 30 23 L40 25 L50 23 Q55 25, 55 30 L55 50 Q55 60, 40 65 Q25 60, 25 50 Z" fill="#B8FF37" opacity="0.6" />
      </svg>
    ),
    back: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="15" r="8" fill="#00E5FF" opacity="0.3" />
        <rect x="28" y="25" width="24" height="40" rx="8" fill="#00E5FF" opacity="0.6" />
        <rect x="20" y="30" width="8" height="30" rx="4" fill="#00E5FF" opacity="0.4" />
        <rect x="52" y="30" width="8" height="30" rx="4" fill="#00E5FF" opacity="0.4" />
      </svg>
    ),
    legs: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="28" y="15" width="10" height="50" rx="5" fill="#FF0055" opacity="0.7" />
        <rect x="42" y="15" width="10" height="50" rx="5" fill="#FF0055" opacity="0.7" />
      </svg>
    ),
    arms: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="25" cy="20" r="6" fill="#B8FF37" opacity="0.5" />
        <rect x="20" y="28" width="10" height="35" rx="5" fill="#B8FF37" opacity="0.7" />
        <circle cx="55" cy="20" r="6" fill="#B8FF37" opacity="0.5" />
        <rect x="50" y="28" width="10" height="35" rx="5" fill="#B8FF37" opacity="0.7" />
      </svg>
    ),
    shoulders: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="20" r="6" fill="#00E5FF" opacity="0.3" />
        <ellipse cx="22" cy="32" rx="12" ry="10" fill="#00E5FF" opacity="0.7" />
        <ellipse cx="58" cy="32" rx="12" ry="10" fill="#00E5FF" opacity="0.7" />
      </svg>
    ),
    core: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="30" y="25" width="20" height="30" rx="6" fill="#FF0055" opacity="0.7" />
        <line x1="32" y1="35" x2="48" y2="35" stroke="#FF0055" strokeWidth="2" opacity="0.9" />
        <line x1="32" y1="42" x2="48" y2="42" stroke="#FF0055" strokeWidth="2" opacity="0.9" />
      </svg>
    ),
  };
  
  return icons[group];
};

export const WorkoutSilhouette = ({ type }: { type: 'pushup' | 'squat' | 'plank' | 'lunge' }) => {
  const silhouettes = {
    pushup: (
      <svg width="160" height="100" viewBox="0 0 160 100" fill="none">
        <circle cx="130" cy="25" r="10" fill="#B8FF37" opacity="0.8" />
        <line x1="130" y1="35" x2="100" y2="60" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="60" x2="40" y2="60" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="60" x2="20" y2="75" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="60" x2="110" y2="80" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
        <line x1="40" y1="60" x2="50" y2="80" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    squat: (
      <svg width="100" height="160" viewBox="0 0 100 160" fill="none">
        <circle cx="50" cy="20" r="12" fill="#00E5FF" opacity="0.8" />
        <line x1="50" y1="32" x2="50" y2="70" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="50" x2="30" y2="65" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="50" x2="70" y2="65" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="70" x2="35" y2="110" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="70" x2="65" y2="110" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="35" y1="110" x2="25" y2="140" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="110" x2="75" y2="140" stroke="#00E5FF" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    plank: (
      <svg width="160" height="80" viewBox="0 0 160 80" fill="none">
        <circle cx="130" cy="30" r="10" fill="#FF0055" opacity="0.8" />
        <line x1="130" y1="40" x2="30" y2="40" stroke="#FF0055" strokeWidth="4" strokeLinecap="round" />
        <line x1="130" y1="40" x2="140" y2="60" stroke="#FF0055" strokeWidth="4" strokeLinecap="round" />
        <line x1="30" y1="40" x2="20" y2="60" stroke="#FF0055" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    lunge: (
      <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
        <circle cx="60" cy="20" r="12" fill="#B8FF37" opacity="0.8" />
        <line x1="60" y1="32" x2="60" y2="80" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="50" x2="40" y2="70" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="50" x2="80" y2="70" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="80" x2="40" y2="140" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="80" x2="90" y2="120" stroke="#B8FF37" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  };
  
  return silhouettes[type];
};

export const ProgressGraph = ({ data = [20, 35, 50, 65, 75] }: { data?: number[] }) => (
  <svg width="280" height="120" viewBox="0 0 280 120" fill="none">
    <defs>
      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B8FF37" />
        <stop offset="50%" stopColor="#00E5FF" />
        <stop offset="100%" stopColor="#FF0055" />
      </linearGradient>
    </defs>
    {/* Grid lines */}
    {[0, 1, 2, 3, 4].map((i) => (
      <line
        key={i}
        x1="20"
        y1={20 + i * 20}
        x2="260"
        y2={20 + i * 20}
        stroke="#2A2A2A"
        strokeWidth="1"
      />
    ))}
    {/* Progress line */}
    <polyline
      points={data.map((val, i) => `${20 + (i * 60)},${100 - val}`).join(' ')}
      stroke="url(#progressGradient)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Data points */}
    {data.map((val, i) => (
      <circle
        key={i}
        cx={20 + (i * 60)}
        cy={100 - val}
        r="4"
        fill="url(#progressGradient)"
      />
    ))}
  </svg>
);
