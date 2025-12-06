import React from 'react';

// Configuration for the schematic nodes representing the network architecture
const NODES = [
  // Left Side Nodes
  { id: 'cloud', x: 200, y: 150, label: 'CLOUD.SYS', type: 'left' },
  { id: 'secure', x: 120, y: 300, label: 'SECURE.NET', type: 'left', extendLine: true },
  { id: 'ai', x: 200, y: 450, label: 'AI.MODEL', type: 'left' },
  // Right Side Nodes
  { id: 'edge', x: 600, y: 150, label: 'EDGE.COMP', type: 'right' },
  { id: 'data', x: 680, y: 300, label: 'DATA.LAKE', type: 'right', extendLine: true },
  { id: 'api', x: 600, y: 450, label: 'API.GATE', type: 'right' },
];

// Configuration for the connecting energy beams (Bezier curves from center 400,300)
const BEAMS = [
  { d: "M200 150 Q 300 225 400 300", delay: 0 },
  { d: "M120 300 Q 260 300 400 300", delay: 1 },
  { d: "M200 450 Q 300 375 400 300", delay: 2 },
  { d: "M600 150 Q 500 225 400 300", delay: 0 },
  { d: "M680 300 Q 540 300 400 300", delay: 1 },
  { d: "M600 450 Q 500 375 400 300", delay: 2 },
];

export const AboutHero = () => {
  return (
    <section className="container mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-8 relative z-10">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-display tracking-widest text-nova-peach uppercase">
            Est. 2018
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            The Architects of <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-nova-peach to-white">
              Tomorrow's Digital Landscape
            </span>
          </h1>
          
          <p className="text-lg text-white/70 leading-relaxed border-l-2 border-nova-peach/50 pl-6">
            NovaStack isn't just a service provider; we are the strategic partner for forward-thinking enterprises. 
            We engineer sustainable, scalable, and secure ecosystems that turn technological complexity into competitive advantage.
          </p>
        </div>

        {/* Right Column: Quantum Architectural Interface (SVG) - Hidden on Mobile */}
        <div className="hidden md:block relative w-full aspect-4/3 bg-nova-dark/30 border border-white/5 overflow-hidden backdrop-blur-sm group">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-20" 
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          <svg viewBox="0 0 800 600" className="w-full h-full relative z-10 filter drop-shadow-2xl">
            <defs>
              {/* Linear Gradient for Beams */}
              <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(39, 100%, 84%)" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(39, 100%, 84%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              {/* Filter for Glow Effect */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Render Connecting Beams */}
            {BEAMS.map((beam, i) => (
              <g key={`beam-${i}`}>
                {/* Static Guide Line */}
                <path d={beam.d} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Active Flowing Beam */}
                <path d={beam.d} fill="none" stroke="url(#beamGrad)" strokeWidth="2" filter="url(#glow)">
                  <animate attributeName="stroke-dasharray" from="0, 1000" to="1000, 0" dur="3s" begin={`${beam.delay}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="4s" begin={`${beam.delay}s`} repeatCount="indefinite" />
                </path>
              </g>
            ))}

            {/* Render Peripheral Nodes */}
            {NODES.map((node) => (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                {/* Extension Line (Ghost Line) */}
                {node.extendLine && (
                  <line 
                    x1={node.type === 'left' ? -100 : 100} 
                    y1={0} 
                    x2={0} 
                    y2={0} 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeDasharray="2 4" 
                  />
                )}
                
                {/* Hexagon Shape - Updated stroke to Peach/White theme */}
                <polygon 
                  points="-30,-17 -30,17 0,34 30,17 30,-17 0,-34" 
                  fill="rgba(10,10,30,0.8)" 
                  stroke="hsl(39, 100%, 84%)" 
                  strokeWidth="1.5"
                  filter="url(#glow)"
                >
                  <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="4s" repeatCount="indefinite" />
                </polygon>
                
                {/* Label */}
                <text 
                  y="50" 
                  textAnchor="middle" 
                  fill="rgba(255,255,255,0.7)" 
                  fontSize="10" 
                  fontFamily="monospace" 
                  letterSpacing="1"
                >
                  {node.label}
                </text>
              </g>
            ))}

            {/* Central Reactor Hub */}
            <g transform="translate(400, 300)">
              {/* Outer Rotating Ring */}
              <circle r="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="10 5">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
              </circle>
              
              {/* Counter-Rotating Inner Ring */}
              <circle r="45" fill="none" stroke="hsl(39, 100%, 84%)" strokeWidth="1.5" strokeDasharray="40 60" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="15s" repeatCount="indefinite" />
              </circle>

              {/* Core Glow */}
              <circle r="25" fill="hsl(39, 100%, 84%)" filter="url(#glow)">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Solid Core Center */}
              <circle r="15" fill="#fff" />
            </g>
          </svg>

          {/* Holographic Overlay Details */}
          <div className="absolute top-4 left-4 text-[10px] font-mono text-nova-peach/50">
            SYS.STATUS: OPTIMAL<br/>
            NODES: 6/6 ACTIVE
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/30 text-right">
            LATENCY: 12ms<br/>
            ENCRYPTION: AES-256
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero