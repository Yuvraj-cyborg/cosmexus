"use client";

import React from "react";

export default function CuttingMatGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full text-gray-400"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Fine grid pattern */}
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
          </pattern>
          {/* Major grid pattern */}
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#smallGrid)" />
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          </pattern>
        </defs>
        
        {/* Fill with grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Border frame with corner markers and intersecting lines */}
      <svg
        className="absolute inset-0 w-full h-full text-gray-500"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Outer border */}
        <rect
          x="20"
          y="20"
          width="960"
          height="960"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
        
        {/* Inner border */}
        <rect
          x="40"
          y="40"
          width="920"
          height="920"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
        />

        {/* Corner markers - top left */}
        <line x1="15" y1="20" x2="60" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="20" y1="15" x2="20" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.4" />
        
        {/* Corner markers - top right */}
        <line x1="940" y1="20" x2="985" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="980" y1="15" x2="980" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="980" cy="20" r="3" fill="currentColor" opacity="0.4" />
        
        {/* Corner markers - bottom left */}
        <line x1="15" y1="980" x2="60" y2="980" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="20" y1="940" x2="20" y2="985" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="20" cy="980" r="3" fill="currentColor" opacity="0.4" />
        
        {/* Corner markers - bottom right */}
        <line x1="940" y1="980" x2="985" y2="980" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="980" y1="940" x2="980" y2="985" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="980" cy="980" r="3" fill="currentColor" opacity="0.4" />

        {/* Intersection dots along edges */}
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((pos) => (
          <g key={pos}>
            {/* Top edge */}
            <circle cx={pos} cy="20" r="2" fill="currentColor" opacity="0.3" />
            <line x1={pos} y1="15" x2={pos} y2="25" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            {/* Bottom edge */}
            <circle cx={pos} cy="980" r="2" fill="currentColor" opacity="0.3" />
            <line x1={pos} y1="975" x2={pos} y2="985" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            {/* Left edge */}
            <circle cx="20" cy={pos} r="2" fill="currentColor" opacity="0.3" />
            <line x1="15" y1={pos} x2="25" y2={pos} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            {/* Right edge */}
            <circle cx="980" cy={pos} r="2" fill="currentColor" opacity="0.3" />
            <line x1="975" y1={pos} x2="985" y2={pos} stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          </g>
        ))}
      </svg>
    </div>
  );
}
