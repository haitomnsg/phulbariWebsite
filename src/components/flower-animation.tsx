export function FlowerAnimation() {
  const petalColor = "hsl(var(--primary) / 0.7)";
  const centerColor = "hsl(var(--secondary))";

  return (
    <div className="w-64 h-64 md:w-80 md:h-80 relative" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-80">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <g className="animate-pulse-slow origin-center">
          {[0, 60, 120, 180, 240, 300].map(angle => (
            <path 
              key={angle}
              d="M 100 25 C 140 25, 140 75, 100 100 C 60 75, 60 25, 100 25"
              fill={petalColor} 
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </g>
        
        <circle cx="100" cy="100" r="25" fill={centerColor} className="animate-pulse-fast origin-center" filter="url(#glow)"/>
      </svg>
    </div>
  );
}
